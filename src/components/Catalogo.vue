<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import type { Producto, Categoria } from '../types';

interface Props {
  productos: Producto[];
  categorias: Categoria[];
}

const props = defineProps<Props>();

const search = ref('');
const activeCategory = ref<string | null>(null);

function readUrl() {
  const params = new URLSearchParams(window.location.search);
  search.value = params.get('q') ?? '';
  activeCategory.value = params.get('cat');
}

function updateUrl() {
  const params = new URLSearchParams();
  if (search.value.trim()) params.set('q', search.value.trim());
  if (activeCategory.value) params.set('cat', activeCategory.value);

  const query = params.toString();
  const url = query ? `/?${query}#catalogo` : '/#catalogo';
  window.history.replaceState(null, '', url);
}

onMounted(() => {
  readUrl();
  window.addEventListener('popstate', readUrl);
});

watch([search, activeCategory], updateUrl, { deep: true });

const filtered = computed(() => {
  const term = search.value.trim().toLowerCase();
  return props.productos.filter((p) => {
    const matchesCategory = !activeCategory.value || p.categoria === activeCategory.value;
    const matchesSearch =
      !term ||
      p.nombre.toLowerCase().includes(term) ||
      p.specs.some((s) => s.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });
});

function formatPrice(price: number) {
  return `S/ ${price}`;
}

function categoryName(slug: string) {
  return props.categorias.find((c) => c.slug === slug)?.nombre ?? slug;
}
</script>

<template>
  <section id="catalogo" class="wrap" style="padding-top: 56px; padding-bottom: 24px;">
    <h2 class="neon neon-small" style="margin-bottom: 24px;">Catálogo</h2>

    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px;">
      <button
        class="chip"
        :aria-pressed="activeCategory === null"
        @click="activeCategory = null"
      >
        Todos
      </button>
      <button
        v-for="cat in categorias"
        :key="cat.slug"
        class="chip"
        :aria-pressed="activeCategory === cat.slug"
        @click="activeCategory = cat.slug"
      >
        {{ cat.nombre }}
      </button>
    </div>

    <div v-if="filtered.length" class="grid">
      <article v-for="p in filtered" :key="p.slug" class="card">
        <div class="placeholder" style="height: 150px;">[foto del producto]</div>
        <span style="font-size: 14px; color: var(--muted);">{{ categoryName(p.categoria) }}</span>
        <strong style="font-size: 18px;">{{ p.nombre }}</strong>
        <span style="font-size: 20px; font-weight: 700;">{{ formatPrice(p.precio) }}</span>
        <a
          class="btn btn-small"
          style="text-align: center;"
          :href="`/producto/${p.slug}`"
        >
          Pedir información
        </a>
      </article>
    </div>

    <div v-else class="card" style="max-width: 600px;">
      <strong>No encontramos resultados</strong>
      <p style="margin: 0;">
        Prueba con otra palabra o vuelve a
        <button class="chip" @click="search = ''; activeCategory = null">Todos</button>.
      </p>
    </div>
  </section>
</template>

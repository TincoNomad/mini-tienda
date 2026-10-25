import assert from 'node:assert/strict';
import { sanitizarNumero } from '../src/lib/whatsapp.ts';

assert.strictEqual(sanitizarNumero('51987654321'), '51987654321');
assert.strictEqual(sanitizarNumero('+51 987 654 321'), '51987654321');
assert.strictEqual(sanitizarNumero('987-654-321'), '987654321');
assert.strictEqual(sanitizarNumero('12345'), '');
assert.strictEqual(sanitizarNumero('x' + '9'.repeat(20)), '');
assert.strictEqual(sanitizarNumero(''), '');

console.log('OK: sanitizarNumero');

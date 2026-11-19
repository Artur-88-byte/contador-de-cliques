const test = require('node:test');
const assert = require('node:assert/strict');
const { changeCount, resetCount } = require('./script.js');

test('adiciona um ao contador', () => {
  assert.equal(changeCount(0, 1), 1);
});
test('subtrai um do contador', () => {
  assert.equal(changeCount(5, -1), 4);
});
test('zera o contador', () => {
  assert.equal(resetCount(), 0);
});

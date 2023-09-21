import { add } from './index.mjs';
import test from 'node:test';
import assert from 'node:assert';

test('1+2 should be 3', () => {
  let result = add(1, 2);
  assert.equal(result, 3, 'add 1+3 should be 3');
});

test('10+10 should be 20', () => {
  let result = add(10, 10);
  assert.equal(result, 20, 'add 10+10 should be 20');
});
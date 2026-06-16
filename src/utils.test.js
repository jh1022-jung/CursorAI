import { describe, it } from 'node:test';
import assert from 'node:assert';
import { normalizeEmail } from './utils.js';

describe('normalizeEmail', () => {
  it('앞뒤 공백을 제거하고 소문자로 변환한다', () => {
    assert.strictEqual(normalizeEmail('  Alice@Example.COM  '), 'alice@example.com');
  });

  it('이미 정규화된 이메일은 그대로 반환한다', () => {
    assert.strictEqual(normalizeEmail('user@example.com'), 'user@example.com');
  });

  it('유효하지 않은 입력이면 null을 반환한다', () => {
    assert.strictEqual(normalizeEmail(''), null);
    assert.strictEqual(normalizeEmail('   '), null);
    assert.strictEqual(normalizeEmail(null), null);
    assert.strictEqual(normalizeEmail(undefined), null);
    assert.strictEqual(normalizeEmail(123), null);
  });
});

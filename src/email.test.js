import { describe, it } from 'node:test';
import assert from 'node:assert';
import { extractEmails, isValidEmail, getValidEmails } from './email.js';

describe('extractEmails', () => {
  it('배열에서 이메일을 추출한다', () => {
    const members = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];
    assert.deepStrictEqual(extractEmails(members), [
      'alice@example.com',
      'bob@example.com',
    ]);
  });

  it('배열이 아니면 빈 배열을 반환한다', () => {
    assert.deepStrictEqual(extractEmails(null), []);
    assert.deepStrictEqual(extractEmails(undefined), []);
  });
});

describe('isValidEmail', () => {
  it('유효한 이메일 형식을 통과시킨다', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
  });

  it('유효하지 않은 이메일 형식을 거부한다', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail(''), false);
    assert.strictEqual(isValidEmail(123), false);
  });

  it('RFC 5322 스펙 예시와 길이 제한을 따른다', () => {
    assert.strictEqual(isValidEmail('alice@example.com'), true);
    assert.strictEqual(isValidEmail('user+tag@example.com'), true);
    assert.strictEqual(isValidEmail('a'.repeat(64) + '@example.com'), true);
    assert.strictEqual(isValidEmail('a'.repeat(65) + '@example.com'), false);
    assert.strictEqual(isValidEmail('a'.repeat(243) + '@example.com'), false);
  });

  it('IP 주소 형식에서 잘못된 옥텟(00)을 거부한다', () => {
    assert.strictEqual(isValidEmail('user@[192.168.1.1]'), true);
    assert.strictEqual(isValidEmail('user@[00.0.0.1]'), false);
  });
});

describe('getValidEmails', () => {
  it('유효한 이메일만 반환한다', () => {
    const members = [
      { email: 'valid@example.com' },
      { email: 'invalid' },
      { email: 'also-valid@test.org' },
    ];
    assert.deepStrictEqual(getValidEmails(members), [
      'valid@example.com',
      'also-valid@test.org',
    ]);
  });

  it('배열이 아니면 빈 배열을 반환한다', () => {
    assert.deepStrictEqual(getValidEmails(null), []);
  });
});

/**
 * 이메일 문자열을 비교·저장용으로 정규화한다 (앞뒤 공백 제거, 소문자 변환).
 * @param {string} email - 정규화할 이메일
 * @returns {string|null} 정규화된 이메일, 유효하지 않은 입력이면 null
 */
export function normalizeEmail(email) {
  if (typeof email !== 'string') return null;

  const trimmed = email.trim();
  if (trimmed === '') return null;

  return trimmed.toLowerCase();
}

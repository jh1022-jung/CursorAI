import { isValidEmail } from './validator.js';

// 사용자 배열에서 이메일만 추출하는 함수
export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

// extractEmails와 isValidEmail을 결합해 유효한 이메일만 반환
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

// 유효한 이메일 중복 제거
export function uniqueValidEmails(users) {
  return [...new Set(getValidEmails(users))];
}

export { isValidEmail };

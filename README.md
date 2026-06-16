# CursorAI

Cursor AI를 활용한 소프트웨어개발기본과정

이메일 검증·추출 유틸리티 모듈을 제공하는 `cursor-demo` 프로젝트입니다.

## 사용법

```bash
npm test
```

```js
import { getValidEmails, normalizeEmail } from './src/index.js';

const users = [
  { email: 'Alice@Example.com' },
  { email: 'invalid' },
  { email: 'bob@example.com' },
];

getValidEmails(users); // ['Alice@Example.com', 'bob@example.com']
normalizeEmail('  Alice@Example.com  '); // 'alice@example.com'
```

자세한 검증 규칙은 [docs/validator.md](docs/validator.md)를 참고하세요.

## 릴리스 노트

### v1.0.0

**이메일 검증·추출 유틸리티 모듈과 테스트를 포함한 첫 공식 릴리스입니다.**

#### ✨ 기능

- **이메일 검증 (`validator.js`)** — RFC 5322 형식 및 RFC 3696 길이 제한(로컬 파트 64자, 전체 254자)을 만족하는 `isValidEmail()` 제공
- **이메일 추출·필터링 (`email.js`)**
  - `extractEmails()` — 사용자 배열에서 이메일 목록 추출
  - `getValidEmails()` — 유효한 이메일만 필터링
  - `uniqueValidEmails()` — 유효 이메일 중복 제거
- **이메일 정규화 (`utils.js`)** — `normalizeEmail()`으로 앞뒤 공백 제거 및 소문자 변환
- **테스트 스위트** — `email.test.js`, `utils.test.js` 추가 (`npm test`로 실행)

#### 🧹 기타

- 이메일 검증 모듈 사용 가이드 문서 추가 (`docs/validator.md`)
- Cursor 코딩 스타일 규칙 추가 (`.cursor/rules/coding-style.mdc`)
- PR 점검용 Cursor 슬래시 명령 `prep-pr` 추가

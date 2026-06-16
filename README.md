# CursorAI

Cursor AI를 활용한 소프트웨어개발기본과정

이메일 검증·추출 유틸리티 모듈을 제공하는 `cursor-demo` 프로젝트입니다.

## 사용법

```bash
npm test
```

```js
import { getValidEmails, normalizeEmail } from './src/index.js';
import { login } from './src/auth.js';

const users = [
  { email: 'Alice@Example.com' },
  { email: 'invalid' },
  { email: 'bob@example.com' },
];

getValidEmails(users); // ['Alice@Example.com', 'bob@example.com']
normalizeEmail('  Alice@Example.com  '); // 'alice@example.com'

login('user@example.com', 'secret'); // { success: true }
login('invalid', 'secret');            // { success: false, error: 'INVALID_EMAIL' }
```

자세한 검증 규칙은 [docs/validator.md](docs/validator.md)를 참고하세요.

## 릴리스 노트

### v1.1.0

**인증 모듈과 Cursor 훅 기반 셸 명령 감사·차단 정책을 추가한 릴리스입니다.**

#### ✨ 기능

- **로그인 검증 (`auth.js`)** — `validator.js`의 `isValidEmail`을 직접 사용하는 `login()` 제공
  - 유효하지 않은 이메일 → `INVALID_EMAIL`
  - 빈 비밀번호 → `INVALID_PASSWORD`
- **Cursor 훅 (`.cursor/hooks/`)**
  - `audit.mjs` — 파일 편집·셸 실행 이벤트를 감사 로그에 기록
  - `block-rm.mjs` — `rm -rf` 패턴 셸 명령 차단 (`failClosed: true`)

#### 🧹 기타

- `email.js` 함수에 한국어 JSDoc 보강
- Windows 환경 호환을 위해 감사 훅을 bash(`audit.sh`)에서 Node(`audit.mjs`)로 전환
- PR 점검용 Cursor 슬래시 명령 `prep-pr` 유지

---

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

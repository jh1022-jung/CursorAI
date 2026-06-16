import { appendFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';

const payload = await new Response(process.stdin).text();
const logFile = join(tmpdir(), 'cursor-audit.log');
const timestamp = new Date().toISOString();

mkdirSync(dirname(logFile), { recursive: true });
appendFileSync(logFile, `${timestamp} ${payload}\n`);

let data;
try {
  data = JSON.parse(payload);
} catch {
  data = null;
}

// beforeShellExecution: 셸 명령 허용 응답
if (data?.command !== undefined) {
  console.log(JSON.stringify({ permission: 'allow' }));
}

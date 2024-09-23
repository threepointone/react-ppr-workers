import { writeFileSync } from 'node:fs';
import { unstable_dev } from 'wrangler';

const worker = await unstable_dev('./src/server/app.tsx', {
  config: 'wrangler.app.toml',
  define: ['IS_PRERENDER:true'],
});

try {
  const res = await worker.fetch('http://localhost:8787/');
  const body = await res.json();
  writeFileSync('./src/prerender/data.json', JSON.stringify(body, null, 2));
} finally {
  await worker.stop();
}

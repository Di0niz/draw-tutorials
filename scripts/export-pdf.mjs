import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'

const slug = process.argv[2]

if (!slug) {
  console.error('usage: pnpm pdf <lesson-slug>')
  process.exit(1)
}

const entry = resolve('lessons', slug, 'slides.md')

if (!existsSync(entry)) {
  console.error(`no lesson at ${entry}`)
  process.exit(1)
}

const output = resolve('lessons', slug, 'dist', `${slug}.pdf`)
const result = spawnSync(
  'slidev',
  ['export', entry, '--output', output, '--with-toc', '--wait', '600'],
  { stdio: 'inherit', shell: true },
)

process.exit(result.status ?? 1)

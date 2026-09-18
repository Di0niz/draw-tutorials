import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const [slug, slot, caption] = process.argv.slice(2)

if (!slug || !slot) {
  console.error('usage: node scripts/placeholder.mjs <lesson-slug> <slot> [caption]')
  process.exit(1)
}

const text = (caption ?? slot).replace(/[<>&]/g, ' ')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1264 1680">
  <rect width="1264" height="1680" fill="#efece4"/>
  <rect x="20" y="20" width="1224" height="1640" fill="none" stroke="#c9c2b4" stroke-width="5" stroke-dasharray="20 16"/>
  <text x="632" y="810" font-family="Inter, sans-serif" font-size="46" text-anchor="middle" fill="#8a8272">нет картинки</text>
  <text x="632" y="880" font-family="Inter, sans-serif" font-size="34" text-anchor="middle" fill="#a49b8a">${text}</text>
</svg>
`

const dir = resolve('lessons', slug, 'images')
mkdirSync(dir, { recursive: true })
writeFileSync(resolve(dir, `${slot}.svg`), svg)
console.log(`lessons/${slug}/images/${slot}.svg`)

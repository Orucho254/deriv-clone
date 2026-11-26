import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve, sep } from 'node:path'

const dist = resolve('dist')
const html = readFileSync(resolve(dist, 'index.html'), 'utf8')
assert.match(html, /Independent development preview/i)
assert.match(html, /id="root"/)
const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(match => match[1])
  .filter(url => url.startsWith('./'))
assert(assets.some(url => url.endsWith('.js')), 'Missing relative JavaScript entry')
assert(assets.some(url => url.endsWith('.css')), 'Missing relative CSS entry')
for (const url of assets) {
  const target = resolve(dist, url)
  assert(target.startsWith(dist + sep), 'Asset escapes output folder')
  assert(existsSync(target), 'Missing asset: ' + url)
}
assert(!/(?:src|href)="\/assets\//.test(html), 'Root-relative asset path breaks project hosting')
console.log('Static output and relative asset paths passed.')

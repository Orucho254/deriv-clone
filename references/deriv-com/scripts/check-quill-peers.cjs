const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const lock = require('../package-lock.json')
const peers = ['tailwind-merge', 'class-variance-authority', '@use-gesture/react', '@headlessui/react']
for (const name of peers) {
    const expected = lock.packages['node_modules/' + name].version
    const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'node_modules', name, 'package.json'), 'utf8'))
    assert.equal(manifest.version, expected, name + ' lockfile version mismatch')
    console.log(name + '@' + expected + ' OK')
}
const { twJoin } = require('tailwind-merge')
assert.equal(twJoin('base', false, 'active'), 'base active')

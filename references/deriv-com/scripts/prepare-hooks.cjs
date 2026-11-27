// The archived project may live inside a larger Git repository.
// Do not install hooks into the enclosing repository or during CI.
const fs = require('node:fs')
const path = require('node:path')
const root = path.resolve(__dirname, '..')
if (process.env.CI || process.env.HUSKY === '0' || !fs.existsSync(path.join(root, '.git'))) {
    console.log('Skipping Git hook installation in CI or nested archive.')
} else {
    require('husky').install(path.join(root, '.husky'))
}

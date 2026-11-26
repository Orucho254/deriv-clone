# Build readiness

This repository contains two different projects. Do not publish the reference trees as a live financial service.

- `application/`: independent React/Vite development preview; no account collection, deposits or live trades.
- `references/deriv-com/`: archived Gatsby reference, with Apache 2.0 source license. The license does not grant a general right to use Deriv trademarks or represent affiliation.
- `references/deriv-com-v2/`: separate reference project.

## Independent application

The lockfile is committed. CI uses Node 24, installs from the lockfile, lints, compiles, checks relative asset URLs and uploads only application/dist. There is deliberately no public deployment step. Verify the build result before enabling hosting. The existing visual design is unchanged.

## Archived Gatsby findings

The Windows install logs show successive native binary failures in LMDB, Sharp and Parcel Watcher, followed by an unavailable Strapi CMS, missing GraphQL types and memory exhaustion. The most recent log shows a missing qtJoin export from @deriv/quill-design. The theme declares ^1.3.2; a manual node_modules change is not represented by a Git commit. A clean lockfile-based installation and export compatibility check are still required. The local-only CMS schema stub does not restore authentic content or risk figures.

Keep the original source for local research. Do not use its signup, authentication, payment or trading paths in a public preview. A public independent application needs its own branding and authorized integrations; do not present copied regulatory documents as its credentials.

## Verification

Review the GitHub Actions build result and artifact. A passing static-output check is not a browser test, and is not proof of production readiness. Test desktop, tablet and phone layouts separately.

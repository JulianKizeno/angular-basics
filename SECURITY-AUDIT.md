# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 8, "moderate": 28, "high": 42, "critical": 5, "total": 83}. After remediation: {"info": 0, "low": 3, "moderate": 18, "high": 13, "critical": 0, "total": 34}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "angular-basics",   "manifest_sha256": "52d03895a6ee70e7c73f1a942e226f554c9d5db9371dc9bcf6ca2e1951fe3376",   "lock_sha256": "6c0bf73c7e96b154a5ce98f698b5f7a7cb6c803403c36a86ed723479fb363b61",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `@angular-devkit/build-angular`: high; requires dependency migration. 
- `@angular/animations`: moderate; requires dependency migration. 
- `@angular/cli`: high; review transitive dependency constraints. 
- `@angular/common`: high; requires dependency migration. https://github.com/advisories/GHSA-39pv-4j6c-2g6v https://github.com/advisories/GHSA-48r7-hpm6-gfxm https://github.com/advisories/GHSA-58c5-g7wp-6w37 https://github.com/advisories/GHSA-jfgx-762w-99vr https://github.com/advisories/GHSA-jhpw-976m-542j https://github.com/advisories/GHSA-p297-fm68-3q8c https://github.com/advisories/GHSA-p3vc-36g9-x9gr https://github.com/advisories/GHSA-q6f4-qqrg-jv6x
- `@angular/compiler`: high; requires dependency migration. https://github.com/advisories/GHSA-58w9-8g37-x9v5 https://github.com/advisories/GHSA-f3m7-gqxr-g87x https://github.com/advisories/GHSA-hh8m-fm6v-7cvg https://github.com/advisories/GHSA-jj27-h5hq-8x99 https://github.com/advisories/GHSA-jrmj-c5cx-3cw6 https://github.com/advisories/GHSA-v4hv-rgfq-gp49
- `@angular/compiler-cli`: moderate; requires dependency migration. 
- `@angular/core`: high; requires dependency migration. https://github.com/advisories/GHSA-692r-grfm-v8x7 https://github.com/advisories/GHSA-f3m7-gqxr-g87x https://github.com/advisories/GHSA-hh8m-fm6v-7cvg https://github.com/advisories/GHSA-jj27-h5hq-8x99 https://github.com/advisories/GHSA-jrmj-c5cx-3cw6 https://github.com/advisories/GHSA-prjf-86w9-mfqv https://github.com/advisories/GHSA-rgjc-h3x7-9mwg
- `@angular/forms`: moderate; requires dependency migration. 
- `@angular/platform-browser`: moderate; requires dependency migration. 
- `@angular/platform-browser-dynamic`: moderate; requires dependency migration. 
- `@angular/router`: high; requires dependency migration. https://github.com/advisories/GHSA-62vg-58rm-qff7 https://github.com/advisories/GHSA-ff3f-86qr-9cv3

Do not treat compatible lockfile updates as completion of the framework migrations above.

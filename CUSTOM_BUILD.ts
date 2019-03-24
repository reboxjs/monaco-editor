import { release } from "os";

Make sure the add `@vscode/monaco-editor-code` as deveDependencies.
Modify following paths by replacing `monaco-editor` with `@vscode/monaco-editor`


Install:
```
yarn
~~

Custom modification
```
./node_modules/monaco-css/release/esm/css.worker.js
./node_modules/monaco-html/release/esm/html.worker.js
./node_modules/monaco-typescript/release/esm/typescript.worker.js
```

Release
```
yarn release
```

Publish
```
cd release

Add to package.json
"publishConfig": {
    "access": "public"
},

npm publish
```
import { release } from "os";

Make sure the add `@vscode/monaco-editor-code` as deveDependencies.
Modify following paths by replacing `monaco-editor` with `@vscode/monaco-editor`


## Install:
```
yarn
```

## Custom modification
```
./node_modules/monaco-css/release/esm/css.worker.js
./node_modules/monaco-html/release/esm/html.worker.js
./node_modules/monaco-json/release/esm/json.worker.js
./node_modules/monaco-typescript/release/esm/typescript.worker.js
./node_modules/monaco-typescript/release/esm/fillers/monaco-editor-core.js
node_modules/monaco-css/release/esm/fillers/monaco-editor-core.js
node_modules/monaco-html/release/esm/fillers/monaco-editor-core.js
node_modules/monaco-json/release/esm/fillers/monaco-editor-core.js
node_modules/monaco-languages/release/esm/fillers/monaco-editor-core.js
```

## Note
1. Make sure rename to `@vscode/monaco-editor-code` in the `glupfile.js` if it is recently changed.

```
./glupfile.js --line 430
```

2. Need to modify fillers from `monaco-editor-code` to `@vscode/monaco-editor-code`

## Release
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
# vscode-hyperupcall-packs

My VSCode extension packs for use in [Profiles](https://code.visualstudio.com/docs/editor/profiles) and [Containers](https://code.visualstudio.com/docs/devcontainers/containers).

## Summary

There are three categories of plugin packs:

### 1. Decoration packs

- Base (Things like EditorConfig, TODO highlighting, etc.)
- Core (Contains all decoration packs except itself)
- Icons (Adds [file icon themes](https://code.visualstudio.com/api/extension-guides/file-icon-theme))
- Product Icons (Adds [product icon themes](https://code.visualstudio.com/api/extension-guides/product-icon-theme))
- Syntax (Adds [syntax highlightings](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide))
- Themes (Adds [color themes](https://code.visualstudio.com/api/extension-guides/color-theme))

### 2. Ecosystem packs

- All (All ecosystem packs and platform packs)
- Cpp
- DevOps
- Go
- Java
- LaTeX
- Markdown
- PHP
- Python
- Ruby
- Rust
- Shell
- Web

### 3. Platform packs

- \*nix
- Windows

## Usage

Click the _Extensions_ tab and search for `Edwin's Pack:` to see all the packs. I recommend choosing one extension from each category (they are color-coded). For example, see this [`devcontainer.json`](https://code.visualstudio.com/docs/devcontainers/containers):

```jsonc
{
	"image": "mcr.microsoft.com/devcontainers/typescript-node",
	"forwardPorts": [3000],
	"customizations": {
		"vscode": {
			"extensions": [
				"EdwinKofler.vscode-hyperupcall-pack-core",
				"EdwinKofler.vscode-hyperupcall-pack-web",
				"EdwinKofler.vscode-hyperupcall-pack-unix"
			]
		}
	}
}
```

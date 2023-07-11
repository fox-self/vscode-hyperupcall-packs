# vscode-hyperupcall-packs

Contains VSCode extension packs useful for [Profiles](https://code.visualstudio.com/docs/editor/profiles) and [Containers](https://code.visualstudio.com/docs/devcontainers/containers).

## Summary

There are three categories of plugin packs:

### 1. Decoration packs

- Base (Things like EditorConfig, TODO highlighting, etc.)
- Core (Contains all decoration packs except itself)
- Icons (Adds [File Icon Themes](https://code.visualstudio.com/api/extension-guides/file-icon-theme))
- Product Icons (Adds [Product Icon Themes](https://code.visualstudio.com/api/extension-guides/product-icon-theme))
- Syntax (Adds [Syntax Highlightings](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide))
- Themes (Adds [Color Themes](https://code.visualstudio.com/api/extension-guides/color-theme))

### 2. Ecosystem packs

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

- *nix
- Windows

## Usage

I recommend choosing one extension from each category. For example, see this `devcontainer.json`:

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

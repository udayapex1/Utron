<div align="center">

<br />

```
██╗   ██╗████████╗██████╗  ██████╗ ███╗   ██╗
██║   ██║╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║
██║   ██║   ██║   ██████╔╝██║   ██║██╔██╗ ██║
██║   ██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║
╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║ ╚████║
 ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
```

**AI-powered CLI assistant for developers who live in the terminal.**

[![npm version](https://img.shields.io/npm/v/utron?color=0ea5e9&labelColor=0f172a&style=flat-square)](https://www.npmjs.com/package/utron)
[![npm downloads](https://img.shields.io/npm/dm/utron?color=10b981&labelColor=0f172a&style=flat-square)](https://www.npmjs.com/package/utron)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-417e38?labelColor=0f172a&style=flat-square)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-a855f7?labelColor=0f172a&style=flat-square)](./LICENSE)

<br />

[**Installation**](#installation) · [**Usage**](#usage) · [**Flags**](#flags) · [**Examples**](#examples) · [**Screenshots**](#screenshots)

<br />

</div>

---

## What is Utron?

Utron is a fast, minimal CLI tool that brings AI to your terminal — no browser, no GUI, no context switching. Built for developers who prefer typing over clicking.

- 🤖 **Generate** shell commands from plain English prompts  
- ⚡ **Run or copy** commands without leaving your terminal  
- 🔍 **Explain** tools, concepts, and dev terminology  
- ⚖️ **Compare** technologies side-by-side (React vs Vue, etc.)  
- 🖥️ **Inspect** full system hardware & software configuration  
- 📋 **Reference** common Linux and Windows command cheat sheets  
- 🔔 **Auto-updates** — notifies you when a newer version is available  

---

## Installation

### Linux / macOS

```bash
npm install -g utron
```

> If you get a permission error on Linux:
> ```bash
> sudo npm install -g utron
> ```

### Windows

1. Download and install **[Node.js LTS](https://nodejs.org)** — check *"Add to PATH"* during setup.
2. Open **Command Prompt** or **PowerShell** (`Win + R` → `cmd`)
3. Run:
   ```bash
   npm install -g utron
   ```

### Verify Installation

```bash
utron --v
```

### Update to Latest

```bash
npm install -g utron
```

---

## Usage

```bash
utron <prompt> [flags]
```

Utron is designed around a simple mental model — describe what you want, add a flag for *how* you want it handled.

---

## Flags

| Flag | Description |
|------|-------------|
| `--ai` | Generate a terminal command from your prompt using AI |
| `--run` | Execute the AI-generated command directly |
| `--copy` | Copy the generated command to clipboard |
| `--explain` | Get an AI explanation of a tool, concept, or term |
| `--compare` | Compare two technologies (e.g., `vite vs webpack`) |
| `--linux` | Show a curated list of common Linux commands |
| `--windows` | Show a curated list of common Windows CMD/PowerShell commands |
| `--sysconfig` | Display full system info — CPU, RAM, Disk, GPU, OS, and more |
| `--intro` | Display Utron's introduction and overview |
| `--dev` | Show developer information |
| `--v`, `--version` | Show the installed Utron version |
| `--help` | Show help and documentation |

---

## Examples

**Generate a command with AI**
```bash
utron express setup --ai
utron vite with tailwind --ai --copy
utron docker run postgres locally --ai --run
```

**Compare technologies**
```bash
utron react vs preact --compare
utron nextjs vs remix --compare
utron postgres vs mongodb --compare
```

**Explain concepts**
```bash
utron tailwind setup --explain
utron what is a reverse proxy --explain
utron webpack vs vite --explain
```

**System & reference**
```bash
utron --linux          # Linux command cheat sheet
utron --windows        # Windows command cheat sheet
utron --sysconfig      # Full hardware/software info
utron --intro          # Tool introduction
```

---

## Screenshots

<table>
  <tr>
    <td align="center"><strong>Intro & Help</strong></td>
    <td align="center"><strong>AI Command Generation</strong></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/intro.png" alt="Intro" /></td>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/demAi.png" alt="AI Demo" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Compare Mode</strong></td>
    <td align="center"><strong>Explain Mode</strong></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/demoCompare.png" alt="Compare" /></td>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/demoExplain.png" alt="Explain" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Linux Commands</strong></td>
    <td align="center"><strong>System Configuration</strong></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/demoLinuxCommand.png" alt="Linux" /></td>
    <td><img src="https://raw.githubusercontent.com/udayapex1/Utron/main/public/screenshots/demoSysSonfig.png" alt="SysConfig" /></td>
  </tr>
</table>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js (ESM) |
| AI Backend | OpenRouter API |
| System Info | `systeminformation` |
| Clipboard | `clipboardy` |
| Shell Execution | `child_process` |
| Distribution | NPM (global install) |

> No TUI libraries — all output is styled via pure `console.log` for minimal footprint and maximum portability.

---

## Requirements

- **Node.js** v18 or higher
- **Internet connection** for AI features (`--ai`, `--explain`, `--compare`)

---

## Developer

**Uday Pareta**

[![GitHub](https://img.shields.io/badge/GitHub-udayapex1-181717?style=flat-square&logo=github)](https://github.com/udayapex1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-uday--pareta-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/uday-pareta-b114aa284/)

---

## License

[MIT](./LICENSE) — free to use, modify, and distribute.

---

<div align="center">

*Built for terminals. Powered by AI. No GUI required.*

</div>

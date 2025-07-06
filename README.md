# Utron CLI

Utron is a fast, minimal, AI-powered command-line assistant for developers who prefer terminal over GUI.  
It can generate, run, explain, compare commands, and show system-level details directly in the terminal


---

## Features

- Generate terminal commands using AI based on your prompt  
- Run or copy generated commands instantly  
- Explain prompts like tool setups, dev terms, etc.  
- Compare technologies like `react vs vue`, `nextjs vs remix`  
- Show lists of useful Linux and Windows commands  
- Display full system information (CPU, RAM, Disk, GPU, etc.)  
- Auto-check for latest version and notify if outdated  
- Flags for developer info and tool intro  

---

## Installation

Install Utron globally via npm:

```
npm install -g utron
```

If permission error occurs:

```
sudo npm install -g utron
```

To update Utron to the latest version:

```
npm install -g utron
```

---

## Usage

Run `utron` with your prompt and optional flags.

```
utron <your prompt> [flags]
```

---

## Examples

```
utron express setup --ai  
utron vite with tailwind --ai --copy  
utron react vs preact --compare  
utron tailwind setup --explain  
utron --linux  
utron --windows  
utron --sysconfig  
utron --intro  
utron --dev
```

---

## Flags

| Flag               | Description                                                    |
|--------------------|----------------------------------------------------------------|
| --ai               | Generate terminal command using AI                             |
| --run              | Run the generated command in the terminal                      |
| --copy             | Copy generated command to clipboard                            |
| --explain          | Explain the given prompt using AI                              |
| --compare          | Compare two technologies like `vite vs webpack`                |
| --linux            | Display a list of common Linux commands                        |
| --windows          | Display a list of common Windows CMD/PowerShell commands       |
| --sysconfig        | Display full system configuration                              |
| --intro            | Display Utron's introduction                                   |
| --dev              | Display developer information                                  |
| --v, --version     | Show installed Utron version                                   |
| --help             | Show help/documentation                                        |

---

## System Requirements

- Node.js v18 or higher  
- Internet connection (for AI-related features)

---

## Technologies Used

Utron is built using modern backend and system-level tooling:

- **Node.js** – Core runtime environment  
- **ESM (ECMAScript Modules)** – Modern JS module system  
- **systeminformation** – For fetching system hardware/software details  
- **clipboardy** – For copying command output to clipboard  
- **child_process** – To run shell commands directly  
- **OpenRouter AI API (via fetch/axios)** – To generate & explain commands  
- **Terminal UI** – Styled output using pure `console.log` (no TUI libs used)  
- **NPM** – For package distribution globally  

---

## Screenshots

> Place these inside a folder named `/screenshots` in your repo:

```
screenshots/utron-intro.png  
screenshots/utron-ai.png  
screenshots/utron-sysconfig.png
```

To display them inside the README:

```
![Intro](screenshots/utron-intro.png)  
![AI](screenshots/utron-ai.png)  
![SysConfig](screenshots/utron-sysconfig.png)
```

---

## Developer

**Name:** Uday Pareta  
**GitHub:** https://github.com/udayapex1  
**LinkedIn:** https://www.linkedin.com/in/uday-pareta-b114aa284/

---

## License

MIT License

This project is open source and free to use, modify, and distribute.

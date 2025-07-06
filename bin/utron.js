#!/usr/bin/env node
import { exec, execSync } from 'child_process';
import { createRequire } from 'module';
import os from 'os';

import { getCommandFromAI, getExplanationFromAI } from '../utils/aiAgent.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import clipboard from 'clipboardy'; // 📋 Clipboard support


const require = createRequire(import.meta.url);

// File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

// Parse CLI arguments
const args = process.argv.slice(2);
const prompt = args.filter(arg => !arg.startsWith('--')).join(" ").trim();

const local = pkg.version;
const latestVersion = execSync('npm view utron version').toString().trim();

if (local !== latestVersion) {
    console.log(`\n  New version available: ${latest}`);
    console.log(` Run: npm install -g utron-v1\n`);
}


// Flags
const intro = args.includes('--intro');
const run = args.includes('--run');
const dev = args.includes('--dev');
const ai = args.includes('--ai');
const explain = args.includes('--explain');
const help = args.includes('--help');
const version = args.includes('--v') || args.includes('--version');
const copy = args.includes('--copy');
const compare = args.includes('--compare');
const linuxCommands = args.includes('--linux');
const windowsCommands = args.includes('--windows');
const systemInfo = args.includes('--sysconfig');

// --version
if (version) {
    console.log(` Utron CLI v${pkg.version}`);
    process.exit(0);
}

// --help
if (help) {
    console.log(`
 ☯︎ Utron CLI - Developer Command Assistant

Usage:
  utron <your prompt> [--ai] [--run] [--explain] [--copy] [--compare]

Options:
  --ai          Use AI to generate install command
  --run         Run the command directly after generation
  --explain     Get explanation of the prompt from AI
  --copy        Copy the result command to clipboard
  --compare     Compare two tools (e.g. react vs preact)
  --dev         Show developer info
  --intro       Know about me (the rizz way)
  --help        Show help menu
  --v           version Show version info
  --linux       Show all Basic Linux Commands
  --windows     list all windows coammands   
  --sysconfig   show system configuration

Examples:
  utron express --ai
  utron react and tailwind --ai --run --copy
  utron vite setup --explain
  utron react vs preact --compare 
`);
    process.exit(0);
}

// --dev
if (dev) {
    console.log(" ☯ Developer: Uday Pareta");
    console.log(" GitHub: https://github.com/udayapex1");
    console.log(" LinkedIn: https://www.linkedin.com/in/uday-pareta-b114aa284/");
    process.exit(0);
}

// --intro
if (intro) {
    console.log(`
╭──────────────────────────────────────────────╮
│              ☯︎ Utron CLI Agent               │
├──────────────────────────────────────────────┤
│ - I’m not your average terminal tool.        │
│ - I’m coded in logic, sharpened by purpose.  │
│ - Born to serve devs who think in commands.  │
│                                              │
│  “Love GUI? I’m not your type.               │
│   Love minimal AI-powered terminal flow?     │
│   I’m all yours.”                            │
╰──────────────────────────────────────────────╯
`);
    process.exit(0);
}
// --linux
if (linuxCommands) {
    console.log(`
╭────────────────────────────────────────────────────────────────────╮
│                  All Common Linux Commands (Extended)            │
├────────────────────┬──────────────────────────────────────────────┤
│ Command            │ Description                                  │
├────────────────────┼──────────────────────────────────────────────┤
│ ls                 │ List directory contents                      │
│ cd                 │ Change directory                             │
│ mkdir              │ Make directory                               │
│ cp                 │ Copy files                                   │
│ mv                 │ Move or rename files                         │
│ rm                 │ Remove files                                 │
│ touch              │ Create empty file                            │
│ cat                │ Show file content                            │
│ pwd                │ Show current path                            │
│ man                │ Show command manual                          │
│ echo               │ Print message or variable                    │
│ grep               │ Search in text                               │
│ find               │ Find files                                   │
│ locate             │ Locate files fast (uses DB)                  │
│ chmod              │ Change permissions                           │
│ chown              │ Change ownership                             │
│ df                 │ Disk space usage                             │
│ du                 │ File/folder space usage                      │
│ top                │ Monitor running processes                    │
│ htop               │ Interactive process viewer                   │
│ ps                 │ Show process status                          │
│ kill               │ Terminate process by PID                     │
│ killall            │ Kill processes by name                       │
│ tar                │ Archive files                                │
│ zip/unzip          │ Compress or extract zip files                │
│ wget               │ Download files from web                      │
│ curl               │ Make network requests                        │
│ ping               │ Test network connectivity                    │
│ ifconfig           │ Show network interfaces                      │
│ ip                 │ Newer tool for network management            │
│ ssh                │ Connect to remote machine via SSH            │
│ scp                │ Copy files over SSH                          │
│ nano               │ Basic text editor                            │
│ vim                │ Advanced terminal editor                     │
│ history            │ Show command history                         │
│ clear              │ Clear terminal screen                        │
│ whoami             │ Show current user                            │
│ uname              │ Show system information                      │
│ uptime             │ Show system uptime                           │
│ reboot             │ Restart the machine                          │
│ shutdown           │ Power off system                             │
│ apt                │ Debian package manager                       │
│ pacman             │ Arch package manager                         │
│ yum/dnf            │ RHEL-based package manager                   │
╰────────────────────────────────────────────────────────────────────╯
  `);
}
// - windows
if (windowsCommands) {
    console.log(`
╭────────────────────────────────────────────────────────────────────────╮
│           🧰 All Common Windows Commands (CMD & PowerShell)            │
├────────────────────────┬──────────────────────────────────────────────┤
│ Command                │ Description                                  │
├────────────────────────┼──────────────────────────────────────────────┤
│ dir                    │ List files and directories                   │
│ cd                     │ Change directory                             │
│ cls                    │ Clear the screen                             │
│ copy                   │ Copy files                                   │
│ move                   │ Move or rename files                         │
│ del                    │ Delete one or more files                     │
│ rmdir /s               │ Remove directory and contents                │
│ mkdir                  │ Create new directory                         │
│ type                   │ Display contents of a file                   │
│ echo                   │ Show messages or variables                   │
│ set                    │ View or set environment variables            │
│ pause                  │ Pause execution until keypress               │
│ shutdown /s            │ Shutdown the computer                        │
│ shutdown /r            │ Restart the computer                         │
│ ipconfig               │ Show IP configuration                        │
│ ping                   │ Test network connection                      │
│ netstat                │ Show network connections                     │
│ tasklist               │ Show running tasks                           │
│ taskkill               │ Kill process by PID                          │
│ systeminfo             │ Show detailed system info                    │
│ hostname               │ Display computer name                        │
│ whoami                 │ Show current user                            │
│ chkdsk                 │ Check disk for errors                        │
│ sfc /scannow           │ System file checker                          │
│ get-help               │ PowerShell help system                       │
│ Get-Process            │ List active processes                        │
│ Get-Service            │ List Windows services                        │
│ Start-Process          │ Start new process                            │
│ Stop-Process           │ Stop a running process                       │
│ Get-Command            │ List available PowerShell commands           │
│ Set-ExecutionPolicy    │ Change script execution policy               │
│ Get-ChildItem          │ List contents of a directory (like ls)       │
│ Clear-Host             │ Clear PowerShell screen                      │
│ Restart-Computer       │ Reboot system via PowerShell                 │
╰────────────────────────────────────────────────────────────────────────╯
  `);
}
if (systemInfo) {
    const totalMemGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const freeMemGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    const cpus = os.cpus();

    console.log(`
──────────────────────────────────────────────────────────
                System Configuration - Utron            
────────────────────────────┬─────────────────────────────
 OS Platform                │ ${os.platform()}             
 OS Release                 │ ${os.release()}              
 Architecture               │ ${os.arch()}                 
 Hostname                   │ ${os.hostname()}             
 Uptime                     │ ${(os.uptime() / 3600).toFixed(2)} hrs        
 Total Memory               │ ${totalMemGB} GB             
 Free Memory                │ ${freeMemGB} GB              
 CPU Model                  │ ${cpus[0].model}             
 CPU Cores                  │ ${cpus.length}               
 Node.js Version            │ ${process.version}           
──────────────────────────────────────────────────────────
`);
}


// No prompt
if (!prompt && !dev) {
    console.log(" Please provide a prompt.");
    process.exit(1);
}

// --compare
if (compare) {
    const normalizedPrompt = prompt.includes(" vs ") ? prompt : prompt.replace(/\s+/, ' vs ');
    console.log(" ☯︎ Utron is comparing...");

    const comparison = await getExplanationFromAI(
        `Compare ${normalizedPrompt} in a structured way: features, pros, cons, and ideal use cases.`
    );

    if (!comparison) {
        console.log("❌ No comparison received from AI");
        process.exit(1);
    }

    console.log("\n Comparison:\n");
    console.log(comparison);
    process.exit(0);
}

// --explain
if (explain) {
    console.log(" ☯︎ Utron thinks...");
    const explanation = await getExplanationFromAI(prompt);
    console.log("\n Explanation:");
    console.log(explanation);
    process.exit(0);
}

// --ai
if (ai) {
    console.log("🤖 Utron is generating commands...");
    const command = await getCommandFromAI(prompt);

    if (!command) {
        console.log("❌ No command received from AI");
        process.exit(1);
    }

    console.log("\n ☯︎ Utron says:\n");
    console.log(command + "\n");

    if (copy) {
        clipboard.writeSync(command);
        console.log("📋 Command copied to clipboard!");
    }

    if (run) {
        console.log("⚙️ Running...");
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error(`❌ Error: ${err.message}`);
                return;
            }
            console.log("✅ Output:\n" + stdout);
        });
    }

    process.exit(0);
}

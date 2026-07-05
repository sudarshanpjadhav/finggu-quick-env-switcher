# Quick Env Switcher ⚡🔄

> **Seamlessly switch between project environments with a single command — no more manual `.env` file edits or configuration nightmares.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org)
[![CLI](https://img.shields.io/badge/CLI-ready-brightgreen)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 🔥 The Problem

Every developer knows the pain of managing environment configurations. **The struggles are real:**

- 📝 **Manual `.env` file edits** — Accidentally committing production credentials is a security risk
- 🐛 **Configuration drift** — Dev, staging, and prod environments get out of sync
- ⏱️ **Wasted time** — 15+ minutes per day spent on environment setup/teardown
- 👥 **Onboarding friction** — Every new hire needs 30 minutes just to configure their environment

---

## 💡 The Solution

**Quick Env Switcher** is a powerful CLI tool that lets you define, save, and switch between environment profiles instantly. No more manual `.env` editing — just one command and you're ready to go.

> "Stop configuring. Start coding."

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **One-command Switch** | `qenv switch production` — instant environment swap |
| 💾 **Profile Management** | Save unlimited environment profiles with full config |
| 🔒 **Secure Vault** | Encrypted storage for sensitive credentials (API keys, passwords) |
| 🔗 **CI/CD Integration** | Seamlessly switch environments in GitHub Actions, GitLab CI |
| 📋 **Interactive Mode** | Fuzzy-search UI for selecting environments |
| 🔍 **Diff Viewer** | See exactly what changed between environments |

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────┐
│           Quick Env Switcher (CLI)              │
│  ┌──────────────┐    ┌────────────────────┐     │
│  │ fingguPrompt  │    │ fingguEnvManager   │     │
│  │ (Interactive) │    │ (Profile CRUD)     │     │
│  └──────────────┘    └────────────────────┘     │
│         │                    │                    │
│         └────────┬───────────┘                    │
│                  ▼                                │
│  ┌────────────────────────────────────────┐      │
│  │        fingguProfileManager            │      │
│  │   (Profile storage, encryption)        │      │
│  └────────────────────────────────────────┘      │
│                  │                                │
│                  ▼                                │
│  ┌────────────────────────────────────────┐      │
│  │     ~/.quick-env-switcher/profiles     │      │
│  │     (JSON + encrypted secrets)          │      │
│  └────────────────────────────────────────┘      │
└──────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| **Runtime** | Node.js 18+ |
| **CLI Framework** | Commander.js + Inquirer.js |
| **Config** | dotenv, node-config |
| **Encryption** | Node.js crypto (AES-256-GCM) |
| **Filesystem** | fs-extra for profile storage |
| **Testing** | Jest |

---

## 🚀 Quick Start

```bash
# Install globally
npm install -g quick-env-switcher

# Or run locally
npx quick-env-switcher
```

---

## 💻 CLI Usage

```bash
# List all environment profiles
qenv list

# Switch to an environment
qenv switch production

# Create a new profile
qenv create staging --from development

# Show current environment
qenv current

# Edit a profile
qenv edit staging

# Delete a profile
qenv delete old-test-env

# Export env vars for use in scripts
eval $(qenv export staging)
```

### Interactive Mode

```bash
qenv
```

Just run `qenv` with no arguments for the interactive fuzzy-search interface.

---

## 📁 Profiles

Profiles are stored in `~/.quick-env-switcher/profiles/` as JSON files. Sensitive values are encrypted at rest.

```json
{
  "name": "production",
  "variables": {
    "NODE_ENV": "production",
    "API_URL": "https://api.example.com",
    "DB_HOST": "db.prod.example.com",
    "DB_NAME": "app_prod"
  },
  "secrets": ["DB_PASSWORD", "API_KEY"],
  "created": "2026-07-04T12:00:00Z",
  "updated": "2026-07-04T14:30:00Z"
}
```

---

## 🔗 CI/CD Integration

### GitHub Actions

```yaml
- name: Switch to staging environment
  run: |
    npm install -g quick-env-switcher
    qenv switch staging
    eval $(qenv export staging) >> $GITHUB_ENV
```

### GitLab CI

```yaml
before_script:
  - npm install -g quick-env-switcher
  - qenv switch $CI_ENVIRONMENT_NAME
  - eval $(qenv export $CI_ENVIRONMENT_NAME)
```

---

## 📁 Project Structure

```
src/
├── index.js                    # Entry point
├── fingguEnvManager.js         # Environment variable management
├── fingguConfigLoader.js       # Config file parsing and validation
├── fingguPrompt.js             # Interactive prompt UI
├── fingguProfileManager.js     # Profile CRUD + encryption
├── fingguCIIntegration.js      # CI/CD pipeline support
├── fingguConstants.js          # App-wide constants
├── fingguUtils.js              # Helper utilities
└── styles/
    └── finggu-styles.css       # CLI styling (chalk)
```

---

## 🗺️ Roadmap

- [ ] **VS Code Extension** — Switch environments from the status bar
- [ ] **Team Sync** — Share profiles via Git or cloud storage
- [ ] **Docker Support** — Auto-inject environment variables into containers
- [ ] **Pre-commit Hook** — Prevent committing production credentials
- [ ] **Web UI** — Profile management dashboard

---

## 🤝 Contributing

Contributions are what make the open-source community amazing!

1. Fork it
2. Create your branch: `git checkout -b feature/awesome`
3. Commit: `git commit -m "Add awesome feature"`
4. Push: `git push origin feature/awesome`
5. Open a Pull Request

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  Built with ❤️ by the Finggu Autonomous Software Factory
</p>

# HarmonyOS 6 — Interactive Showcase Website

An unofficial, open-source showcase website for **HarmonyOS 6** (Huawei's AI-native operating system, released November 25, 2025). Designed to help anyone — developers, students, or tech enthusiasts — explore HarmonyOS 6's features, UI design, and ecosystem without needing a Huawei device.

![HarmonyOS 6](https://img.shields.io/badge/HarmonyOS-6.0-CF0A2C?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-Static-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- **Hero section** — Full-screen hero with animated glassmorphic phone mockup showing a live-ticking clock
- **Stats counter** — Animated counters for 1B+ users, 300K+ apps, and market share
- **9 feature cards** — Covering XiaoYi AI, StarShield Security, AIGC Camera, ArkUI, and more
- **AI Chat Demo** — Live animated XiaoYi conversation loop
- **Interactive UI Demos** (3 tabs):
  - 🔒 Lock Screen — Real-time clock, AIGC wallpaper badge, Live Capsules, interactive unlock/XiaoYi buttons
  - 🏠 Home Screen — Clickable app grid, glassmorphic widgets, weather, calendar
  - ⚙️ Control Centre — Toggle tiles (Wi-Fi, BT, DND, Anti-Peep…), working brightness & volume sliders
- **Design System** — Full colour palette swatches, typography scale, design principles
- **Device Ecosystem** — 8 device categories explained
- **Full Spec Tables** — Kernel, AI, release info, UI design specs
- **OS Comparison** — HarmonyOS 6 vs Android 16 vs iOS 18 across 10 features
- **Responsive** — Works on mobile, tablet, and desktop
- **Accessible** — ARIA labels, keyboard-navigable, `prefers-reduced-motion` respected

## 🚀 Quick Start

No build tools, no dependencies. Just open `index.html` in any browser.

```bash
git clone https://github.com/YOUR_USERNAME/harmonyos-showcase.git
cd harmonyos-showcase
open index.html   # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

## 📁 File Structure

```
harmonyos-site/
├── index.html              # Main page (all sections)
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (glassmorphism, animations, responsive)
│   └── js/
│       └── main.js         # Interactions (tabs, clock, counters, AI chat loop)
└── README.md
```

## 🌐 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://YOUR_USERNAME.github.io/harmonyos-showcase/`

## 🎨 Design Philosophy

The site mirrors HarmonyOS 6's own **"Harmonious Aesthetics"** design language:
- Glassmorphism (`backdrop-filter: blur`) for cards and overlays
- Spatial light with ambient orbs and glow effects
- Vivid system colours (Harmony Red `#CF0A2C`, Sky Blue `#007AFF`, Vivid Purple `#AF52DE`)
- Dark space background (`#0A0A0F`) with deliberate contrast

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 95+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Safari / Chrome | ✅ Full |

## ⚠️ Disclaimer

This is an **independent educational project**. It is not affiliated with, endorsed by, or sponsored by Huawei Technologies Co., Ltd. HarmonyOS, Huawei, XiaoYi, AppGallery, and related names are trademarks of Huawei Technologies Co., Ltd.

Information is based on publicly available sources as of June 2026.

## 📄 License

MIT License — free to use, modify, and distribute for educational purposes. See `LICENSE` for details.

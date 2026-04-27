# Aution Mobility — Website

**Always in Motion** — Official transport service website for Aution Mobility, a division of Aution (Pty) Ltd.

---

## About

Aution Mobility is the transport division of **Aution (Pty) Ltd** (Reg: 2026/170402/07), a registered South African private company. This website promotes weekend transport services in Cape Town, allowing customers to view services, operating hours, and submit booking requests.

---

## File Structure

```
aution-mobility/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet (dark/gold theme)
│   └── animations.css  # Scroll reveals & micro-interactions
├── js/
│   └── main.js         # Navigation, booking form, animations
└── README.md           # This file
```

---

## Features

- **Hero section** with animated vehicle graphic and live availability badge
- **Services section** — Weekend, Church, Event, All-Day transport cards
- **Operating Hours** table — Saturday & Sunday (06:00–23:00 / 06:00–22:00)
- **Fleet section** — vehicle specs and growth roadmap
- **Booking form** — weekend trip request with WhatsApp integration ready
- **About section** — Aution parent company overview and structure
- **Responsive design** — mobile, tablet, desktop

---

## Setup

### 1. Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/aution-mobility/`

### 2. Activate WhatsApp Booking

In `js/main.js`, find the section marked `// Open WhatsApp` and:
1. Replace `27XXXXXXXXX` with your actual WhatsApp number (with country code, no spaces)
2. Uncomment the `setTimeout` block

```js
setTimeout(() => {
  window.open(`https://wa.me/27XXXXXXXXX?text=${msg}`, '_blank');
}, 500);
```

### 3. Update Contact Details

In `index.html`, update:
- `YOUR CONTACT HERE` → your phone number
- `FIZZYSEDI134@GMAIL.COM` → primary contact email

---

## Branding

| Element | Value |
|---|---|
| Primary Color | `#f5c518` (Gold) |
| Background | `#07070f` (Deep Dark) |
| Font (Display) | Bebas Neue |
| Font (Body) | DM Sans |
| Font (Mono/Labels) | Space Mono |

---

## Parent Company

**Aution (Pty) Ltd**  
Registration: 2026/170402/07  
Registered: March 3, 2026  
Type: Private Company (South Africa)  
Divisions: Mobility · Media · Properties (Future)

---

## License

Proprietary — All rights reserved. Aution (Pty) Ltd © 2026.

# Ambo Campus Delivery

A mobile-first food delivery interface for Ambo University Main Campus, inspired by BeU Delivery, with role-based screens for:

- Student / Customer
- Courier / Delivery Person
- Super Admin

## Run locally

Open `index.html` directly in your browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included features

- Campus restaurant browsing and search
- Restaurant menu, notes, cart, payment flow, and order tracking
- Telebirr / CBE / Cash on Delivery payment UI
- Courier dashboard with availability and incoming orders
- Admin overview with merchant and courier controls
- RBAC-style role switching in a single mobile app mockup

## Files

- `index.html` — app layout and role views
- `styles.css` — mobile-first styling and theming
- `script.js` — interaction logic for role switching and toggles


# Wreath Order Form

A React order form for Knights of Columbus Christmas wreath sales — pickup date selection, quantity steppers for plain/decorated wreaths, and an order confirmation receipt.

## Setup

```bash
npm install
npm run dev
```

Edit prices, pickup dates, and payment options in `src/WreathOrderForm.jsx` under "Editable settings". Optionally set `SHEET_WEB_APP_URL` there to a deployed Google Apps Script web app URL to log orders to a Google Sheet; otherwise orders are only saved via `window.storage` when available.

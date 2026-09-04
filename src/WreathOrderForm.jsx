import { useState } from "react";

const KOFC_LOGO = "data:image/png;base64,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";

import { Minus, Plus, CheckCircle2, User, Phone, Mail, CalendarDays } from "lucide-react";

// ---- Editable settings ----------------------------------------------
// Change prices, pickup dates, and payment options here.
const PRICES = {
  plain: 45,
  decorated: 65,
};
const PICKUP_DATES = [
  "Sat, Dec 6",
  "Sat, Dec 13",
  "Sat, Dec 20",
  "Mon, Dec 22",
];
const PAYMENT_METHODS = ["Cash", "Check", "Venmo", "Other"];
// Paste your Google Apps Script web app URL here once deployed (see setup instructions).
// Leave blank to skip the Sheet and only save orders to local storage.
const SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzqvlECjls37tOEG-HW-oA54DmI7YI4GJE_7x3zmIecEcACqk41KrQ2F8P5CbMGE2HPgQ/exec";
// -----------------------------------------------------------------------

function Stepper({ label, sublabel, price, qty, onChange }) {
  return (
    <div style={styles.lineItem}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={styles.lineItemLabel}>{label}</div>
        <div style={styles.lineItemSub}>{sublabel}</div>
      </div>
      <div style={styles.lineItemPrice}>${price}</div>
      <div style={styles.stepper}>
        <button
          type="button"
          aria-label={`Decrease ${label} quantity`}
          onClick={() => onChange(Math.max(0, qty - 1))}
          style={styles.stepBtn}
        >
          <Minus size={14} strokeWidth={2.5} />
        </button>
        <span style={styles.stepQty}>{qty}</span>
        <button
          type="button"
          aria-label={`Increase ${label} quantity`}
          onClick={() => onChange(qty + 1)}
          style={styles.stepBtn}
        >
          <Plus size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

function WreathMark({ size = 88 }) {
  const leaves = [];
  const n = 28;
  const R = 34;
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2;
    const cx = 50 + R * Math.cos(angle);
    const cy = 50 + R * Math.sin(angle);
    const rot = (angle * 180) / Math.PI + 90;
    leaves.push(
      <ellipse
        key={i}
        cx={cx}
        cy={cy}
        rx="9"
        ry="3.6"
        transform={`rotate(${rot} ${cx} ${cy})`}
        fill={i % 5 === 0 ? "#8FAE86" : "#3F6B4A"}
        opacity={i % 3 === 0 ? 0.9 : 1}
      />
    );
  }
  const berries = [8, 15, 22].map((i) => {
    const angle = (i / n) * Math.PI * 2;
    const cx = 50 + (R - 2) * Math.cos(angle);
    const cy = 50 + (R - 2) * Math.sin(angle);
    return <circle key={`b${i}`} cx={cx} cy={cy} r="2.6" fill="#A32638" />;
  });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {leaves}
      {berries}
    </svg>
  );
}

export default function WreathOrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plainQty: 0,
    decoratedQty: 0,
    pickupDate: PICKUP_DATES[0],
    payment: PAYMENT_METHODS[0],
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState(null);

  const totalQty = form.plainQty + form.decoratedQty;
  const total = form.plainQty * PRICES.plain + form.decoratedQty * PRICES.decorated;

  const setField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Enter a name";
    if (!form.phone.trim()) errs.phone = "Enter a phone number";
    if (!form.email.trim()) errs.email = "Enter an email address";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (totalQty < 1) errs.wreaths = "Add at least one wreath";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const id =
      "WR-" +
      Date.now().toString().slice(-5) +
      "-" +
      Math.floor(Math.random() * 90 + 10);
    const newOrder = {
      id,
      ...form,
      total,
      placedAt: new Date().toISOString(),
    };
    try {
      if (window.storage) {
        await window.storage.set(`orders:${id}`, JSON.stringify(newOrder), true);
        let list = [];
        try {
          const existing = await window.storage.get("orders:index", true);
          if (existing) list = JSON.parse(existing.value);
        } catch (err) {
          list = [];
        }
        list.push(id);
        await window.storage.set("orders:index", JSON.stringify(list), true);
      }
    } catch (err) {
      console.error("Could not save order", err);
    }
    if (SHEET_WEB_APP_URL) {
      try {
        await fetch(SHEET_WEB_APP_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(newOrder),
        });
      } catch (err) {
        console.error("Could not send order to sheet", err);
      }
    }
    setOrder(newOrder);
    setSubmitting(false);
  }

  function resetForm() {
    setForm({
      name: "",
      phone: "",
      email: "",
      plainQty: 0,
      decoratedQty: 0,
      pickupDate: PICKUP_DATES[0],
      payment: PAYMENT_METHODS[0],
      notes: "",
    });
    setErrors({});
    setOrder(null);
  }

  if (order) {
    return (
      <div style={styles.page}>
        <div style={styles.ticket}>
          <div style={styles.confirmHeader}>
            <CheckCircle2 size={40} color="#3F6B4A" strokeWidth={1.75} />
            <h1 style={styles.confirmTitle}>Order placed</h1>
            <p style={styles.confirmSub}>Order #{order.id}</p>
          </div>
          <div style={styles.perforation} />
          <div style={styles.receiptBody}>
            {order.plainQty > 0 && (
              <div style={styles.receiptRow}>
                <span>
                  Mixed greens wreath (24") &times; {order.plainQty}
                </span>
                <span>${order.plainQty * PRICES.plain}</span>
              </div>
            )}
            {order.decoratedQty > 0 && (
              <div style={styles.receiptRow}>
                <span>
                  Decorated wreath, bow &amp; pine cones &times; {order.decoratedQty}
                </span>
                <span>${order.decoratedQty * PRICES.decorated}</span>
              </div>
            )}
            <div style={{ ...styles.receiptRow, ...styles.receiptTotal }}>
              <span>Total due at pickup</span>
              <span>${order.total}</span>
            </div>
          </div>
          <div style={styles.perforation} />
          <div style={styles.confirmDetails}>
            <p style={styles.confirmLine}><strong>{order.name}</strong></p>
            <p style={styles.confirmLine}>{order.phone} &middot; {order.email}</p>
            <p style={styles.confirmLine}>Pickup: {order.pickupDate}</p>
            <p style={styles.confirmLine}>Payment: {order.payment}</p>
            {order.notes && <p style={styles.confirmLine}>Note: {order.notes}</p>}
          </div>
          <button type="button" style={styles.secondaryBtn} onClick={resetForm}>
            Place another order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <img src={KOFC_LOGO} alt="Knights of Columbus emblem" style={styles.logo} />
        <WreathMark />
        <h1 style={styles.heroTitle}>Order your Christmas wreath</h1>
        <p style={styles.heroSub}>
          24" round, hand-gathered mixed greens. Pickup only.
        </p>
      </div>

      <form style={styles.ticket} onSubmit={handleSubmit} noValidate>
        <div style={styles.sectionLabel}>Your wreaths</div>

        <Stepper
          label="Mixed greens wreath"
          sublabel='24" round, plain'
          price={PRICES.plain}
          qty={form.plainQty}
          onChange={(v) => setForm((f) => ({ ...f, plainQty: v }))}
        />
        <Stepper
          label="Decorated wreath"
          sublabel="Bow and pine cones"
          price={PRICES.decorated}
          qty={form.decoratedQty}
          onChange={(v) => setForm((f) => ({ ...f, decoratedQty: v }))}
        />
        {errors.wreaths && <div style={styles.errorText}>{errors.wreaths}</div>}

        <div style={styles.totalRow}>
          <span>Total</span>
          <span style={styles.totalAmount}>${total}</span>
        </div>

        <div style={styles.perforation} />

        <div style={styles.sectionLabel}>Pickup</div>
        <label style={styles.fieldLabel}>
          <CalendarDays size={15} style={styles.fieldIcon} />
          Pickup date
        </label>
        <select style={styles.input} value={form.pickupDate} onChange={setField("pickupDate")}>
          {PICKUP_DATES.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <div style={styles.perforation} />

        <div style={styles.sectionLabel}>Your info</div>

        <label style={styles.fieldLabel}>
          <User size={15} style={styles.fieldIcon} />
          Name
        </label>
        <input
          style={styles.input}
          value={form.name}
          onChange={setField("name")}
          placeholder="Jane Miller"
        />
        {errors.name && <div style={styles.errorText}>{errors.name}</div>}

        <label style={styles.fieldLabel}>
          <Phone size={15} style={styles.fieldIcon} />
          Phone
        </label>
        <input
          style={styles.input}
          value={form.phone}
          onChange={setField("phone")}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <div style={styles.errorText}>{errors.phone}</div>}

        <label style={styles.fieldLabel}>
          <Mail size={15} style={styles.fieldIcon} />
          Email
        </label>
        <input
          style={styles.input}
          value={form.email}
          onChange={setField("email")}
          placeholder="jane@email.com"
        />
        {errors.email && <div style={styles.errorText}>{errors.email}</div>}

        <label style={styles.fieldLabel}>Payment method</label>
        <select style={styles.input} value={form.payment} onChange={setField("payment")}>
          {PAYMENT_METHODS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <label style={styles.fieldLabel}>Notes (optional)</label>
        <textarea
          style={{ ...styles.input, ...styles.textarea }}
          value={form.notes}
          onChange={setField("notes")}
          placeholder="Anything we should know?"
        />

        <button type="submit" style={styles.primaryBtn} disabled={submitting}>
          {submitting ? "Placing order..." : `Place order — $${total}`}
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#FBF6EC",
    minHeight: "100%",
    padding: "32px 16px 56px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#2A2520",
  },
  hero: {
    background: "#1B3B2F",
    borderRadius: "16px",
    padding: "28px 24px 24px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    marginBottom: "-1px",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "52px",
    height: "52px",
  },
  heroTitle: {
    fontFamily: "'Fraunces', Georgia, serif",
    fontWeight: 600,
    fontSize: "26px",
    color: "#FBF6EC",
    margin: "12px 0 6px",
    letterSpacing: "-0.01em",
  },
  heroSub: {
    fontSize: "14px",
    color: "#B9CDB9",
    margin: 0,
  },
  ticket: {
    background: "#FFFFFF",
    width: "100%",
    maxWidth: "420px",
    borderRadius: "0 0 16px 16px",
    padding: "24px 22px 22px",
    boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
    border: "1px solid #E7DFCE",
    borderTop: "none",
  },
  sectionLabel: {
    fontFamily: "'Fraunces', Georgia, serif",
    fontSize: "15px",
    fontWeight: 600,
    color: "#1B3B2F",
    margin: "4px 0 14px",
  },
  lineItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid #F0EAD9",
  },
  lineItemLabel: {
    fontSize: "14.5px",
    fontWeight: 600,
    color: "#2A2520",
  },
  lineItemSub: {
    fontSize: "12.5px",
    color: "#8A8172",
    marginTop: "1px",
  },
  lineItemPrice: {
    fontSize: "14px",
    color: "#5F5A4E",
    minWidth: "34px",
    textAlign: "right",
  },
  stepper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  stepBtn: {
    width: "26px",
    height: "26px",
    borderRadius: "6px",
    border: "1px solid #C9BFA5",
    background: "#FBF6EC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#1B3B2F",
  },
  stepQty: {
    fontSize: "14px",
    fontWeight: 600,
    minWidth: "16px",
    textAlign: "center",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "14px 0 4px",
    fontSize: "14px",
    color: "#5F5A4E",
  },
  totalAmount: {
    fontFamily: "'Fraunces', Georgia, serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#A32638",
  },
  perforation: {
    borderTop: "1.5px dashed #D8CEB4",
    margin: "18px 0",
  },
  fieldLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#5F5A4E",
    margin: "12px 0 6px",
  },
  fieldIcon: {
    marginRight: "6px",
    color: "#A32638",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    fontSize: "14.5px",
    border: "1px solid #D8CEB4",
    borderRadius: "8px",
    background: "#FBF6EC",
    color: "#2A2520",
    fontFamily: "inherit",
    outline: "none",
  },
  textarea: {
    minHeight: "60px",
    resize: "vertical",
  },
  errorText: {
    color: "#A32638",
    fontSize: "12.5px",
    marginTop: "4px",
  },
  primaryBtn: {
    width: "100%",
    marginTop: "22px",
    padding: "13px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#FBF6EC",
    background: "#A32638",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  secondaryBtn: {
    width: "100%",
    marginTop: "6px",
    padding: "12px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#1B3B2F",
    background: "#FFFFFF",
    border: "1px solid #C9BFA5",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  confirmHeader: {
    textAlign: "center",
    padding: "10px 0 6px",
  },
  confirmTitle: {
    fontFamily: "'Fraunces', Georgia, serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#1B3B2F",
    margin: "10px 0 2px",
  },
  confirmSub: {
    fontSize: "13px",
    color: "#8A8172",
    margin: 0,
  },
  receiptBody: {
    padding: "4px 0",
  },
  receiptRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13.5px",
    color: "#2A2520",
    padding: "6px 0",
  },
  receiptTotal: {
    fontWeight: 700,
    borderTop: "1px solid #F0EAD9",
    marginTop: "4px",
    paddingTop: "10px",
  },
  confirmDetails: {
    fontSize: "13.5px",
    color: "#5F5A4E",
    lineHeight: 1.7,
  },
  confirmLine: {
    margin: 0,
  },
};

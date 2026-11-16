# Bank Contoh — KPR Promo Landing Page with Simulated A/B Testing

> **Note / Disclaimer:** This is a personal portfolio and learning project created for a **Marketing Technology (MarTech) internship application**. All bank names (**"Bank Contoh"**), mortgage offers, interest rates, and conversion metrics are **100% fictional and simulated** ("Halaman ini adalah project simulasi untuk portofolio, bukan penawaran resmi."). No real bank branding or copyrighted assets are used.

---

## 1. Project Purpose

This project demonstrates how a Marketing Technology landing page can decouple copy from presentation using a JSON content configuration (`content.json`) and run a client-side A/B experiment to compare two value propositions for a home loan (KPR) campaign:

- **Variant A (Rate-Focused):** Highlights a low promotional interest rate (*"Wujudkan Rumah Impian dengan Bunga KPR 3,5%"*, CTA: *"Ajukan KPR Sekarang"*).
- **Variant B (Installment-Focused):** Highlights an affordable monthly payment (*"Cicilan Rumah Mulai Rp3 Jutaan per Bulan"*, CTA: *"Hitung Cicilanmu"*).

---

## 2. Tech Stack

- **React 18 + Vite** (Modular component architecture)
- **Tailwind CSS** (Responsive layout tested from 375px mobile width up to desktop)
- **Vanilla JavaScript (ES6+)** for A/B variant assignment, event tracking (`localStorage`), URL query parameter parsing (`URLSearchParams`), JSON fetching (`fetch`), and CSV export (`Blob` & `URL.createObjectURL`)
- **FontAwesome 6 & Plus Jakarta Sans** (Typography & iconography)

---

## 3. How the A/B Test Logic Works

The A/B testing logic in [`src/utils/abTest.js`](./src/utils/abTest.js) runs entirely in vanilla JavaScript without a backend:

1. **Variant Assignment (`getOrAssignVariant`):**
   - **URL Override:** Checks if `?variant=A` or `?variant=B` is present in the URL. If present, it forces that variant and saves it to `localStorage` (`bank_contoh_ab_variant`).
   - **Returning Visitor:** Checks `localStorage` for an existing `bank_contoh_ab_variant` value so returning visitors consistently see the same variant.
   - **First-Time Visitor:** Randomly assigns `"A"` or `"B"` with a 50/50 probability (`Math.random() < 0.5 ? 'A' : 'B'`) and persists the assignment in `localStorage`.

2. **JSON-Driven Copy (`content.json`):**
   - On page load, the app fetches [`public/content.json`](./public/content.json) (also mirrored at [`./content.json`](./content.json)) and renders the active variant's `headline`, `subtext`, `buttonLabel`, and `buttonColor`.
   - If `content.json` fails to load, the app gracefully falls back to built-in default copy without breaking the page.

3. **Event Tracking & Primary CTA Attribution (`trackView` & `trackClick`):**
   - **View (`view`):** Increments the active variant's visitor/view counter in `localStorage` (`bank_contoh_ab_stats`) once per page load.
   - **Primary CTA Click (`click`):** **Only the main Hero CTA button (`#hero-cta-btn`) increments the A/B test `"click"` counter.** Other buttons on the page (such as the calculator submission button, benefit cards, or bottom banner links) do not increment the click counter. This isolates conversion attribution directly to the Hero headline, subtext, and button variant being tested.

---

## 4. How to Run Locally & Use the Debug Panel

Because browser security blocks `fetch('./content.json')` when opening HTML files directly via `file://`, you must run the project using a local web server.

### Option A: Run the Vite + React Development Server (Recommended)

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

### Option B: Serve the Production Build or Static HTML with `npx serve`

```bash
npm run build
npx serve dist
```

*(Or run `npx serve .` in the project root and open `/code.html`, or use the VS Code **Live Server** extension).*

### How to Force Variants & Open the Hidden Debug Panel

- **Normal Visitor View (Debug Panel & Navbar Variant Badge Hidden):**
  - `http://localhost:5173/`
- **Open the Hidden Stats Panel (`?debug=1`):**
  - `http://localhost:5173/?debug=1`
  - Reveals the bottom stats bar with **Views (Visitors)**, **Clicks**, and **CTR (%)** for Variant A and Variant B, along with **Download CSV** (`variant,visitors,clicks,ctr`) and **Reset data** buttons, and shows the active variant badge in the navbar.
- **Force Variant A or Variant B for Testing:**
  - Force Variant A: `http://localhost:5173/?variant=A` (or `http://localhost:5173/?variant=A&debug=1`)
  - Force Variant B: `http://localhost:5173/?variant=B` (or `http://localhost:5173/?variant=B&debug=1`)

---

## 5. Limitations

- **Single-Browser Storage (`localStorage`):** `localStorage` only persists data within a single browser on a single device. It does not aggregate visitor traffic across different users or devices, and clearing browser data erases the metrics.
- **Production Requirements:** Real-world A/B testing requires a backend analytics pipeline or a dedicated experimentation / marketing automation platform, server-side or edge bucketing, bot filtering, and a statistically significant sample size before drawing conclusions.

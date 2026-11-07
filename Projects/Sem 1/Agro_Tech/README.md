# 🌱 Shivar: Scan, Ask, Plan

**A farmer-first, offline-capable web app prototype for Indian smallholder farmers.**
Scan a leaf, ask a question by voice in your own language, and plan your profit, all in one single HTML file.

> **Status:** Prototype (v3). Uses sample/mock data and rule-based logic. See [Roadmap](#roadmap--replacing-mock-parts-with-real-services) for what to swap in for production.

---

## ✨ Features

| Section | What it does |
|---|---|
| **Your Crops** | Shows the farm area (map placeholder), weather, water availability and soil health (type, pH, carbon, N-P-K). Lets farmers add the crops they have sown, with acreage, and recommends the best crops and seed varieties for the current season (kharif / rabi / summer) based on soil and water. |
| **Scan** | Live camera leaf scanner. The frame is split into a 4×3 grid and each cell is marked **Healthy / Early stress / Stressed**. Works offline. Includes a "Use sample leaf" demo and a "Save diagnosis" option that syncs when the connection returns. |
| **Ask** | Voice assistant in **English, Hindi and Marathi**. Tap and speak (e.g. *"My wheat is wilting"*); the app combines location, soil, and rainfall to return a prescription: why it happens, what to do, how much, when, and what to avoid. Answers are also read aloud. |
| **Plan** | Choose crop, land and budget to see a 6-month price outlook, a profit-risk estimate, and an expense tracker with cost-saving tips (labour, fertiliser, water, seeds). |
| **Advice** | Short guides on growing more and better. |
| **Prices** | 12-month market price charts (₹ per quintal) for crops near Pune. |
| **Schemes** | Central and Maharashtra schemes (e.g. PM-KISAN, PMFBY) with eligibility and how to apply. Filterable by type. |
| **Help** | "Ask an expert" callback form in English / Hindi / Marathi. |

### Built for low-literacy and low-connectivity use
- Large tap targets (52px+), high-legibility font (Atkinson Hyperlegible)
- Three colour themes (Harvest, Monsoon, Turmeric) plus automatic dark mode
- Online/offline indicator with **offline-first saving** to the device
- Respects `prefers-reduced-motion`, with ARIA labels and live regions
- Fully responsive, with safe-area support for phones

---

## 🚀 Getting Started

No build step, no dependencies to install.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Then either:

- **Open directly:** double-click `Prototype_3.html`, or
- **Serve locally (recommended)**, since camera, microphone and GPS need a secure context (`localhost` or HTTPS):

```bash
python3 -m http.server 8000
# open http://localhost:8000/Prototype_3.html
```

> 💡 **Tip:** You can also host it free on **GitHub Pages**. Rename the file to `index.html`, then go to *Settings → Pages → Deploy from branch*.

### Browser support
Latest Chrome or Edge is recommended (best support for the Web Speech API). Camera, voice input and geolocation require user permission. If any are unavailable, the app falls back gracefully (sample leaf, typed questions, default location).

---

## 🧰 Tech Stack

- **HTML / CSS / vanilla JavaScript**, in a single self-contained file
- **Tailwind CSS** (via CDN, v3.4.17) for layout utilities
- **Google Fonts**: Fraunces and Atkinson Hyperlegible
- **Browser APIs:** `getUserMedia` (camera), `SpeechRecognition` and `speechSynthesis` (voice), `Geolocation`, `localStorage`, `navigator.onLine`, Canvas 2D

An internet connection is needed on first load for the CDN and fonts.

---

## 🗂️ Project Structure

```
.
├── Prototype_3.html   # The entire app (markup, styles, scripts)
└── README.md
```

---

## 🔌 Roadmap / Replacing Mock Parts with Real Services

The prototype is wired with clearly marked placeholders so each piece can be swapped independently:

| Area | Where in the code | Currently | Replace with |
|---|---|---|---|
| Region data (weather, soil, water) | `getRegionData(lat, lng)` | Hard-coded Pune sample | Weather / soil / groundwater API (e.g. IMD, Soil Health Card data) |
| Map | `initMap(el, region, plots)` | SVG placeholder | Leaflet / Google Maps / Mapbox |
| Leaf analysis | `analyzeCells()` | Simple colour-ratio heuristic on a 64×48 frame | TensorFlow Lite / TF.js plant-disease model |
| Voice advice | `agent(q, ctx, lang)` | Rule-based keyword matching (wilting, yellowing) | LLM call returning `{title, why, steps, avoid}` |
| Diagnosis sync | `SYNC_URL` | Empty (stays local) | Your server endpoint |
| Mandi prices | `PRICE` | Sample data | Live Agmarknet / mandi price feed |
| Crop recommendations | `DB` | Small static crop table | Agronomy dataset or service |
| Expert help form | `helpForm` submit handler | Validates and shows a thank-you message | Backend / CRM / call-centre integration |

Other ideas: add more regional languages, PWA/service worker for true offline install, user accounts, and SMS or WhatsApp alerts.

---

## ⚠️ Disclaimer

This is a **demo prototype**.

- Market prices, weather, soil values and scheme details are **sample data** and may not be accurate or current.
- The leaf scanner is a **colour-based heuristic, not a diagnostic tool**.
- Dosages and recommendations are **general guidance only**. Farmers should confirm with a soil test and their nearest **Krishi Vigyan Kendra** or agriculture officer before applying any inputs.
- Verify scheme eligibility and deadlines on the official government websites.

---

## 🤝 Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

Add a license of your choice (e.g. [MIT](https://choosealicense.com/licenses/mit/)) before publishing.

---

<p align="center">Made with 🌾 for farmers</p>

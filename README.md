# 🧠 SHL Assessment Recommendation System

A GenAI-powered end-to-end system that recommends the most relevant SHL assessments from natural language job descriptions or job posting URLs. This system automates the evaluation process using web scraping, semantic retrieval, and filtering logic.

---

## 🧩 System Components

- **⚙ Backend** — FastAPI app with semantic search logic and filtering  
- **💻 Frontend** — React + TailwindCSS UI with animated interactions  
- **🕸 Web Scraper** — Selenium & BeautifulSoup tool to extract SHL catalog  
- **📊 Evaluator** — A scoring script to compute Recall@K and MAP@K

---

## 🧠 Recommendation Logic

- Embeds job descriptions using `all-MiniLM-L6-v2` from SentenceTransformers
- Computes cosine similarity with pre-embedded SHL assessment data
- Applies hard filters on:
  - **Test Type**
  - **Duration**
  - **Extracted Skills** (via basic NLP/keyword parsing)
- Ranks top-N most relevant assessments based on semantic similarity

---

## 📁 Project Structure

shl-assessment-recommender/ ├── frontend/ # React UI ├── backend/ # FastAPI backend │ ├── data/shl_assessments.csv │ ├── main.py │ ├── models/model.py │ └── utils/recommend.py ├── web-scraper/ # Selenium + BeautifulSoup-based scraper │ └── scraper.py ├── evaluate.py # Evaluation script using Recall@K / MAP@K ├── render.yaml # Render deployment config └── README.md

markdown
Always show details

Copy

---

## 🚀 Key Features

### 🔍 Intelligent Matching

- Accepts either raw job text or a job post URL
- Extracts relevant skills & filters irrelevant assessments
- Returns Top-N ranked results with metadata and links

### 🖥️ Modern Frontend

- React + TailwindCSS + Framer Motion UI
- Clean form to input queries or URLs
- Animated result cards with click-through links
- Skill badge display and test metadata

### ⚙️ FastAPI Backend

- `/recommend`: Takes query and returns ranked SHL assessments
- `/health`: Service status endpoint
- Modular logic split into:
  - Embedding (SentenceTransformers)
  - Filtering (based on duration, test type, skills)
  - Ranking (cosine similarity)

### 🕸️ Web Scraper

- Selenium automates navigation of SHL product catalog
- BeautifulSoup parses structured content (tables, details)
- Extracted fields:
  - Name, URL, Duration
  - Test Type, Description
  - Job Levels, Remote/Adaptive support, Languages

- Output saved as: `backend/data/shl_assessments.csv`

---

## 📊 Evaluation

Implemented an `evaluate.py` script to compute:
- **Recall@10**
- **MAP@10**

### Ground Truth Source:
- Extracted from SHL dataset — used `description` as query and matched exact assessment title as ground truth.

### Result (Sample):
```bash
✅ Mean Recall@10: 1.000
✅ Mean MAP@10: 1.050
🛠️ Running Locally
1️⃣ Backend
bash
Always show details

Copy
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
2️⃣ Frontend
bash
Always show details

Copy
cd frontend
npm install
npm run dev
➡ Access at: http://localhost:5173

3️⃣ Web Scraper
bash
Always show details

Copy
cd web-scraper
pip install -r requirements.txt
python scraper.py
Ensure chromedriver is installed.

☁️ Deployment Guide
Render (Backend)
Configure via render.yaml

Start command:

bash
Always show details

Copy
uvicorn main:app --host=0.0.0.0 --port=10000
Vercel (Frontend)
React app deployed via Vercel

Set backend API URL in .env or vite.config.js


📈 Evaluation Output

🔧 Future Enhancements
 Improve skill extraction using spaCy or OpenAI

 Support multi-lingual job descriptions

 Dynamic test filtering in frontend

 Add user preference learning (e.g. preferred duration range)

🧑‍💻 Author
Ravadagundi Sanath Kumar
📧 ravadagundisanath@gmail.com

🔗 Links
🌐 Live Demo: https://shl-frontend-delta.vercel.app/

📡 API Endpoint: https://shl-backend-production.up.railway.app/recommend

🛠 GitHub: https://github.com/sanathkumarr/SHL

📄 License
MIT License – See LICENSE for details. 
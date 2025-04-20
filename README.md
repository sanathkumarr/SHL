# SHL Assessment Recommendation System

An end-to-end, AI-powered solution to recommend SHL assessments tailored to natural language job descriptions or job posting URLs.

This project is composed of:

- 🧠 **Backend**: A FastAPI-powered recommendation engine using sentence embeddings and semantic similarity  
- 💻 **Frontend**: A modern, animated React interface with TailwindCSS  
- 🕷️ **Web Scraper**: A Selenium and BeautifulSoup-based tool to extract SHL assessment data  

---

## 📁 Project Structure

```
shl-assessment-recommender/
├── frontend/           # React-based frontend UI
├── backend/            # FastAPI backend with recommendation logic
├── web-scraper/        # Scraper for SHL assessment data
├── render.yaml         # Render deployment config (for backend)
├── README.md           # Project documentation
```

---

## 🚀 Features

### 🔍 Intelligent Assessment Recommendation
- Accepts free-text job descriptions or URLs
- Extracts key skills and requirements using NLP
- Ranks SHL assessments using semantic similarity
- Returns top-matching assessments with metadata

### 🖥️ Frontend Highlights
- Clean and responsive UI built with React + TailwindCSS
- Input options for natural language or job description URL
- Dynamic transitions and animations using Framer Motion
- Displays detailed, clickable assessment results

### ⚙️ Backend Highlights
- FastAPI with `/recommend` and `/health` endpoints
- Utilizes sentence-transformers for embedding logic
- Skill extraction, filtering, and similarity ranking
- Auto-maps assessment URLs to names and metadata

### 🕸️ Web Scraper
- Navigates SHL product catalog using Selenium
- Parses structured data with BeautifulSoup
- Extracts: name, duration, type, description, remote/adaptive support
- Saves data as a structured CSV file for backend use

---

## 📦 Backend

**Directory**: `backend/`

### Structure:
```
backend/
├── main.py                  # FastAPI app entrypoint
├── data/shl_assessments.csv
├── models/model.py          # Embedding model logic
├── utils/recommend.py       # Recommendation pipeline
├── requirements.txt
```

### Run Locally:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### API Endpoints:
- `GET /health`: Service status check
- `POST /recommend`: Get assessment recommendations

### Example Request:
```json
{
  "query": "Looking for a senior Python developer for backend role",
  "url": ""
}
```

---

## 🎨 Frontend

**Directory**: `frontend/`

### Built with:
- React + Vite
- TailwindCSS
- Framer Motion for animation
- Lucide React icons

### Run Locally:
```bash
cd frontend
npm install
npm run dev
```

Access at: [http://localhost:5173](http://localhost:5173)

### Customizations:
- Connects to backend `/recommend`
- Maps catalog CSV to display proper assessment names
- Uses animated components for better UX

---

## 🕷️ Web Scraper

**Directory**: `web-scraper/`

### Structure:
```
web-scraper/
├── scraper.py              # Main scraping script
├── requirements.txt
└── output/shl_assessments.csv
```

### Run Scraper:
```bash
cd web-scraper
pip install -r requirements.txt
python scraper.py
```

> Ensure you have [ChromeDriver](https://chromedriver.chromium.org/downloads) installed and compatible with your browser version.

The output CSV is saved and used in the `backend/data` folder.

---

## ☁️ Deployment (Render)

### Backend (FastAPI)
- Managed via `render.yaml`
- **Start Command**:
  ```bash
  uvicorn main:app --host=0.0.0.0 --port=10000
  ```

- Files like `shl_assessments.csv` should be committed within the `backend/data/` directory

### Frontend
- Deploy separately using Vercel, Netlify, or Render Static Sites
- Set environment variable for backend API URL if needed
- Update `vite.config.js` or `.env` as required

---

## 🔧 Future Enhancements

- [ ] Add user authentication (optional)
- [ ] Add advanced filtering (by test type, duration, etc.)
- [ ] Enhance URL parsing using OpenAI or NLP techniques
- [ ] Introduce caching and batching for high performance
- [ ] Extend support for multi-language descriptions

---

## 📌 Tips

- Always keep `shl_assessments.csv` updated via the scraper
- Backend and frontend can run independently or via a proxy
- Ensure CORS is enabled in FastAPI for frontend-backend communication

---

## 👨‍💻 Author

- **Ravadagundi Sanath Kumar** – AI Engineer  
- 📧 Email: [ravadagundisanath@gmail.com](mailto:ravadagundisanath@gmail.com)

---

## 🌐 Demo

- 🔗 **Live Demo**: [https://shl-frontend-delta.vercel.app/](https://shl-frontend-delta.vercel.app/)  
- 📡 **API Endpoint**: [https://shl-backend-rtjg.onrender.com/recommend](https://shl-backend-rtjg.onrender.com/recommend)

---

## 📝 License

This project is licensed under the MIT License. See `LICENSE` for details.

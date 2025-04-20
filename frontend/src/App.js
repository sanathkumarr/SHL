import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import QueryForm from "./components/QueryForm";
import ResultsTable from "./components/ResultsTable";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { fetchRecommendations } from "./api";

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch("/shl_data.json")
      .then((res) => res.json())
      .then(setCatalog)
      .catch((err) => console.error("Error loading catalog:", err));
  }, []);

  const handleSubmit = async (query, url) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetchRecommendations(query, url);
      setResults(response.data.recommended_assessments);
    } catch (err) {
      setError("Failed to fetch recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf5] text-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto p-6 sm:p-10 space-y-8">
        <QueryForm onSubmit={handleSubmit} />
        {loading && <Loader />}
        {error && <ErrorMessage text={error} />}
        {!loading && results.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ResultsTable assessments={results} catalog={catalog} />
          </motion.div>
        )}
      </main>
      <footer className="text-center text-sm text-gray-500 py-4 mt-10 border-t">
        SHL Assessment Recommender © {new Date().getFullYear()} | Powered by GenAI
      </footer>
    </div>
  );
}

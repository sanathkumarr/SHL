import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export default function QueryForm({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query && !url) {
      alert("Please enter a job query or provide a job description URL.");
      return;
    }
    onSubmit(query, url);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-violet-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <label className="block text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
          <Search className="w-5 h-5 text-violet-600" />
          Job Query (Natural Language)
        </label>
        <TextareaAutosize
          minRows={3}
          maxRows={5}
          placeholder="e.g., Hiring a backend dev with 40-minute test"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 outline-none text-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-base font-semibold text-gray-800 flex items-center gap-2 mb-1">
          <Search className="w-5 h-5 text-violet-600" />
          Or Paste Job Description URL
        </label>
        <input
          type="url"
          placeholder="https://example.com/job-description"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 outline-none text-gray-700"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-xl hover:bg-violet-700 transition-all"
      >
        <Search size={18} />
        Get Recommendations
      </motion.button>
    </motion.form>
  );
}

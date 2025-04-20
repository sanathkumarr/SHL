import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-200 via-white to-violet-100 py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <motion.div
          className="flex items-center gap-3 text-violet-800 text-3xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles className="w-8 h-8 text-purple-600" />
          SHL Recommender
        </motion.div>
        <p className="text-sm text-gray-600 mt-2 sm:mt-0">Powered by GenAI + SHL Catalog</p>
      </div>
    </header>
  );
}
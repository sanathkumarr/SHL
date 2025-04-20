import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center py-10">
      <motion.div
        className="w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  );
}

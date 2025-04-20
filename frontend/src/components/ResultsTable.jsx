import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const truncate = (text, wordLimit = 15) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

export default function ResultsTable({ assessments, catalog }) {
  const getNameByUrl = (url) => {
    const item = catalog.find((entry) => entry.url === url);
    return item?.name;
  };

  return (
    <motion.div
      className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 border border-violet-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold text-violet-700 mb-6">Recommended Assessments</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-violet-100 text-violet-700">
            <th className="text-left py-3 px-4 rounded-tl-xl">Assessment</th>
            <th className="text-left py-3 px-4">Test Type</th>
            <th className="text-left py-3 px-4">Duration</th>
            <th className="text-left py-3 px-4">Remote</th>
            <th className="text-left py-3 px-4">Adaptive</th>
            <th className="text-left py-3 px-4 rounded-tr-xl">Description</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((item, idx) => (
            <tr
              key={idx}
              className={`border-t ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <td className="py-3 px-4 font-semibold text-violet-700">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {getNameByUrl(item.url) || "Unnamed"}
                  <ExternalLink className="w-4 h-4 text-violet-600" />
                </a>
              </td>
              <td className="py-3 px-4 text-gray-700">{item.test_type.join(", ")}</td>
              <td className="py-3 px-4 text-gray-700">{item.duration} mins</td>
              <td className="py-3 px-4 text-gray-700">{item.remote_support}</td>
              <td className="py-3 px-4 text-gray-700">{item.adaptive_support}</td>
              <td className="py-3 px-4 text-gray-600">{truncate(item.description)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

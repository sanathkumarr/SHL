export default function ErrorMessage({ text }) {
    return (
      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-xl text-center shadow-md">
        {text}
      </div>
    );
  }
  
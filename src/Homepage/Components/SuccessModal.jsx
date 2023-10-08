

export default function SuccessModal({ onClose }) {
  return (
    <div
      className="fixed z-50 flex items-center justify-center
      transition-opacity duration-300 ease-in-out opacity-100  pointer-events-none"
    >
      <div
        className="bg-white fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center
        scale-100 opacity-100
        transition-transform duration-10000 ease-in-out transform-gpu"
      >
        {/* Modal content here */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">
            Thank you for submitting!
          </h2>
          {/* You can add more content or buttons here */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


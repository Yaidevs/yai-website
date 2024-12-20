export default function WarningModal({ isOpen, onClose, message }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full mx-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold mb-4">{message}</h3>
          </div>
        </div>
      </div>
    );
  }
  
  
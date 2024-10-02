import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    // Auto dismiss the toast after a specified duration
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
      style={{ opacity: message ? 1 : 0 }} 
    >
      <div className="flex items-center justify-between">
        <p className="text-white">{message}</p>
        <button
          className="ml-4 text-white font-bold hover:underline"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;

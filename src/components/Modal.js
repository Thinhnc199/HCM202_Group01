import React, { useEffect, useRef, useCallback } from 'react';

const Modal = ({ article, onClose }) => {
  const modalRef = useRef(); // Create a ref for the modal

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    // Add event listener to handle clicks outside the modal
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Adjusted width class here */}
      <div ref={modalRef} className="bg-white p-4 rounded shadow-lg max-w-2xl w-full">
        <img 
          src={article.image} 
          alt={article.title} 
          className="mb-2 rounded h-[300px] w-full object-cover" 
        />
        <h3 className="font-semibold text-xl">{article.title}</h3>
        <p className="text-sm">{article.summary}</p>
        
        {/* Flexbox for Author and Date on the same line */}
        <div className="flex justify-between text-sm mt-2">
          <span><strong>Author:</strong> {article.author}</span>
          <span>{article.date}</span>
        </div>

        <div className="mt-4">
          <a 
            href={article.link} 
            className="text-blue-500 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

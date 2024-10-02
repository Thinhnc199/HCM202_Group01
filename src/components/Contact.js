import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast'; 

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState({ message: '', type: '', visible: false });
  const form = useRef(); // Create a reference for the form

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      const result = await emailjs.send('service_prgo3qq', 'template_rxi4tls', templateParams, 'awonNP5eIycs7In4O');
      console.log(result.text);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      // Show success toast
      setToast({ message: 'Email sent successfully!', type: 'success', visible: true });
    } catch (error) {
      console.error(error.text);
      // Show error toast
      setToast({ message: 'Failed to send the email. Please try again later.', type: 'error', visible: true });
    }
  };

  const handleToastClose = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <div 
      className="bg-gray-100"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20230422/original/pngtree-vietnam-national-day-landscape-pattern-cartoon-picture-image_2455281.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto px-4">
          <form ref={form} onSubmit={handleSubmit} className="bg-red-500 rounded-lg px-6 py-8 shadow-md">
            <h2 className="text-4xl font-semibold text-yellow-200 mb-4">
              Đóng góp ý kiến
            </h2>
            <p className="text-white mb-8 text-base">
              Hãy đóng góp ý kiến và nhận xét về bài viết của Group-1.
            </p>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">Họ và Tên</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nhập tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="senderemail"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="message">Lời bình</label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="6"
                placeholder="Đóng góp ý kiến của bạn tại đây.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                name="message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Gửi Thông Điệp
              </button>
            </div>
          </form>

          {/* Render Toast Notification */}
          {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';

const Navbar = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Sample dropdown items
  const dropdownItems = [
    { name: 'Giới thiệu', link: '#introduction' },
    { name: 'Nội dung', link: '#content' },
    { name: 'Bài viết', link: '#related-articles' },
    { name: 'Góp ý', link: '#Contacts' },
  ];

  return (
    <nav className="bg-red-500 text-white flex items-center justify-between p-4">
        
      <div className="flex items-center">
      <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png" 
          alt="Logo" 
          className="h-10 mr-2" 
        />
        <h1 className="text-lg font-bold">Dĩ bất biến, ứng vạn biến</h1>
        <div className="ml-4 relative">
          <button 
            className="bg-yellow-400 p-2 rounded focus:outline-none" 
            onClick={toggleDropdown}
          >
            Danh mục
          </button>
          {isOpen && (
            <ul className="absolute bg-yellow-400 rounded mt-1 shadow-lg">
              {dropdownItems.map((item, index) => (
                <li key={index} className="p-2 hover:bg-yellow-600">
                  <a href={item.link} className="block text-white" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="text-lg font-bold ">MC1708 Group-1</div>
    </nav>
  );
};

export default Navbar;

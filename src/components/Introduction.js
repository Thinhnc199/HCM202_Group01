import React, { useState, useEffect } from 'react';

const images = [
    "https://ttdn.vn/Uploads/Images/2024/2/9/3/ngcaytre22.jpg", 
    "https://image.nhandan.vn/600x400/Uploaded/2024/ovhunoh/2024_05_03/tbt-nguyen-phu-trong-tiep-tap-can-binh-4622.jpg.webp", 
    "https://www.angiang.dcs.vn/SiteAssets/truong-phai-doi-ngoai-cay-tre-viet-nam.jpg", 
    "https://i0.wp.com/ivanlevanlan.wordpress.com/wp-content/uploads/2023/12/cv-1684310281612-1.webp?resize=1224%2C862&ssl=1", 
    "https://vov.vn/sites/default/files/inline-images/Blue%20Modern%20Digital%20Marketing%20Agency%20Facebook%20Post%20%282500%20x%202000%20px%29%20%282500%20x%201000%20px%29%20%281%29.jpg", 
  ];
  

const Introduction = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); 
  
      return () => clearInterval(interval); 
    }, []);

  return (
    <section 
      className="flex flex-row p-4 bg-gray-100"
      style={{
        backgroundImage: "url('')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left empty section (1/5) */}
      <div className="w-1/5"></div>

      {/* Middle section (3/5) */}
      <div className="w-5/5 flex flex-row justify-center items-center bg-red-500 bg-opacity-95 rounded-lg p-4 shadow-lg">
      {/* Image Section */}
      <img 
        src={images[currentImageIndex]} 
        alt="Introduction" 
        className="rounded-lg shadow-lg mr-4" 
        style={{ width: '600px', height: '400px', objectFit: 'cover' }}
      />
      
      {/* Content Section */}
      <div className="flex flex-col justify-center w-3/5">
        <h2 className="text-3xl font-bold text-yellow-200 text-center mb-4">
          Dĩ bất biến, ứng vạn biến có phải là khởi đầu của ngoại giao Cây tre Việt Nam hiện nay?
        </h2>
        <p className="mt-2 text-base text-white text-center">
          Trong một thế giới đầy biến động và thay đổi như hiện nay, câu nói "Dĩ bất biến, ứng vạn biến" không chỉ là một triết lý sống mà còn là kim chỉ nam cho nền ngoại giao của Việt Nam. 
          Bạn có bao giờ cảm thấy bối rối trước những thách thức trong việc kết nối và giao tiếp với các quốc gia khác trong bối cảnh toàn cầu hóa? Bài viết này sẽ khám phá cách mà tư tưởng 
          này đã được áp dụng trong ngoại giao Cây tre của Việt Nam, từ những thành công ấn tượng đến các thách thức cần vượt qua. Hãy cùng nhau tìm hiểu làm thế nào Dĩ bất biến, ứng vạn biến
           không chỉ định hình quan hệ quốc tế của chúng ta mà còn mở ra những cơ hội vàng cho một tương lai hòa bình và thịnh vượng.
        </p>
      </div>
    </div>

      {/* Right empty section (1/5) */}
      <div className="w-1/5"></div>
    </section>
  );
};

export default Introduction;

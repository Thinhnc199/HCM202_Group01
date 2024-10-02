import React, { useRef, useState } from 'react';
import Modal from './Modal'; 
const articles = [
    {
      title: "Việt Nam và Mỹ chính thức nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện",
      summary: "Trong hội đàm cấp cao giữa Tổng Bí thư Nguyễn Phú Trọng và Tổng thống Mỹ Joe Biden, hai nước đã quyết định nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện.",
      date: "10/09/2023 - 19:32",
      author: "Thuý Tình và nhóm PV, BTV",
      image: "https://static-images.vnncdn.net/files/publish/2023/9/10/w-anh-moi-3-951.jpg?width=0&s=nXvpeJG9CU8Q42Ur-U4QbQ", // Replace with your image URLs
      link: "https://vietnamnet.vn/viet-nam-va-my-chinh-thuc-nang-cap-quan-he-len-doi-tac-chien-luoc-toan-dien-2187859.html" // Replace with actual article link
    },
    {
      title: "Xây dựng Cộng đồng chia sẻ tương lai Việt Nam - Trung Quốc",
      summary: "VN - Trung Quốc nhất trí xây dựng Cộng đồng chia sẻ tương lai VN - Trung Quốc có ý nghĩa chiến lược, nỗ lực vì hạnh phúc của nhân dân hai nước, vì hòa bình và tiến bộ của nhân loại.",
      date: "13/12/2023 07:08",
      author: "Báo Thanh Niên",
      image: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/12/12/tongbithu3-1702401730591949292425.jpg",
      link: "https://thanhnien.vn/xay-dung-cong-dong-chia-se-tuong-lai-viet-nam-trung-quoc-185231213002850164.htm" // Replace with actual article link
    },
    {
      title: "Việt Nam trúng cử Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc",
      summary: "Tại cuộc bầu cử vừa kết thúc tại New York (Mỹ), Việt Nam đã lần thứ hai trúng cử Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc với 192/193 phiếu bầu, một số phiếu rất cao.",
      date: "07/06/2019 22:50",
      author: "Vũ Hân",
      image: "https://thanhnien.mediacdn.vn/uploaded/hanvt/2019_06_07/anhnoidung_NNGW.jpg?width=500",
      link: "https://thanhnien.vn/viet-nam-trung-cu-uy-vien-khong-thuong-truc-hoi-dong-bao-an-lien-hop-quoc-185856916.htm" // Replace with actual article link
    },
    {
      title: "Trường phái đối ngoại, ngoại giao “cây tre Việt Nam” trong sự nghiệp đổi mới đất nước",
      summary: "TCCS - Ngoại giao “cây tre Việt Nam” được Tổng Bí thư Nguyễn Phú Trọng nêu trong Hội nghị đối ngoại toàn quốc (14-12-2021). Khái niệm này là sự đúc kết, hình tượng hóa đường lối đối ngoại mà Đảng Cộng sản Việt Nam đã và đang thực hiện với những đóng góp quan trọng vào thành tựu phát triển chung của đất nước. Trong bối cảnh toàn cầu hóa và hội nhập quốc tế ngày càng sâu rộng hiện nay, việc thấm nhuần triết lý và thực hành hiệu quả trường phái ngoại giao mang bản sắc “cây tre Việt Nam” có ý nghĩa hết sức quan trọng.",
      date: " 06-06-2024",
      author: "TS NGUYỄN MẠNH HÙNG",
      image: "https://www.tapchicongsan.org.vn/documents/20182/379036601/Tong+Bi+thu+Nguyen+Phu+Trong+du+hoi+nghi+ngoai+giao+lan+thu+32.jpg/0a829c57-4b01-4098-a0f7-dd1007c9615e?t=1717492313046",
      link: "https://www.tapchicongsan.org.vn/web/guest/quoc-phong-an-ninh-oi-ngoai1/-/2018/929902/truong-phai-doi-ngoai%2C-ngoai-giao-%E2%80%9Ccay-tre-viet-nam%E2%80%9D-trong-su-nghiep-doi-moi-dat-nuoc.aspx" // Replace with actual article link
    },
    {
      title: "Khẳng định tính đúng đắn của đường lối ngoại giao “Cây tre Việt Nam”",
      summary: "(ĐCSVN) - Chúng ta luôn tự hào và tuyệt đối tin tưởng vào đường lối đối ngoại đúng đắn, sáng tạo đậm bản sắc “Cây tre Việt Nam” của Đảng. Từ đó, nhận diện và kiên quyết đấu tranh, phản bác những luận điệu sai trái, thù địch, bảo vệ đường lối đối ngoại của Đảng, cũng chính là bảo vệ nền tảng tư tưởng của Đảng.",
      date: "27/04/2024 09:26",
      author: "Đặng Công Minh, Chi bộ 1",
      image: "https://file1.dangcongsan.vn/data/0/images/2024/04/26/upload_35/11.jpg?dpi=150&quality=100&w=800",
      link: "https://dangcongsan.vn/bao-ve-nen-tang-tu-tuong-cua-dang/khang-dinh-tinh-dung-dan-cua-duong-loi-ngoai-giao-cay-tre-viet-nam-664011.html" // Replace with actual article link
    },
    {
      title: "Giá trị đặc sắc của 'ngoại giao cây tre Việt Nam'",
      summary: "VOV.VN - “Ngoại giao cây tre Việt Nam” là khái niệm được nhắc đến nhiều trong 2 năm trở lại đây mỗi khi đề cập chính sách đối ngoại của Việt Nam. Khái niệm này không phải là một trường phái ngoại giao mới mà là sự đúc kết, hình tượng hóa đường lối đối ngoại mà Đảng ta đã thực hiện trong nhiều thập kỷ qua, đóng góp quan trọng vào những thành tựu mà đất nước đã và đang đạt được.",
      date: "08:06, 01/07/2023",
      author: "Việt Nga VOV-Sydney",
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2023-07/tong-bi-thu.jpg",
      link: "https://vov.vn/chinh-tri/gia-tri-dac-sac-cua-ngoai-giao-cay-tre-viet-nam-post1029828.vov" 
    },
  ];
  
 
const RelatedArticles = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleArticleClick = (article) => {
      setSelectedArticle(article);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedArticle(null);
    };
  

    return (
        <section className="flex flex-row p-4"
          style={{
            backgroundImage: "url('https://png.pngtree.com/background/20210712/original/pngtree-vietnam-flag-colored-surrounding-streamers-white-background-picture-image_1176953.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          {/* Left empty section (1/5) */}
          <div className="w-1/5"></div>
    
          <div className="w-4/5">
            <h2 className="font-bold text-center text-red-600 text-3xl mb-4">Các bài viết liên quan</h2>
            <div className="flex overflow-x-auto space-x-4">
              {articles.slice(0, 5).map((article, index) => (
                <div 
                  key={index} 
                  className="border p-4 rounded w-[300px] h-[350px] bg-white flex-shrink-0 flex flex-col transition-transform transform hover:shadow-lg hover:scale-105 cursor-pointer"
                  onClick={() => handleArticleClick(article)} // Open modal on click
                >
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="mb-2 rounded h-[200px] w-[300px] object-cover self-center" 
                  />
                  <h3 className="font-semibold mt-2">{article.title}</h3>
                  <p className="text-sm flex-1">{article.author}</p>
                  <span className="text-xs">{article.date}</span>
                </div>
              ))}
            </div>
    
            {/* Render Modal if an article is selected */}
            {isModalOpen && (
              <Modal 
                article={selectedArticle} 
                onClose={closeModal} 
              />
            )}
          </div>
    
          {/* Right empty section (1/5) */}
          <div className="w-1/5"></div>
        </section>
      );
    };
  
  
  export default RelatedArticles;
  
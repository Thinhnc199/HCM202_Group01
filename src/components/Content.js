import React, { useState, useEffect, useCallback } from 'react';

const Content = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // State to handle content expansion
  const sections = [
    { id: "section1", title: '1. Tìm hiểu về "Dĩ Bất Biến, Ứng Vạn Biến"' },
    { id: "section2", title: '2. Ngoại Giao Cây Tre: Khái niệm và ý nghĩa' },
    { id: "section3", title: '3. Dĩ Bất Biến, Ứng Vạn Biến trong thực tiễn ngoại giao của Việt Nam' },
    { id: "section4", title: '4. Phân tích cái nhìn từ quốc tế về ngoại giao Việt Nam' },
    { id: "section5", title: '5. Dự báo tương lai của ngoại giao Cây tre Việt Nam' },
    { id: "section6", title: '6. Các yếu tố an toàn trong ngoại giao hiện đại' },
    { id: "section7", title: 'Tổng Kết' },
  ];

  const contentData = {
    section1: (
      <>
      <h3 className="font-bold ">1.1. Khái niệm và nguồn gốc</h3>
        <p>"Dĩ bất biến, ứng vạn biến" là một câu nói có nguồn gốc từ triết lý phương Đông, thể hiện một quan niệm sâu sắc về sự linh hoạt trong suy nghĩ và hành động, trong khi vẫn giữ vững những giá trị cốt lõi. Câu nói ấy như một nguồn cảm hứng bất tận, nhắc nhở chúng ta về việc duy trì bản sắc riêng của mình trong những lúc khó khăn, bất ổn. Bạn hãy tưởng tượng một cây tre, đứng thẳng và kiên cường giữa cơn bão, không bị gãy hay đổ mà vẫn mềm dẻo, có khả năng uốn cong theo thời gian và hoàn cảnh. Những đặc điểm này chính là điểm mấu chốt giúp Việt Nam tồn tại và phát triển trong một thế giới đang không ngừng thay đổi.</p>
            <p>Khi nói về khái niệm này, chúng ta không chỉ thấy được giá trị lý thuyết, mà còn cảm nhận được sự chinh phục của nó trong thực tế. Qua từng giai đoạn lịch sử, từ những cuộc chiến tranh khốc liệt đến những thời kỳ phát triển và hội nhập, Việt Nam luôn thể hiện được sự linh hoạt, khôn ngoan trong chính sách đối ngoại. Đây không chỉ là bài học cho những nhà lãnh đạo, mà còn là nguồn cảm hứng cho mỗi cá nhân trong cuộc sống hằng ngày. Họ không ngừng nỗ lực giữ gìn bản sắc văn hóa dân tộc mình trong những làn sóng đa dạng của toàn cầu.</p>
       
        <h3 className="font-bold ">1.2. Vận dụng trong đời sống và chính trị</h3>
        <p>Trong đời sống hàng ngày, việc áp dụng triết lý "Dĩ bất biến, ứng vạn biến" có thể giúp chúng ta giải quyết rất nhiều vấn đề. Bạn có thể thấy điều này trong cách mà cộng đồng người Việt Nam ứng phó với những thay đổi trong môi trường xung quanh, từ công nghệ đến văn hóa. Các doanh nhân, sinh viên, và cả những người lao động đều có thể học hỏi cách thức này để trở nên thành công hơn trong bối cảnh cạnh tranh khốc liệt. Khi bạn kiên định với mục tiêu của mình nhưng vẫn có khả năng thay đổi phương thức đạt được, bạn đã bước đầu vận dụng thành công triết lý kinh điển này.</p>
        <p>Trong chính trị, Dĩ bất biến, ứng vạn biến còn thể hiện qua những quyết sách quan trọng của đất nước. Các nhà lãnh đạo Việt Nam đã áp dụng cách tiếp cận này để cân nhắc, đánh giá được thay đổi của tình hình quốc tế, từ đó đưa ra những quyết định khôn ngoan giúp giữ vững hòa bình và ổn định cho đất nước. Sự thành công trong các mối quan hệ quốc tế của Việt Nam, từ việc đàm phán thương mại cho đến hợp tác quân sự, đều mang dấu ấn của tư tưởng này. Điều đó chứng minh rằng, chỉ cần bạn kiên định với những giá trị mà mình theo đuổi, bạn sẽ có thể vượt qua mọi thử thách trong cuộc sống.</p>
        <p>Hãy cùng chuyển sang phần tiếp theo để khám phá sâu hơn về khái niệm và ý nghĩa của ngoại giao Cây tre, một phần không thể thiếu trong thành tựu của Dĩ bất biến, ứng vạn biến mà Việt Nam đang theo đuổi!</p>

      </>
    ),
    section2: (
      <>
         <h3 className="font-bold " >2.1. Định nghĩa ngoại giao Cây tre</h3>
        <p>Ngoại giao Cây tre không chỉ đơn thuần là một thuật ngữ, mà còn là một triết lý sống, một biểu tượng của sự kiên cường và bền bỉ của dân tộc Việt Nam. Cây tre, với hình ảnh thanh mảnh nhưng vững vàng, chính là hiện thân cho tinh thần dân tộc, luôn đứng vững trước bão táp, nhưng vẫn có khả năng uốn mình để thích nghi với môi trường xung quanh. Tương tự như vậy, ngoại giao Cây tre thể hiện sự khéo léo trong việc duy trì các mối quan hệ quốc tế, không chỉ bằng sức mạnh mà còn bằng sự mềm dẻo trong cách tiếp cận. Bình tĩnh trong mọi tình huống, lắng nghe và thấu hiểu, nhưng vẫn khẳng định được bản sắc dân tộc – đó chính là cách mà Việt Nam đang thực hiện trong chiến lược ngoại giao của mình.</p>
        <p>Khi chúng ta bước vào một thời kỳ toàn cầu hóa sâu sắc, ngoại giao Cây tre ngày càng có dấu ấn mạnh mẽ trong sự phát triển kinh tế và chính trị của Việt Nam. Quốc gia này đã thu hút được sự chú ý và kính trọng từ nhiều quốc gia khác trên thế giới thông qua những chính sách đối ngoại sáng tạo. Việt Nam không còn chỉ là một cái tên xa lạ nơi góc phố bản đồ, mà đã trở thành một nhân tố quan trọng trong các hội nghị thượng đỉnh quốc tế, nơi mà tiếng nói của chúng ta được lắng nghe và tôn trọng.</p>

        <h3 className="font-bold " >2.2. Vai trò của ngoại giao Cây tre trong chính sách đối ngoại</h3>
        <p>Ngoại giao Cây tre đóng một vai trò vô cùng quan trọng trong việc gia tăng sức mạnh mềm cho Việt Nam. Sức mạnh mềm là khả năng thu hút và làm cho người khác muốn hợp tác mà không cần áp đặt. Với hình ảnh Cây tre, Việt Nam đã cho thấy rằng quốc gia này không chỉ cần thiết việc duy trì những mối quan hệ hợp tác mà còn tìm cách làm cho những mối quan hệ ấy trở nên sâu sắc và bền vững hơn. Điều này không chỉ thể hiện qua những hiệp định thương mại, mà còn trong việc thúc đẩy văn hóa, giáo dục và khoa học công nghệ giữa các quốc gia.</p>
        <p>Ngoại giao Cây tre còn thể hiện rõ nét trong những mối quan hệ với các nước láng giềng. Việt Nam đã khéo léo duy trì mối quan hệ tốt đẹp với các quốc gia như Trung Quốc, Lào và Campuchia, dựa trên nguyên tắc tôn trọng lẫn nhau và cùng có lợi. Hình ảnh Cây tre cũng thể hiện sự quan tâm và thân thiện với các quốc gia lớn và nhỏ khác nhau, từ đó xây dựng lên một bức tranh hòa bình, ổn định trong khu vực và thế giới. Sự hiểu biết và nhạy bén trong việc thích ứng đã giúp Việt Nam tạo ra những thành công nhất định, từ đó khẳng định vị thế của mình trên trường quốc tế.</p>
        <p>Khi ta đã hiểu rõ về khái niệm và ý nghĩa của ngoại giao Cây tre, hãy cùng lật giở trang tiếp theo để tìm hiểu về những thành công nổi bật trong thực tiễn ngoại giao của Việt Nam, nơi mà triết lý "Dĩ bất biến, ứng vạn biến" được áp dụng một cách hiệu quả và mang lại những kết quả đáng tự hào!</p>


      </>
    ),
    // Add similar structure for section3 to section6
    section3: (
      <>
       <h3 className="font-bold " >3.1. Những thành công nổi bật</h3>
        <p>Trong bối cảnh toàn cầu hóa, sự tiến bộ của Việt Nam trong lĩnh vực ngoại giao không thể không nhắc đến những thành công vang dội mà đất nước đã đạt được. Một ví dụ rõ nét chính là việc tham gia ký kết các hiệp định thương mại tự do (FTA) với nhiều quốc gia và khu vực. Thỏa thuận thương mại với Liên minh châu Âu (EVFTA) hay CPTPP không chỉ mở ra cánh cửa cho hàng hóa Việt Nam tiếp cận thị trường quốc tế mà còn thể hiện sự cam kết mạnh mẽ trong việc hội nhập kinh tế. Bạn thử tưởng tượng một chàng trai trẻ khởi nghiệp, với sản phẩm độc đáo của mình như một thỏi nam châm, thu hút sự chú ý từ các nhà đầu tư và đối tác quốc tế—đó chính là hình mẫu của những doanh nghiệp Việt Nam dưới tác động của các hiệp định này.</p>
        <p>Sự thành công trong việc tổ chức các sự kiện quốc tế quan trọng như APEC 2017 hay ASEAN 2020 cũng làm nổi bật khả năng của Việt Nam trong việc thiết lập và duy trì các mối quan hệ quốc tế tốt đẹp. Bạn có thể thấy hình ảnh của các nhà lãnh đạo toàn cầu cùng nhau thảo luận và đưa ra những giải pháp ứng phó với các thách thức chung, từ biến đổi khí hậu đến an ninh lương thực. Không chỉ đơn thuần là chủ nhà, mà Việt Nam còn thể hiện được vai trò người dẫn dắt, tiếng nói mạnh mẽ trong việc thúc đẩy hợp tác đa phương, làm cho cả thế giới nhìn nhận quốc gia này với một cặp mắt mới, trân trọng hơn bao giờ hết.</p>

        <h3 className="font-bold " >3.2. Thách thức và cơ hội</h3>
        <p>Tuy nhiên, bên cạnh những thành công, vẫn không thiếu những thách thức đối với ngoại giao Cây tre. Một trong số đó có thể kể đến là việc duy trì cân bằng trong các mối quan hệ với các cường quốc. Việt Nam phải khéo léo vượt qua những áp lực từ các bên, đôi khi phải đưa ra những quyết định khó khăn để đảm bảo được lợi ích quốc gia. Điều này giống như một người chơi cờ vây, cần phải đưa ra những nước đi thông minh, tính toán đến cả phút giây tiếp theo nhằm tránh những cuộc đối đầu không cần thiết.</p>
        <p>Tuy nhiên, từ những thách thức cũng nảy sinh ra cơ hội. Việt Nam có thể tận dụng sự gia tăng quan tâm từ các nước lớn đối với khu vực Đông Nam Á để thiết lập những mối quan hệ sâu sắc hơn. Ví dụ, trong bối cảnh thương mại toàn cầu đang gặp khó khăn do đại dịch COVID-19, các doanh nghiệp Việt Nam có thể tìm kiếm cơ hội hợp tác mới với các thị trường chưa được khai thác triệt để. Hãy tham gia vào các hội chợ, triển lãm thương mại quốc tế, hoặc thậm chí các khóa học trực tuyến để nâng cao kỹ năng và mở rộng mối quan hệ.</p>
        <p>Đã đến lúc chúng ta cùng nhau khám phá cái nhìn từ quốc tế về ngoại giao Việt Nam. Điều này không chỉ giúp bạn có cái nhìn tổng quan hơn mà còn cho bạn cơ hội học hỏi từ các chuyên gia quốc tế về cách thức ứng xử và phát triển mối quan hệ toàn cầu một cách hiệu quả nhất!</p>

      </>
    ),
    section4: (
      <>
         <h3 className="font-bold " >4.1. Đánh giá từ các chuyên gia quốc tế</h3>
        <p>Khi nhìn nhận về ngoại giao Việt Nam, không ít chuyên gia quốc tế đã thể hiện sự ngạc nhiên và ấn tượng trước khả năng của quốc gia này trong việc duy trì sự ổn định và phát triển kinh tế giữa những biến động toàn cầu. Trong những bài phân tích của họ, thường nhấn mạnh về tư duy chiến lược nhạy bén của các nhà lãnh đạo Việt Nam. Họ đã khéo léo sử dụng triết lý Dĩ bất biến, ứng vạn biến để vận dụng trong các tình huống khác nhau mà đất nước đã phải đối mặt. Đó chính là sự khôn ngoan trong việc chọn lọc các mối quan hệ, trong khi vẫn giữ vững bản chính của dân tộc.</p>
        <p>Lấy ví dụ về Hội nghị thượng đỉnh Mỹ - Triều Tiên tại Hà Nội, đây là một trong những sự kiện được chú ý nhất trong lịch sử ngoại giao gần đây. Các chuyên gia đều thừa nhận rằng, không chỉ là một trang sử mới cho quan hệ quốc tế, mà còn đánh dấu sự trưởng thành trong cách ứng xử của Việt Nam. Hình ảnh Việt Nam như một "bến đỗ hòa bình" được gìn giữ và truyền tải mạnh mẽ qua thể hiện của các nhà lãnh đạo. Trong mắt thế giới, quốc gia này trở thành một ví dụ điển hình về khả năng tạo ra không gian đối thoại và giải quyết xung đột.</p>
     

        <h3 className="font-bold " >4.2. So sánh với các quốc gia khác</h3>
        <p>Một cách nhìn sâu sắc hơn về ngoại giao Việt Nam còn được tạo dựng thông qua việc so sánh với các nước khác trong khu vực và thế giới. Ví dụ, trong khi nhiều nước phải đối mặt với các cuộc khủng hoảng địa chính trị, Việt Nam lại duy trì được sự ổn định và là một điểm đến an toàn cho các nhà đầu tư. Nhiều quốc gia đang tìm kiếm cơ hội hợp tác với Việt Nam không chỉ để mở rộng thị trường mà còn để hưởng lợi từ một cơ chế chính trị ổn định và môi trường đầu tư hấp dẫn.</p>
        <p>Chúng ta có thể thấy rằng, so với các quốc gia khác, Việt Nam dường như đã khám phá ra con đường riêng, một phong cách ngoại giao không chỉ dựa vào sức mạnh mà còn vào sự khéo léo và tinh tế. Đây là một ví dụ tuyệt vời cho các nước nhỏ hơn trong việc xây dựng mối quan hệ quốc tế, nơi mà việc biết thích nghi với hoàn cảnh thực tế cũng quan trọng không kém gì việc giữ vững lập trường.</p>

        <h3 className="font-bold " >4.3. Bài học từ những thành công và thất bại</h3>
        <p>Những thành công cũng như thất bại từ trải nghiệm ngoại giao của Việt Nam cung cấp nhiều bài học quý giá không chỉ cho chúng ta mà còn cho cả cộng đồng quốc tế. Mặc dù đã đạt được nhiều thành công, nhưng Việt Nam cũng đã từng gặp phải những khó khăn nhất định. Đó là những lúc một quyết định sai lầm có thể dẫn đến những hệ lụy không mong muốn trên trường quốc tế. Điều này càng nhấn mạnh tầm quan trọng của việc duy trì cái nhìn đa chiều, cân nhắc lợi ích và tác động từ nhiều phía.</p>
        <p>Từ những bài học này, chúng ta có thể rút ra những kinh nghiệm quí báu cho bản thân và cho các thế hệ kế tiếp. Hãy nhớ rằng, không chỉ có sự thành công mới đáng giá, mà cả những thất bại cũng mang lại cho chúng ta cơ hội để học hỏi và tiến bộ. Khi bạn đối mặt với những thách thức trong cuộc sống, hãy nhớ rằng việc biết đứng dậy sau thất bại chính là bản lĩnh và sức mạnh, tương tự như cách mà Việt Nam đã làm trong lĩnh vực ngoại giao.</p>
        <p>Giờ đây, chúng ta hãy cùng nhau khám phá tương lai của ngoại giao Cây tre Việt Nam, để xem những xu hướng phát triển trong chính sách đối ngoại của đất nước sẽ diễn ra như thế nào trong thời gian tới!</p>

      </>
    ),
    section5: (
      <>
        <h3 className="font-bold " >5.1. Xu hướng phát triển trong chính sách đối ngoại</h3>
        <p>Khi nhìn vào tương lai, bạn có thể cảm nhận sự hồi hộp và kỳ vọng đối với sự phát triển của ngoại giao Cây tre Việt Nam. Một thế giới đang thay đổi nhanh chóng đặt ra nhiều thách thức, nhưng đồng thời cũng mở ra những cơ hội không giống như bất kỳ điều gì mà chúng ta đã từng thấy trước đây. Việt Nam đã khẳng định mình là một người chơi quan trọng trong sân chơi quốc tế, và xu hướng phát triển trong chính sách đối ngoại sắp tới sẽ tiếp tục tạo ra những dấu ấn mạnh mẽ. Chúng ta đang sống trong thời đại mà hợp tác đa phương trở thành một yếu tố quan trọng, và điều này thực sự có thể mở ra những cánh cửa mới cho quốc gia.</p>
        <p>Chúng ta có thể thấy rằng, việc củng cố quan hệ với các cường quốc đang diễn ra ngày càng mạnh mẽ. Một tư duy mở cửa, sẵn sàng chào đón các nhà đầu tư và ý tưởng mới từ bên ngoài sẽ là chìa khóa cho sự phát triển bền vững. Việc mở rộng hợp tác trong lĩnh vực công nghệ, đổi mới sáng tạo, và phát triển bền vững không chỉ tăng cường năng lực cạnh tranh mà còn thu hút sự chú ý từ các nền kinh tế lớn. Hãy tưởng tượng một Việt Nam với một nền kinh tế năng động, nơi mỗi cá nhân đều có khả năng vươn mình, đóng góp vào sự phát triển chung của đất nước.</p>
     

        <h3 className="font-bold " >5.2. Vai trò của giới trẻ và cộng đồng</h3>
        <p>Giới trẻ Việt Nam sẽ đóng một vai trò quan trọng trong việc định hình tương lai của ngoại giao Cây tre. Với sự nhạy bén và sáng tạo, họ không chỉ là những người thụ hưởng mà còn là những người dẫn đầu trong việc xây dựng các mối quan hệ quốc tế mới mẻ. Tư duy cởi mở và khả năng ứng dụng công nghệ thông tin sẽ cho phép thế hệ trẻ tạo ra những kết nối mạnh mẽ hơn bao giờ hết. Họ sẽ là những kẻ tiên phong, làm cầu nối giữa Việt Nam và thế giới thông qua các dự án hợp tác quốc tế, các diễn đàn, và các phong trào xã hội.</p>
        <p>Hãy nghĩ về điều này: một thế hệ trẻ nhiệt huyết, tràn đầy năng lượng, không ngại thử thách và dám cùng nhau hành động vì tương lai. Các bạn có thể khởi xướng những chương trình ngoại giao văn hóa, hay đơn giản là tham gia các hoạt động giao lưu với bạn bè quốc tế. Những ý tưởng đổi mới và cách tiếp cận mới sẽ là nguồn động lực giúp Việt Nam tiếp tục vươn xa trong quá trình hội nhập. Sự tham gia nhiệt tương của từng cá nhân sẽ đóng góp vào sức mạnh chung của cả dân tộc.</p>

        <h3 className="font-bold " >5.3. Dự báo về quan hệ với các cường quốc</h3>
        <p>Trong bối cảnh chính trị thế giới đang hiện hữu nhiều biến động, việc dự báo quan hệ với các cường quốc như Hoa Kỳ, Trung Quốc và Liên minh châu Âu là điều cần thiết. Những cuộc đàm phán thương mại, hợp tác về an ninh và nhiều vấn đề toàn cầu khác đều đang diễn ra, và Việt Nam đang rất nỗ lực để xuất hiện như một đối tác thực sự tin cậy. Việc này không chỉ giúp gia tăng lợi ích kinh tế mà còn làm tăng cường vị thế chiến lược của quốc gia trong khu vực và thế giới.</p>
        <p>Có thể, một ngày không xa, Việt Nam sẽ trở thành một nền tảng tuyệt vời cho các diễn đàn quốc tế quan trọng, nơi các nhà lãnh đạo sẽ cùng nhau thảo luận và tìm kiếm các giải pháp cho các vấn đề chung. Lưu giữ được bản sắc văn hóa và lịch sử của dân tộc trong quá trình hội nhập và phát triển sẽ luôn là một nhiệm vụ quan trọng. Mỗi bước đi, mỗi quyết định của chúng ta đều sẽ hình thành nên một tương lai mà Việt Nam luôn kiên cường, sáng tạo và hòa bình.</p>
        <p>Giờ đây, hãy sẵn sàng để chuyển sang phần cuối cùng, nơi mà chúng ta sẽ tóm gọn những điểm chính đã thảo luận và khẳng định ý nghĩa lâu dài của Dĩ bất biến, ứng vạn biến trong việc xây dựng ngoại giao Cây tre Việt Nam!</p>
       

      </>
    ),
    section6: (
      <>
       <h3 className="font-bold " >6.1. Thách thức an ninh và hòa bình</h3>
        <p>Trong một thế giới ngày nay, khái niệm an ninh không còn chỉ gói gọn trong những cuộc chiến tranh hay mối đe dọa quân sự. Từ biến đổi khí hậu cho đến khủng bố quốc tế, những thách thức an ninh đang ngày càng phức tạp và đa dạng. Việt Nam không nằm ngoài vòng xoáy này. Hình ảnh của một quốc gia hiền hòa và thanh bình đang phải đối mặt với nhiều yếu tố xung đột và thách thức từ bên ngoài. Điều này không chỉ cần sự khéo léo trong cách xử lý tình huống, mà còn cả kiến thức và khả năng ứng biến nhanh nhạy.</p>
        <p>Khi chúng ta nói về an ninh, chúng ta không thể không nhắc đến mục tiêu bảo vệ hòa bình cho người dân. Chính phủ Việt Nam đã nhiều lần khẳng định quan điểm không tham gia vào các cuộc chiến tranh mà lựa chọn con đường hòa bình và đàm phán. Chính sách này không chỉ củng cố vị thế của Việt Nam trong mắt cộng đồng quốc tế, mà còn thể hiện lòng ưu ái đối với giá trị con người. Hãy tưởng tượng một giấc mơ về một Việt Nam, nơi mà mọi người có thể sống hòa bình, không cần lo lắng về những mối đe dọa từ bên ngoài. Đó chính là mục tiêu cao cả mà chúng ta cùng hướng tới.</p>
     

        <h3 className="font-bold " >6.2. Nhân quyền và ngoại giao</h3>
        <p>Nhân quyền ngày càng trở thành một yếu tố quan trọng trong các quan hệ quốc tế. Việt Nam, với tư cách là một quốc gia đang phát triển, cần phải chấp nhận những thách thức mà vấn đề này mang lại. Mặc dù đã có nhiều tiến bộ trong việc đảm bảo quyền lợi cho người dân, nhưng vẫn còn tồn tại những vấn đề cần được xem xét và khắc phục. Việc thực thi nhân quyền không chỉ giúp tạo ra một xã hội bình đẳng, mà còn đóng vai trò quan trọng trong việc xây dựng lòng tin giữa các quốc gia.</p>
        <p>Cách mà Việt Nam ứng xử trong vấn đề nhân quyền sẽ ảnh hưởng đến mối quan hệ của quốc gia này với các nước láng giềng và các cường quốc. Hãy nghĩ về việc khi chúng ta mở rộng cửa giao thương và hợp tác quốc tế, thì việc đảm bảo nhân quyền cũng là một trong những yêu cầu chủ yếu. Một cánh cửa mở ra cũng cần sự tôn trọng lẫn nhau về mặt văn hóa và giá trị con người. Và khi bạn xây dựng cầu nối trên nền tảng solid của nhân quyền, bạn không chỉ tạo ra mối quan hệ bền vững mà còn giúp nâng cao hình ảnh của đất nước trên trường quốc tế.</p>

        <h3 className="font-bold " >6.3. Sự linh hoạt trong việc đối phó với thách thức</h3>
        <p>Sự linh hoạt chính là chìa khóa cho sự tồn tại và phát triển của một quốc gia trong thời đại này. Đó là khả năng điều chỉnh và thích ứng, không chỉ với môi trường xung quanh mà còn với những xu thế thay đổi trong chính sách bên ngoài. Việt Nam không chỉ cần thể hiện sự kiên định với các giá trị cốt lõi của mình mà còn cần phải sẵn sàng điều chỉnh các chiến lược để phù hợp với điều kiện mới. Hãy tưởng tượng Việt Nam như một cây tre, luôn uốn mình theo gió bão, nhưng vẫn giữ được gốc rễ vững chắc.</p>
        <p>Việc xây dựng năng lực và tăng cường ngoại giao cần thiết trong thời đại toàn cầu hóa và công nghệ thông tin hiện đại. Để đáp ứng với những thách thức mới, Việt Nam cần nâng cao khả năng dự đoán và phản ứng nhanh chóng với những biến động trong và ngoài nước. Điều này không chỉ giúp bảo vệ lợi ích của quốc gia mà còn tạo điều kiện thuận lợi cho sự phát triển bền vững trong tương lai.</p>
        <p>Giờ đây, cùng nhau đi đến phần kết luận, nơi chúng ta sẽ tóm gọn những điểm chính và khẳng định ý nghĩa lâu dài của tư tưởng "Dĩ bất biến, ứng vạn biến" trong việc xây dựng ngoại giao Cây tre Việt Nam!</p>

      </>
    ),
    section7: (
      <>
         <h3 className="font-bold " >Kết luận</h3>
        <p>Trong hành trình khám phá tư tưởng "Dĩ bất biến, ứng vạn biến" và ngoại giao Cây tre Việt Nam, chúng ta đã đắm chìm trong những giá trị cốt lõi của một quốc gia kiên cường và linh hoạt. Từ khái niệm và nguồn gốc của triết lý này, cho đến sự áp dụng trong thực tiễn ngoại giao hiện đại, Việt Nam đã chứng minh rằng chúng ta có thể đứng vững, ngay cả trong những lúc khó khăn, bằng cách khéo léo tận dụng cơ hội và duy trì bản sắc văn hóa. Những thành công trong chính sách đối ngoại không chỉ làm tăng vị thế của quốc gia trên trường quốc tế mà còn truyền cảm hứng mạnh mẽ cho thế hệ trẻ và các cộng đồng toàn cầu.</p>

      </>
    ),
  };

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setSelectedSection(section.id);
        }
      }
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section 
    className="flex flex-row p-4 bg-gray-100"
    style={{
      backgroundImage: "url('https://img.freepik.com/premium-vector/red-yellow-background-with-yellow-star-design-vietnam-independence-day_96777-597.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="w-1/6"></div>

        {/* Sticky Sidebar */}
        <div className="w-2/5 p-4 border-red-400 rounded-lg shadow-md sticky top-0">
        <div className='bg-red-500 p-4 rounded-lg'>
          <h3 className="font-bold text-xl text-white">Danh mục</h3>
          <ul className="mt-2 text-white">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block p-2 rounded transition-colors 
                              ${selectedSection === section.id ? 'bg-yellow-400 text-green-500' : 'hover:bg-yellow-200 hover:text-green-500'}`}
                  onClick={() => {
                    setSelectedSection(section.id);
                    setIsExpanded(false); // Reset expansion when changing section
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-4/5 p-4 rounded-lg shadow-md bg-white bg-opacity-80">
        {!selectedSection ? (
          <img 
            src="https://file1.dangcongsan.vn/data/0/images/2022/06/24/phuongdt/truong-phai-doi-ngoai-cay-tre-viet-nam.jpeg" 
            alt="Default Display" 
            className="w-full h-auto" 
          />
        ) : (
          <div>
            <h2 id={selectedSection} className="font-bold mt-4 text-lg text-red-500">
              {sections.find(section => section.id === selectedSection).title}
            </h2>
            <div>
              {isExpanded ? contentData[selectedSection] : (
                <>
                  {React.Children.toArray(contentData[selectedSection]).slice(0, 2)} {/* Show only the first two parts */}
                </>
              )}
            </div>
           
          </div>
        )}
      </div>

      <div className="w-1/6"></div>
    </section>
  );
};

export default Content;

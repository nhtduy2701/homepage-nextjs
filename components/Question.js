"use client";
import React, { useState } from "react";

export default function Question() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const data = [
    {
      question: "Nhà thông minh (Smart Home) là gì?",
      answer:
        "Nhà thông minh (Smart Home) là ngôi nhà được trang bị các thiết bị điện tử có thể điều khiển trực tiếp hoặc từ xa qua smartphone. Đặc biệt với FPT Smart Home bạn có thể điều khiển ngôi nhà của mình bằng giọng nói Tiếng Việt, hệ thống nhà thông minh giúp bạn quản lý, điều khiển và kiểm soát an ninh của ngôi nhà một cách an toàn.",
    },
    {
      question:
        "Lắp đặt thiết bị nhà thông minh FPT Smart Home có phức tạp không?",
      answer:
        "Với sản phẩm FPT Smart Home bạn có thể tự lắp đặt thiết bị thông minh cho gia đình của mình. Ngoài ra, đội ngũ kỹ thuật từ FPT Smart Home luôn sẵn sàng hỗ trợ bạn trong quá trình tư vấn cũng như cài đặt sản phẩm.",
    },
    {
      question:
        "Với khoản kinh phí bao nhiêu thì có thể lắp đặt được nhà thông minh FPT Smart Home?",
      answer:
        "Với kinh phí từ khoảng 10 triệu đồng bạn có thể biến ngôi nhà của mình thành ngôi nhà thông minh.",
    },
    {
      question:
        " Nhà tôi đã hoàn thiện rồi và muốn thay thế thiết bị trong nhà thành thiết bị thông minh có được không?",
      answer:
        "Hoàn toàn được và dễ dàng nâng cấp từ thiết bị bình thường lên các thiết bị thông minh. FPT Smart Home sẽ hỗ trợ tư vấn, khảo sát để đưa ra phương án nâng cấp tối ưu cho khách hàng, mang lại sự trải nghiệm tuyệt vời nhất.",
    },
    {
      question: "Tôi vẫn chưa yên tâm về chất lượng và nguồn gốc xuất xứ?",
      answer:
        "Với FPT Smart Home khách hàng hoàn toàn yên tâm và tin tưởng sử dụng dịch vụ. Các thiết bị nhà thông minh đến từ FPT Smart Home đều do các kỹ sư của FPT Smart Home nghiên cứu và hoàn thiện, bộ xử lý trung tâm được Google xác thực và cấp chứng chỉ để triển khai đến khách hàng. Các sản phẩm đều được tuân theo các TCVN trước khi đưa ra thị trường, có các chứng nhận về ROHS, CE… Khách hàng hoàn toàn yên tâm về chất lượng dịch vụ và nguồn gốc xuất xứ các sản phẩm của FPT Smart Home.",
    },
    {
      question:
        "Trong quá trình sử dụng, nếu gặp vấn đề thì FPT Smart Home hỗ trợ ra sao?",
      answer:
        "FPT Smart Home là đơn vị trực thuộc của FPT Telecom, luôn dẫn đầu trong việc hỗ trợ khách hàng và mang lại sự trải nghiệm tốt nhất đến khách hàng. Dịch vụ hiện đang có mặt tại tất cả tỉnh thành trên toàn quốc và hỗ trợ 24/7. Khi có vấn đề, Quý khách hàng có thể liên hệ tổng đài 19006600 để tiếp nhận thông tin, chăm sóc, hỗ trợ và bảo hành, sửa chữa tận nhà.",
    },
    {
      question:
        "Sử dụng nhà thông minh FPT Smart Home có bị mất kết nối không?",
      answer:
        "FPT Smart Home sử dụng các chuẩn kết nối Bluetooth Mesh và Zigbee, đảm bảo hoạt động ổn định trong hệ thống. Các thiết bị sẽ liên kết với nhau thành mạng lưới kết nối được điều khiển bởi thiết bị trung tâm (FPT Play Box). Trường hợp nhà khách hàng mất Internet thì hệ thống FPT Smart Home vẫn hoạt động bình thường, khách hàng có thể điều khiển trực tiếp trên giao diện từ Bộ điều khiển trung tâm hoặc thông qua ứng dụng trên di động.",
    },
  ];

  return (
    <div className="w-full lg:flex lg:gap-[40px] xl:gap-[60px] xl:max-w-[1150px] 2xl:max-w-[1300px] mx-auto px-[20px] mt-[67px] sm:mt-[100px] lg:mt-[130px] sm:px-[25px]">
      <div className="lg:flex-row lg:basis-[45%]">
        <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[20px] sm:mb-[30px]">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-[60px]">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                index === data.length - 1
                  ? "mb-[25px] pb-[15px]"
                  : "mb-[25px] pb-[15px] border-b-[1px] border-black"
              }`}
            >
              <div
                className="flex justify-between cursor-pointer mb-[15px]"
                onClick={() => toggleExpand(index)}
              >
                <p className="text-[16px] lg:text-[18px] font-bold">
                  {item.question}
                </p>
                <div className="mx-[10px]">
                  <svg
                    width="40"
                    height="9.889"
                    viewBox="0 0 17.096 9.889"
                    className={`mx-auto w-4 h-4 transition-transform ${
                      expandedIndex === index ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M853.99,11062.949l8.181,8.813,8.181-8.813"
                      transform="translate(-853.624 -11062.609)"
                      fill="none"
                      stroke="#333"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  expandedIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-[15px] lg:text-[16px]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:basis-[55%]">
        <img src="/images/faq-image.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function Knowledge() {
  const data = [
    {
      imageSrc: "/images/giai-phap-nha-thong-minh-2.png",
      name: "7 tiện ích từ giải pháp nhà thông minh và trải nghiệm thực tế",
      description:
        "Giải pháp nhà thông minh (Smart Home Solution) FPT Smart Home đã ra đời mang đến giá trị sống đích thực cho mọi người, mọi nhà. Khám phá ngay!",
    },
    {
      imageSrc: "/images/xu-huong-nha-thong-minh-1.png",
      name: "Cập nhật 5 xu hướng nhà thông minh mới nhất trong năm 2022",
      description:
        "Xu hướng nhà thông minh mới nhất 2022 được FPT Smart Home cập nhật chắc chắn sẽ mang lại cho bạn chất lượng cuộc sống hiện đại và tiện nghi",
    },
    {
      imageSrc: "/images/thiet-ke-nha-thong-minh-2.jpg",
      name: "Tự thiết kế nhà thông minh có khó không? 4 bước triển khai chi tiết",
      description:
        "Chi tiết 4 bước tự thiết kế nhà thông minh đơn giản được chia sẻ bởi FPT Smart Home giúp bạn sở hữu căn hộ Smart Home vừa đẹp vừa tiện nghi",
    },
    {
      imageSrc: "/images/lap-dat-rem-thong-minh-4.png",
      name: "4 lưu ý cần nhớ khi lắp đặt rèm thông minh - FPT Smart Home",
      description:
        "Nắm vững 4 lưu ý cần nhớ khi lắp đặt rèm thông minh của FPT Smart Home sẽ giúp cho quá trình sử dụng rèm cửa của bạn trở nên dễ dàng hơn",
    },
    {
      imageSrc: "/images/thi-cong-lap-dat-nha-thong-minh-5.jpg",
      name: "Chi Phí Thi Công Lắp Đặt Nhà Thông Minh Tại FPT Smart Home",
      description:
        "Thi công lắp đặt nhà thông minh (smart home) đạt chuẩn - an toàn - chất lượng tại FPT Smart Home. Liên hệ 1900 6600 để được tư vấn chi phí cụ thể!",
    },
    {
      imageSrc: "/images/o-cam-dien-thong-minh-la-gi-3.png",
      name: "Ổ cắm thông minh là gì? Công dụng, cách chọn mua ổ cắm điện",
      description:
        "Ổ cắm điện thông minh là loại ổ cắm điện có khả năng tương tác với các thiết bị kết nối Wifi hoặc Bluetooth một cách dễ dàng thông qua các ứng dụng trên smartphone",
    },
    {
      imageSrc: "/images/gia-o-cam-dien-am-tuong-3.png",
      name: "Giá ổ cắm điện âm tường bao nhiêu? Loại nào tốt nhất hiện nay?",
      description:
        "Ổ cắm điện âm tường mặt kính FPT Smart Home chất lượng cao cấp thiết kế tinh tế sẽ là một gợi ý đáng tham khảo cho không gian sống của bạn!",
    },
    {
      imageSrc: "/images/nha-thong-minh-tai-tphcm-1.png",
      name: "Đơn vị lắp đặt nhà thông minh uy tín TPHCM - FPT Smart Home",
      description:
        "Bạn đang tìm kiếm một đơn vị lắp đặt nhà thông minh tại TPHCM uy tín? Click để tìm hiểu chi tiết về FPT Smart Home - thương hiệu hàng đầu hiện nay",
    },
    {
      imageSrc: "/images/bao-gia-cong-tac-thong-minh-7.png",
      name: "Báo giá công tắc thông minh mới nhất 2022 tại FPT Smart Home",
      description:
        "Giá công tắc điện thông minh bao nhiêu? Báo giá công tắc thông minh chi tiết, chính xác nhất. Gọi ngay 1900600 để được FPT Smart Home hỗ trợ!",
    },
    {
      imageSrc: "/images/nha-thong-minh-la-gi-9.png",
      name: "Nhà thông minh là gì? Tìm hiểu về Smart Home từ A - Z",
      description:
        "Nhà thông minh là gì? Bao gồm những thiết bị gì? FPT Smart Home cung cấp giải pháp nhà thông minh trọn gói. Liên hệ tư vấn qua hotline 19006600 ngay!",
    },
    {
      imageSrc: "/images/cam-bien-thong-minh-la-gi-1.jpg",
      name: "Cảm biến thông minh là gì? Phân loại, cấu tạo và ứng dụng",
      description:
        "Cảm biến thông minh là gì? Thiết bị tích hợp cảm biến thông minh FPT Smart Home. Liên hệ qua hotline 19006600 để được tư vấn & đặt hàng nhanh chóng!",
    },
    {
      imageSrc: "/images/den-thong-minh-la-gi-12.png ",
      name: "Đèn thông minh (Light Smart) là gì? Cách hoạt động, tính năng, ưu điểm",
      description:
        "Đèn thông minh là gì? Các tính năng nổi bật của bóng đèn thông minh? Đặt mua bóng đèn thông minh chính hãng FPT Smart Home qua hotline 19006600!",
    },
    {
      imageSrc: "/images/ung-dung-nha-thong-minh-3.png",
      name: "Top 5+ ứng dụng nhà thông minh nổi bật tại FPT Smart Home",
      description:
        "Ứng dụng nhà thông minh của FPT Smart Home mang đến bạn không gian sống đầy đủ tiện nghi và đẳng cấp. Click để xem chi tiết!",
    },
    {
      imageSrc: "/images/thi-cong-lap-dat-nha-thong-minh.jpg",
      name: "Thi công lắp đặt nhà thông minh Quận 7 - FPT Smart Home",
      description:
        "Thi công nhà thông minh quận 7 TPHCM chất lượng cùng mức chi phí hợp lý. Gọi ngay hotline 19006600 để được FPT Smart Home hỗ trợ nhanh chóng!",
    },
    {
      imageSrc: "/images/nha-thong-minh-nha-trang-4.png",
      name: "Thi công lắp đặt nhà thông minh Nha Trang - FPT Smart Home",
      description:
        "Lắp đặt nhà thông minh Nha Trang tại FPT Smart Home là sự lựa chọn cho cuộc sống hoàn mỹ hơn tại thành phố biển xinh đẹp. Liên hệ ngay 19006600!",
    },
    {
      imageSrc: "/images/nha-thong-minh-vung-tau-7.png",
      name: "Thi công lắp đặt nhà thông minh Vũng Tàu - FPT Smart Home",
      description:
        "Thi công lắp đặt nhà thông minh Vũng Tàu tại FPT Smart Home. Liên hệ ngay để được tư vấn và đặt hàng nhanh chóng qua số hotline 19006600!",
    },
    {
      imageSrc: "/images/y-tuong-thiet-ke-nha-thong-minh-10.png",
      name: "99+ Ý tưởng thiết kế nhà thông minh siêu hay, tiện lợi 2022",
      description:
        "Gợi ý những ý tưởng thiết kế nhà thông minh siêu hay, siêu tiện lợi, dễ quản lý và tiết kiệm năng lượng. Cùng FPT Smart Home khám phá ngay!",
    },
    {
      imageSrc: "/images/nha-thong-minh-da-nang-4.png",
      name: "Thi công lắp đặt nhà thông minh Đà Nẵng - FPT Smart Home",
      description:
        "Thi công lắp đặt nhà thông minh Đà Nẵng tại FPT Smart Home đảm bảo chất lượng, uy tín, giá tốt. Liên hệ Hotline 19006600 để được tư vấn chi tiết!",
    },
    {
      imageSrc: "/images/nha-thong-minh-hai-phong-2.png",
      name: "Thi công lắp đặt nhà thông minh tại Hải Phòng - FPT Smart Home",
      description:
        "Lắp đặt thi công nhà thông minh Hải Phòng tại FPT Smart Home nhanh chóng, tiện lợi. Tư vấn lựa chọn sản phẩm và lắp đặt qua số Hotline 19006600",
    },
    {
      imageSrc: "/images/nha-thong-minh-quang-ninh-3.jpg",
      name: "Thi công lắp đặt nhà thông minh tại Quảng Ninh - FPT Smart Home",
      description:
        "Thi công lắp đặt nhà thông minh Quảng Ninh tại FPT Smart Home. Đơn vị cung cấp thiết bị, thiết kế nhà thông minh chất lượng, giá tốt. Hotline 19006600",
    },
  ];

  const Grid1 = () => {
    const [activeGrid, setActiveGrid] = useState(1);

    const handleGridChange = (gridIndex) => {
      setActiveGrid(gridIndex);
    };

    return (
      <div className="relative overflow-hidden sm:hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${(activeGrid - 1) * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="flex-0 flex-shrink-0 w-full">
              <div className="w-full flex flex-col px-[20px] pt-[20px] pb-[30px] bg-[#f8f9fa] rounded-[24px]">
                <div className="h-[200px] min-[350px]:h-[250px] min-[400px]:h-[290px] flex items-center overflow-hidden rounded-[13px]">
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <a href="" className="mt-[20px] block text-center">
                  <p className="font-bold text-[16px] text-[#1a1a1a] mx-auto">
                    {item.name}
                  </p>
                </a>

                <div className="border-[#1a1a1a] border my-[10px]"></div>

                <p className="text-center text-[16px] text-[#1a1a1a]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center w-full h-[56px] min-[480px]:h-[28px] mt-[20px]">
          {Array.from({ length: 20 }).map((_, gridIndex) => (
            <svg
              key={gridIndex}
              className={`w-[6px] h-[28px] mx-2 cursor-pointer ${
                activeGrid === gridIndex + 1 ? "text-black" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 8 8"
              onClick={() => handleGridChange(gridIndex + 1)}
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
          ))}
        </div>
      </div>
    );
  };

  const Grid2 = () => {
    const [activeGrid, setActiveGrid] = useState(1);

    const handleGridChange = (gridIndex) => {
      setActiveGrid(gridIndex);
    };

    return (
      <div className="relative overflow-hidden hidden sm:block lg:hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${(activeGrid - 1) * 100}%)` }}
        >
          {Array.from({ length: 10 }).map((_, gridIndex) => (
            <div
              key={gridIndex}
              className="flex-0 flex-shrink-0 w-full px-[20px]"
            >
              <div className="flex gap-[20px]">
                {data
                  .slice(gridIndex * 2, gridIndex * 2 + 2)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="w-1/2 flex flex-col px-[20px] pt-[20px] pb-[30px] bg-[#f8f9fa] rounded-[24px]"
                    >
                      <div className="sm:h-[190px] min-[700px]:h-[210px] min-[800px]:h-[260px] min-[900px]:h-[300px] min-[1000px]:h-[340px] flex justify-center items-center overflow-hidden rounded-[13px]">
                        <img
                          src={item.imageSrc}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <a href="" className="mt-[20px] block text-center">
                        <p className="font-bold text-[16px] text-[#1a1a1a] mx-auto">
                          {item.name}
                        </p>
                      </a>
                      <div className="border-[#1a1a1a] border my-[10px]"> </div>
                      <p className="text-center text-[15px] text-[#1a1a1a] leading-5">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-[28px] mt-[20px]">
          {Array.from({ length: 10 }).map((_, gridIndex) => (
            <svg
              key={gridIndex}
              className={`w-[6px] h-[6px] mx-2 cursor-pointer ${
                activeGrid === gridIndex + 1 ? "text-black" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 8 8"
              onClick={() => handleGridChange(gridIndex + 1)}
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
          ))}
        </div>
      </div>
    );
  };

  const Grid4 = () => {
    const [activeGrid, setActiveGrid] = useState(1);

    const handleGridChange = (gridIndex) => {
      setActiveGrid(gridIndex);
    };

    return (
      <div className="relative overflow-hidden hidden lg:block">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${(activeGrid - 1) * 100}%)` }}
        >
          {Array.from(
            { length: Math.ceil(data.length / 4) },
            (_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex-0 flex-shrink-0 w-full px-[40px]"
              >
                <div className="flex gap-[20px]">
                  {data
                    .slice(pageIndex * 4, pageIndex * 4 + 4)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="w-1/4 flex flex-col px-[20px] pt-[20px] pb-[30px] bg-[#f8f9fa] rounded-[24px]"
                      >
                        <div className="w-full lg:h-[150px] min-[1100px]:h-[170px] min-[1200px]:h-[190px] min-[1300px]:h-[210px] min-[1400px]:h-[230px] flex items-center overflow-hidden rounded-[13px]">
                          <img
                            src={item.imageSrc}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <a href="" className="mt-[20px] block text-center">
                          <p className="font-bold text-[15px] text-[#1a1a1a] mx-auto">
                            {item.name}
                          </p>
                        </a>
                        <div className="border-[#1a1a1a] border my-[10px]"></div>
                        <p className="text-center text-[15px] text-[#1a1a1a] leading-5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center items-center w-full h-[28px] mt-[20px]">
          {Array.from({ length: 5 }).map((_, gridIndex) => (
            <svg
              key={gridIndex}
              className={`w-[6px] h-[6px] mx-2 cursor-pointer ${
                activeGrid === gridIndex + 1 ? "text-black" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 8 8"
              onClick={() => handleGridChange(gridIndex + 1)}
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-[1450px]:max-w-[1450px] mt-[60px] sm:mt-[80px] lg:mt-[120px] mx-auto px-[20px] sm:px-[25px] ">
      <h2 className="text-[#3c4043] text-[20px] sm:text-[23px] md:text-[35px] xl:text-[40px] xxl:text-[45px] font-bold text-center mb-[20px] sm:mb-[30px] lg:mb-[60px]">
        Những kiến thức người chơi hệ Smart Home nên biết
      </h2>
      <button className="flex justify-center mx-auto items-center mt-[20px] mb-[35px] sm:mt-[25px] sm:mb-[50px] w-[126px] sm:w-[140px] lg:w-[160px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
        <span className="text-[15px] font-bold text-center">Xem thêm</span>
      </button>
      <Grid1 />
      <Grid2 />
      <Grid4 />
    </div>
  );
}

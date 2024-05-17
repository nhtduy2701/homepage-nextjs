"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

export default function Video() {
  const data = [
    {
      imageSrc: "/images/thumb-1.png",
      videoSrc: "https://www.youtube.com/embed/bYeuXxjyask",
      title: "FPT Smart Home - Hạnh Phúc Thật Giản Đơn",
    },
    {
      imageSrc: "/images/thumb-2.jpg",
      videoSrc: "https://www.youtube.com/embed/l0dhROiJ7jg",
      title:
        "Diamond Crown Hai Phong - Tuyệt tác kiến trúc Neo-Futurism & Smart Home từ tương lai",
    },
    {
      imageSrc: "/images/thumb-3.png",
      videoSrc: "https://www.youtube.com/embed/TE1f-iHYC0I",
      title:
        "FPT Smart Home Lên Sóng Chương Trình Kinh tế Phương Nam | Truyền Hình ANTV",
    },
    {
      imageSrc: "/images/thumb-4.jpg",
      videoSrc: "https://www.youtube.com/embed/Gb3d3DrRRGo",
      title:
        "Căn hộ cao cấp Splendora 3 phòng ngủ trang bị hệ thống smarthome đẳng cấp",
    },
    {
      imageSrc: "/images/thumb-5.png",
      videoSrc: "https://www.youtube.com/embed/4wDEcSPbc9M",
      title: "Căn hộ thông minh chỉ từ 20 triệu sẽ như thế nào?",
    },
    {
      imageSrc: "/images/thumb-6.jpg",
      videoSrc: "https://www.youtube.com/embed/xzAlNG-EyBo",
      title: "Nâng Tầm Phong Cách Sống Cùng FPT Smart Home - Amazing Living",
    },
    {
      imageSrc: "/images/thumb-7.png",
      videoSrc: "https://www.youtube.com/embed/L2JDLjYXq0U",
      title:
        "Ok Google, bật máy lạnh. OK Google, bật quạt | Chơi đồ FPT Smart Home",
    },
    {
      imageSrc: "/images/thumb-8.png",
      videoSrc: "https://www.youtube.com/embed/GhPNFNYrk_k",
      title: "Review Nhà Thông Minh FPT Điều Khiển Bằng Tiếng Việt | Tinh tế",
    },
    {
      imageSrc: "/images/thumb-9.png",
      videoSrc: "https://www.youtube.com/embed/PCeZyVmXfNg",
      title:
        "Tiền Tỷ Mới Có Nhà Thông Minh?? Cùng Vật Vờ Studio Tìm Câu Trả Lời Với FPT Smart Home",
    },
    {
      imageSrc: "/images/thumb-10.png",
      videoSrc: "https://www.youtube.com/embed/Mq6Y23URD98",
      title:
        "Kết Hợp Giữa Cảm Biến Cửa và Cảm Biến Chuyển Động | FPT Smart Home",
    },
    {
      imageSrc: "/images/thumb-11.png",
      videoSrc: "https://www.youtube.com/embed/304XGQm1IHI",
      title:
        "Hướng Dẫn Các Câu Lệnh Tìm Nội Dung Trên FPT Play Box | FPT Smart Home",
    },
    {
      imageSrc: "/images/thumb-12.png",
      videoSrc: "https://www.youtube.com/embed/5E7FBKHeCos",
      title: "Tìm Phim Bằng Tên Diễn Viên | FPT Smart Home",
    },
  ];

  const [nav, setNav] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let sliderRef = useRef(null);

  const xs = useMediaQuery("(max-width: 600px)");
  const sm = useMediaQuery("(min-width: 601px) and (max-width: 768px)");
  const md = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const lg = useMediaQuery("(min-width: 1025px) and (max-width: 1440px)");

  let slidesToShow = 1;

  if (xs) {
    slidesToShow = 3;
  } else if (sm) {
    slidesToShow = 4;
  } else if (md) {
    slidesToShow = 5;
  } else if (lg) {
    slidesToShow = 6;
  } else {
    slidesToShow = 7;
  }

  useEffect(() => {
    setNav(sliderRef);
  }, []);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="block 3xl:max-w-[1300px] xl:max-w-[1150px] mx-auto min-[640px]:mt-[140px] min-[640px]:px-[25px] mt-[80px] px-[20px]">
      <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[35px] min[640px]:mb-[65px]">
        Video sản phẩm nhà thông minh
      </h2>

      <div className="relative overflow-hidden mb-[30px] mx-auto mt-0 min-[640px]:mb-[50px] bg-[#000] rounded-[7px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.5)] max-w-full min-[640px]:max-w-[85%]">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={
              data[activeIndex].videoSrc +
              "?rel=0&controls=1&autoplay=1&mute=1&loop=0&modestbranding=1&vq=hd720&playsinline=1"
            }
            title={data[activeIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Slider
        asNavFor={nav}
        ref={(slider) => (sliderRef = slider)}
        slidesToShow={slidesToShow}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
      >
        {data.map((item, index) => (
          <div key={index} className="relative aspect-w-2 aspect-h-1">
            <div className="absolute flex px-[5px] min-[600px]:px-[12.5px]">
              <img
                src={item.imageSrc}
                alt={item.title}
                className={
                  index === activeIndex
                    ? "w-full h-full object-cover border-[3px] border-solid border-[#f47920] rounded-[7px]"
                    : "w-full h-full object-cover"
                }
                onClick={() => handleThumbClick(index)}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

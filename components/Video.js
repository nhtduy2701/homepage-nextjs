"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Video() {
  const data = [
    {
      imageSrc: "/images/thumb-1.png",
      videoSrc:
        "https://www.youtube.com/embed/bYeuXxjyask?rel=0&controls=1&autoplay=1&mute=1&loop=1&vq=hd720&playsinline=1",
      title: "FPT Smart Home - Hạnh Phúc Thật Giản Đơn",
    },
    {
      imageSrc: "/images/thumb-2.jpg",
      videoSrc:
        "https://www.youtube.com/embed/l0dhROiJ7jg?rel=0&controls=1&autoplay=1&mute=1&loop=1&vq=hd720&playsinline=1",
      title:
        "Diamond Crown Hai Phong - Tuyệt tác kiến trúc Neo-Futurism & Smart Home từ tương lai",
    },
    {
      imageSrc: "/images/thumb-3.png",
      videoSrc:
        "https://www.youtube.com/embed/TE1f-iHYC0I?rel=0&controls=1&autoplay=1&mute=1&loop=1&vq=hd720&playsinline=1",
      title:
        "FPT Smart Home Lên Sóng Chương Trình Kinh tế Phương Nam | Truyền Hình ANTV",
    },
  ];

  const [nav, setNav] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let sliderRef = useRef(null);

  useEffect(() => {
    setNav(sliderRef);
  }, []);

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="block sm:hidden mt-[80px] px-[20px]">
      <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[35px]">
        Video sản phẩm nhà thông minh
      </h2>

      <div className="bg-[#000] rounded-[7px] overflow-hidden mb-[30px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.5)]">
        <iframe
          className="w-[280px] h-[280px]"
          src={data[activeIndex].videoSrc}
          title={data[activeIndex].title}
          frameBorder="0"
          allow="accelerometer; autoplay; cli pboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <Slider
        asNavFor={nav}
        ref={(slider) => (sliderRef = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="thumbnail-slider"
      >
        {data.map((item, index) => (
          <div key={index} className="px-[5px]">
            <img
              src={item.imageSrc}
              alt=""
              className={
                index === activeIndex
                  ? "w-full h-[50px] object-cover border-[3px] border-orange-600 rounded-[5px]"
                  : "w-full h-[50px] object-cover"
              }
              onClick={() => handleThumbClick(index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

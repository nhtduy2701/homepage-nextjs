"use client";
import { useState } from "react";

export default function Feedback() {
  const data = [
    {
      imageSrc: "/images/review-image-1.png",
      name: "Hoàng Sang",
      title:
        "Có thể tương tác và quản lý hệ thống thiết bị thông minh trong nhà thông qua điện thoại rất tiện lợi. Tối muốn tắt hết mọi thứ chỉ cần nói “đi ngủ” thì tất cả sẽ được xử lý nhanh chóng, không phải tự đi tắt đèn, kéo rèm như trước nữa.",
    },
    {
      imageSrc: "/images/review-image-2.png",
      name: "Văn Hoàng",
      title:
        "Thuận tiện. Có lần anh đi công tác xa mà quên tắt đèn, nhà lúc đó lại không có ai. Thông qua điện thoại anh có thể điều khiển tắt đèn từ xa, quản lý cách dễ dàng hơn.",
    },
    {
      imageSrc: "/images/review-image-3.png",
      name: "Thanh Lê",
      title:
        "Kiểu dáng thiết kế mẫu mã các thiết bị đẹp, sài tiện lợi. FPT Smart Home có đội ngũ bảo hành rất tốt, có vấn đề sẽ có người đến xem và hỗ trợ trong ngày.",
    },
    {
      imageSrc: "/images/review-image-4.png",
      name: "Minh Chiến",
      title:
        "Anh rất an tâm khi hệ thống an ninh báo động chính xác, không nhầm lẫn giữa người và thú cưng, cũng giúp cảnh báo cho anh khi con nhỏ đi vào vùng nguy hiểm. Rất tiện.",
    },
  ];

  const MobileView = () => {
    const [activeGrid, setActiveGrid] = useState(1);

    const handleGridChange = (gridIndex) => {
      setActiveGrid(gridIndex);
    };

    return (
      <div className="min-[600px]:max-w-[600px] relative overflow-hidden sm:hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${(activeGrid - 1) * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="flex-0 flex-shrink-0 w-full">
              <div className="flex flex-col items-center px-[15px] h-full">
                <div className="mx-[10px] mt-[10px] mb-[25px]">
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="rounded-full w-full h-full"
                  />
                </div>

                <p className="text-center font-bold text-[18px] mb-[14px] text-[#1a1a1a] mx-auto">
                  {item.name}
                </p>
                <p className="text-center text-[16px] mb-[20px] text-[#1a1a1a]">
                  {item.title}
                </p>
                <svg
                  width="40"
                  height="49.31"
                  viewBox="0 0 72.318 49.315"
                  className="mb-[30px] flex items-center mx-auto mt-auto"
                >
                  <g transform="translate(-447.341 -10321.609)">
                    <g>
                      <g>
                        <path
                          d="M464.553,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                          fill="#1a1a1a"
                        ></path>
                      </g>
                      <g>
                        <path
                          d="M502.461,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                          fill="#1a1a1a"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-[28px]">
          {Array.from({ length: Math.ceil(data.length) }, (_, gridIndex) => (
            <svg
              key={gridIndex + 1}
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

  const TabletView = () => {
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
          {Array.from({ length: 3 }).map((_, gridIndex) => (
            <div key={gridIndex} className="flex-0 flex-shrink-0 w-full">
              <div className="flex gap-[25px] h-full">
                {data.slice(gridIndex, gridIndex + 3).map((item, index) => (
                  <div key={index} className="w-1/3 flex flex-col items-center">
                    <div className="mx-[10px] mt-[10px] mb-[25px]">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="rounded-full w-full"
                      />
                    </div>

                    <p className="text-center font-bold text-[20px] mb-[20px] mx-auto text-[#1a1a1a]">
                      {item.name}
                    </p>
                    <p className="text-center text-[16px] mb-[20px] text-[#1a1a1a] leading-5">
                      {item.title}
                    </p>
                    <svg
                      width="55"
                      height="49.31"
                      viewBox="0 0 72.318 49.315"
                      className="mb-[30px] flex items-center mx-auto mt-auto"
                    >
                      <g transform="translate(-447.341 -10321.609)">
                        <g>
                          <g>
                            <path
                              d="M464.553,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                              fill="#1a1a1a"
                            ></path>
                          </g>
                          <g>
                            <path
                              d="M502.461,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                              fill="#1a1a1a"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-[28px] mt-[20px]">
          {[1, 2].map((gridIndex) => (
            <svg
              key={gridIndex}
              className={`w-[6px] h-[6px] mx-2 cursor-pointer ${
                activeGrid === gridIndex ? "text-black" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 8 8"
              onClick={() => handleGridChange(gridIndex)}
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
          ))}
        </div>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <div className="mx-auto lg:grid lg:grid-cols-4 gap-10 hidden">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mx-[10px] mb-[20px] mt-[5px]">
              <img src={item.imageSrc} alt="" className="rounded-full w-full" />
            </div>

            <p className="text-center font-bold text-[25px] mb-[20px] text-[#1a1a1a]">
              {item.name}
            </p>
            <p className="text-center text-balance text-[17px] mb-[20px] text-[#1a1a1a]">
              {item.title}
            </p>
            <svg
              width="55"
              height="49.31"
              viewBox="0 0 72.318 49.315"
              className="mb-[30px] flex items-center mx-auto mt-auto"
            >
              <g transform="translate(-447.341 -10321.609)">
                <g>
                  <g>
                    <path
                      d="M464.553,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                      fill="#1a1a1a"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M502.461,10321.609a17.2,17.2,0,0,0-17.2,17.2s-1.122,19.2,17.2,32.117v-14.919a17.2,17.2,0,0,0,0-34.4Z"
                      fill="#1a1a1a"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-[100px] lg:mt-[136px] bg-[#f2f2f2]">
      <div className="w-full 2xl:max-w-[1300px] mx-auto px-[20px] py-[40px] sm:px-[25px] sm:py-[65px]">
        <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[30px] sm:mb-[60px]">
          Cảm nhận khách hàng
        </h2>
        <MobileView />
        <TabletView />
        <DesktopView />
      </div>
    </div>
  );
}

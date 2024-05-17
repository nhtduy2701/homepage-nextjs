"use client";
import { useState } from "react";

export default function Construction() {
  const data = [
    {
      imageSrc: "/images/construction-1.jpg",
      title: "Nhà Sinh Thái Trần Đức Homes",
      location: "Hồ Chí Minh",
      bedroomCount: "2",
      area: "100m2",
      bathroomCount: "3",
      apartmentType: "Căn hộ 2 phòng ngủ",
    },
    {
      imageSrc: "/images/construction-2.jpg",
      title: "Căn hộ Splendora",
      location: "Hà Nội",
      bedroomCount: "3",
      area: "110m2",
      bathroomCount: "3",
      apartmentType: "Căn hộ 3 phòng ngủ",
    },
    {
      imageSrc: "/images/construction-3.jpg",
      title: "Diamond Crown Hai Phong",
      location: "Hải Phòng",
      bedroomCount: "3",
      area: "116m2",
      bathroomCount: "3",
      apartmentType: "Căn hộ 3 phòng ngủ",
    },
  ];

  const MobileView = () => {
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
            <div key={index} className="flex-0 flex-shrink-0 w-full mt-[35px]">
              <div className="w-full flex-row pt-[20px] pb-[25px] px-[20px] bg-[#f8f9fa]">
                <div className="relative aspect-w-8 aspect-h-7 overflow-hidden rounded-[13px]">
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                </div>

                <p className="xl:text-[20px] lg:text-[18px] font-bold text-center mt-[26px]">
                  {item.title}
                </p>
                <p className="text-center text-[16px] mt-[7px] mb-[15px]">
                  {item.location}
                </p>
                <hr className="w-[90%] mx-auto h-[1px] border-[#1a1a1a]" />
                <div className="mx-auto justify-between items-center text-center flex mt-[20px]">
                  <div className="flex items-center text-center gap-[4px]">
                    <img
                      src="/images/phong-ngu.png"
                      alt=""
                      className="w-[25px] h-[23px]"
                    />
                    <p className="text-[13px] text-center">
                      {item.bedroomCount}
                    </p>
                  </div>
                  <div className="flex items-center text-center gap-[4px]">
                    <img
                      src="/images/dien-tich.png"
                      alt=""
                      className="w-[25px] h-[23px]"
                    />
                    <p className="text-[13px] text-center">{item.area}</p>
                  </div>
                  <div className="flex items-center text-center gap-[4px]">
                    <img
                      src="/images/phong-tam.png"
                      alt=""
                      className="w-[25px] h-[23px]"
                    />
                    <p className="text-[13px] text-center">
                      {item.bathroomCount}
                    </p>
                  </div>
                  <div>
                    <hr className="w-[1px] h-[25px] border border-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-[13px] text-center">
                      {item.apartmentType}
                    </p>
                  </div>
                </div>

                <div className="grid gap-[15px] grid-cols-2 items-center mx-auto justify-center mt-[20px]">
                  <div className="flex h-full">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                      <svg
                        className="w-4 h-4 fill-orange-600 absolute"
                        viewBox="1 2 18 18"
                      >
                        <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                      </svg>
                    </div>
                    <span className="text-[13px]">Giải Pháp Điều Khiển</span>
                  </div>
                  <div className="flex h-full">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                      <svg
                        className="w-4 h-4 fill-orange-600 absolute"
                        viewBox="1 2 18 18"
                      >
                        <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                      </svg>
                    </div>
                    <span className="text-[13px]">Giải Pháp An Ninh</span>
                  </div>
                  <div className="flex h-full">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                      <svg
                        className="w-4 h-4 fill-orange-600 absolute"
                        viewBox="1 2 18 18"
                      >
                        <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                      </svg>
                    </div>
                    <span className="text-[13px]">Giải Pháp Chiếu Sáng</span>
                  </div>
                  <div className="flex">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                      <svg
                        className="w-4 h-4 fill-orange-600 absolute"
                        viewBox="1 2 18 18"
                      >
                        <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                      </svg>
                    </div>
                    <span className="text-[13px]">Giải Pháp Truyền hình</span>
                  </div>
                </div>
                <button className="flex justify-center mx-auto items-center mt-[30px] w-[126px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
                  <span className="text-[15px] font-bold text-center">
                    Xem ngay
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full h-[28px] mt-[20px]">
          {[1, 2, 3].map((gridIndex) => (
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
          {[0, 1, 2].map((index) => (
            <div className="flex-0 flex-shrink-0 w-full mt-[65px]" key={index}>
              <div className="flex gap-[25px]">
                {data.slice(index, index + 2).map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="w-1/2 flex-row pt-[20px] pb-[25px] px-[20px] bg-[#f8f9fa] rounded-[26px]"
                  >
                    <div className="relative aspect-w-8 aspect-h-7 overflow-hidden rounded-[13px]">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="absolute w-full h-full object-cover"
                      />
                    </div>

                    <p className="xl:text-[20px] lg:text-[18px] font-bold text-center mt-[26px]">
                      {item.title}
                    </p>
                    <p className="text-center text-[16px] mt-[7px] mb-[15px]">
                      {item.location}
                    </p>
                    <hr className="w-[90%] mx-auto h-[1px] border-[#1a1a1a]" />
                    <div className="mx-auto justify-between items-center text-center flex mt-[20px]">
                      <div className="flex items-center text-center gap-[5px]">
                        <img
                          src="/images/phong-ngu.png"
                          alt=""
                          className="w-[25px] h-[23px]"
                        />
                        <p className="text-[13px] text-center">
                          {item.bedroomCount}
                        </p>
                      </div>
                      <div className="flex items-center text-center gap-[5px]">
                        <img
                          src="/images/dien-tich.png"
                          alt=""
                          className="w-[25px] h-[23px]"
                        />
                        <p className="text-[13px] text-center">{item.area}</p>
                      </div>
                      <div className="flex items-center text-center gap-[5px]">
                        <img
                          src="/images/phong-tam.png"
                          alt=""
                          className="w-[25px] h-[23px]"
                        />
                        <p className="text-[13px] text-center">
                          {item.bathroomCount}
                        </p>
                      </div>
                      <div>
                        <hr className="w-[1px] h-[25px] border border-[#1a1a1a]" />
                      </div>
                      <div>
                        <p className="text-[13px] text-center">
                          {item.apartmentType}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-[15px] grid-cols-2 items-center mx-auto justify-center mt-[20px]">
                      <div className="flex h-full">
                        <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                          <svg
                            className="w-4 h-4 fill-orange-600 absolute"
                            viewBox="1 2 18 18"
                          >
                            <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                          </svg>
                        </div>
                        <span className="text-[13px]">
                          Giải Pháp Điều Khiển
                        </span>
                      </div>
                      <div className="flex h-full">
                        <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                          <svg
                            className="w-4 h-4 fill-orange-600 absolute"
                            viewBox="1 2 18 18"
                          >
                            <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                          </svg>
                        </div>
                        <span className="text-[13px]">Giải Pháp An Ninh</span>
                      </div>
                      <div className="flex h-full">
                        <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                          <svg
                            className="w-4 h-4 fill-orange-600 absolute"
                            viewBox="1 2 18 18"
                          >
                            <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                          </svg>
                        </div>
                        <span className="text-[13px]">
                          Giải Pháp Chiếu Sáng
                        </span>
                      </div>
                      <div className="flex">
                        <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                          <svg
                            className="w-4 h-4 fill-orange-600 absolute"
                            viewBox="1 2 18 18"
                          >
                            <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                          </svg>
                        </div>
                        <span className="text-[13px]">
                          Giải Pháp Truyền hình
                        </span>
                      </div>
                    </div>

                    <button className="flex justify-center mx-auto items-center mt-[30px] w-[126px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
                      <span className="text-[15px] font-bold text-center">
                        Xem ngay
                      </span>
                    </button>
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
      <div className="hidden lg:grid lg:grid-cols-3 gap-[25px] mt-[65px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-row pt-[20px] pb-[25px] px-[20px] xxxxl:pt-[25px] xxxxl:pb-[30px] xxxxl:px-[25px] justify-center items-center bg-[#f8f9fa] rounded-[26px]"
          >
            <div className="relative aspect-w-9 aspect-h-8 overflow-hidden rounded-[13px]">
              <img
                src={item.imageSrc}
                alt=""
                className="absolute w-full h-full object-cover"
              />
            </div>

            <p className="xl:text-[20px] lg:text-[18px] font-bold text-center mt-[26px]">
              {item.title}
            </p>
            <p className="text-center text-[16px] mt-[7px] mb-[15px]">
              {item.location}
            </p>
            <hr className="w-[90%] mx-auto h-[1px] border-[#1a1a1a]" />
            <div className="mx-auto justify-between items-center text-center flex mt-[20px]">
              <div className="flex items-center text-center gap-[5px]">
                <img
                  src="/images/phong-ngu.png"
                  alt=""
                  className="w-[25px] h-[23px]"
                />
                <p className="text-[13px] text-center">{item.bedroomCount}</p>
              </div>
              <div className="flex items-center text-center gap-[5px]">
                <img
                  src="/images/dien-tich.png"
                  alt=""
                  className="w-[25px] h-[23px]"
                />
                <p className="text-[13px] text-center">{item.area}</p>
              </div>
              <div className="flex items-center text-center gap-[5px]">
                <img
                  src="/images/phong-tam.png"
                  alt=""
                  className="w-[25px] h-[23px]"
                />
                <p className="text-[13px] text-center">{item.bathroomCount}</p>
              </div>
              <div>
                <hr className="w-[1px] h-[25px] border border-[#1a1a1a]" />
              </div>
              <div>
                <p className="text-[13px] text-center">{item.apartmentType}</p>
              </div>
            </div>

            <div className="grid gap-[15px] grid-cols-2 items-center mx-auto justify-center mt-[20px]">
              <div className="flex h-full">
                <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                  <svg
                    className="w-4 h-4 fill-orange-600 absolute"
                    viewBox="1 2 18 18"
                  >
                    <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                  </svg>
                </div>
                <span className="text-[13px]">Giải Pháp Điều Khiển</span>
              </div>
              <div className="flex h-full">
                <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                  <svg
                    className="w-4 h-4 fill-orange-600 absolute"
                    viewBox="1 2 18 18"
                  >
                    <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                  </svg>
                </div>
                <span className="text-[13px]">Giải Pháp An Ninh</span>
              </div>
              <div className="flex h-full">
                <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                  <svg
                    className="w-4 h-4 fill-orange-600 absolute"
                    viewBox="1 2 18 18"
                  >
                    <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                  </svg>
                </div>
                <span className="text-[13px]">Giải Pháp Chiếu Sáng</span>
              </div>
              <div className="flex">
                <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]">
                  <svg
                    className="w-4 h-4 fill-orange-600 absolute"
                    viewBox="1 2 18 18"
                  >
                    <path d="M18.95 4.35a.6.6 0 0 0-.85 0l-11 11-4.35-4.35a.6.6 0 0 0-.85.85l5 5a.6.6 0 0 0 .85 0L18.95 5.2a.6.6 0 0 0 0-.85z" />
                  </svg>
                </div>
                <span className="text-[13px]">Giải Pháp Truyền hình</span>
              </div>
            </div>
            <button className="flex justify-center mx-auto items-center mt-[30px] w-[126px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
              <span className="text-[15px] font-bold text-center">
                Xem ngay
              </span>
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex-col items-center justify-center px-[20px] sm:px-[25px] xl:max-w-[1150px] 3xl:max-w-[1300px] mt-[100px] lg:mt-[314px] lg:mx-auto">
      <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[20px] sm:mb-[30px]">
        Những công trình tiêu biểu
      </h2>
      <p className="max-w-[850px] mx-auto text-[#1a1a1a] text-[14px] lg:text-[18px] text-center">
        Đồng hành cùng chủ đầu tư từ khâu tư vấn đến hoàn thiện, đội ngũ kĩ sư
        đã lắp đặt hệ thống thiết bị nhà thông minh FPT Smart Home như ( đèn,
        công tắc cảm ứng, rèm thông minh, cảm biến...) để giúp gia chủ điều
        khiển & quản lý ngôi nhà từ xa bằng giọng nói tiếng Việt hoặc
        smartphone.
      </p>
      <button className="flex justify-center mx-auto items-center mt-[40px] w-[126px] md:w-[140px] lg:w-[160px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
        <span className="text-[15px] font-bold text-center">Xem ngay</span>
      </button>
      <MobileView />
      <TabletView />
      <DesktopView />
    </div>
  );
}

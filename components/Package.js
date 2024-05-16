export default function Package() {
  return (
    <div className="bg-[#e5e5e5] mt-[112px] lg:mt-[136px]">
      <div className="w-full xl:max-w-[1150px] 2xl:max-w-[1300px] lg:pt-[75px] lg:pb-[125px] pt-[48px] pb-[64px] mx-auto px-[20px] sm:px-[25px]">
        <div className="items-center justify-center">
          <p className="text-[20px] sm:text-[24px] md:text-[35px] xl:text-[39px] 2xl:text-[45px] font-bold text-[#3c4043] text-center mx-auto mb-[18px] sm:mb-[25px] lg:mb-[35px]">
            Gói thiết bị Smart Home dành riêng cho gia đình bạn
          </p>
          <p className="text-center text-[#3c4043] text-[15px] sm:text-[18px] xl:text-[20px] mb-[34px] sm:mb-[60px] lg:mb-[95px] lg:mx-[50px]">
            Các gói sản phẩm tích hợp đầy đủ các thiết bị thông minh cần thiết
            trong mỗi gia đình Việt, giúp những trải nghiệm được trở nên trọn
            vẹn nhất
          </p>
        </div>
        <div className="min-[860px]:w-[810px] lg:w-full min-[860px]:mx-auto lg:flex-col min-[600px]:flex grid grid-cols-1 gap-5 items-center justify-center sm:gap-[25px] lg:gap-[40px]">
          <div className="min-[600px]:w-1/2 items-center justify-center mx-auto lg:flex lg:w-full">
            <div className="hidden lg:block lg:w-1/2">
              <img
                src="/images/package-1.png"
                alt=""
                className="w-full h-[468px]"
              />
            </div>
            <div className="w-full max-[600px]:max-w-[400px] lg:w-1/2 bg-[#fff] rounded-[13px]">
              <div className="pt-[25px] pb-[30px] px-[20px] lg:py-[80px] lg:px-[35px]">
                <p className="text-[16px] lg:text-[18px] text-center text-[#1a1a1a] mb-[2px]">
                  Gói giải pháp
                </p>
                <h3 className="text-[24px] lg:text-[35px] font-bold text-center leading-none">
                  Căn hộ 2 phòng ngủ
                </h3>
                <hr className="h-[1px] border-[#1a1a1a] my-[25px] lg:my-[30px]" />
                <div className="grid gap-2 md:gap-x-[25px] md:gap-y-[15px] grid-cols-2 items-center justify-center lg:pl-[40px] ">
                  <div className="flex">
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
                  <div className="flex items-center">
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
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]"></div>
                    <span className="text-[13px]">Giải Pháp Chiếu Sáng</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-black rounded flex items-center justify-center mr-[5px]"></div>
                    <span className="text-[13px]">Giải Pháp Truyền hình</span>
                  </div>
                </div>
                <hr className="h-[1px] border-[#1a1a1a] my-[25px] lg:my-[30px]" />
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-0">
                  <div className="lg:w-[60%]">
                    <p className="text-[#333] text-[16px] text-center leading-none mb-[6px]">
                      Giá gói sản phẩm từ
                    </p>
                    <p className="text-[24px] lg:text-[28px] text-center font-bold text-[#333] leading-none mb-[6px]">
                      19.000.000 VNĐ
                    </p>
                    <p className="text-[12px] text-center text-[#333] leading-none">
                      (Chưa có thuế VAT và phí thi công)
                    </p>
                  </div>
                  <div className="lg:w-[40%] my-auto">
                    <button className="px-[20px] flex justify-center mx-auto items-center h-[44px] rounded-[5px] border-solid border-[1.6px] border-[#1a1a1a] text-[#3c4043] bg-[#fff] hover:bg-[#3c4043] hover:text-[#fff]">
                      <span className="cursor-pointer text-[15px] xl:text-[17px] font-bold text-center">
                        Chọn gói này
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[600px]:w-1/2 items-center justify-center mx-auto lg:flex lg:flex-row-reverse lg:w-full">
            <div className="hidden lg:block lg:w-1/2">
              <img
                src="/images/package-2.png"
                alt=""
                className="w-full h-[468px]"
              />
            </div>
            <div className="w-full max-[600px]:max-w-[400px] lg:w-1/2 bg-[#fff] rounded-[13px]">
              <div className="pt-[25px] pb-[30px] px-[20px] lg:py-[80px] lg:px-[35px]">
                <p className="text-[16px] lg:text-[18px] text-center text-[#1a1a1a] mb-[2px]">
                  Gói giải pháp
                </p>
                <h3 className="text-[24px] lg:text-[35px] font-bold text-center leading-none">
                  Căn hộ 3 phòng ngủ
                </h3>
                <hr className="h-[1px] border-[#1a1a1a] my-[25px] lg:my-[30px]" />
                <div className="grid gap-2 md:gap-x-[25px] md:gap-y-[15px] grid-cols-2 items-center justify-center lg:pl-[40px] ">
                  <div className="flex">
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
                  <div className="flex items-center">
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
                  <div className="flex items-center">
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
                  <div className="flex items-center">
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
                <hr className="h-[1px] border-[#1a1a1a] my-[25px] lg:my-[30px]" />
                <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-0">
                  <div className="lg:w-[60%]">
                    <p className="text-[#333] text-[16px] text-center leading-none mb-[6px]">
                      Giá gói sản phẩm từ
                    </p>
                    <p className="text-[24px] lg:text-[28px] text-center font-bold text-[#333] leading-none mb-[6px]">
                      26.590.000 VNĐ
                    </p>
                    <p className="text-[12px] text-center text-[#333] leading-none">
                      (Chưa có thuế VAT và phí thi công)
                    </p>
                  </div>
                  <div className="lg:w-[40%] my-auto">
                    <button className="px-[20px] flex justify-center mx-auto items-center h-[44px] rounded-[5px] border-solid border-[1.6px] border-[#1a1a1a] text-[#3c4043] bg-[#fff] hover:bg-[#3c4043] hover:text-[#fff]">
                      <span className="cursor-pointer text-[15px] xl:text-[17px] font-bold text-center">
                        Chọn gói này
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

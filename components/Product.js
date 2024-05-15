export default function Product() {
  return (
    <div className="w-full min-[900px]:max-w-[900px] lg:max-w-full xl:max-w-[1150px] 2xl:max-w-[1300px] px-[20px] md:px-[25px] pt-[40px] sm:pt-[80px] md:pt-[120px] lg:pt-[150px] mx-auto">
      <h1 className="text-center font-bold text-[#9d9999] mx-[-5px] mb-[5px] sm:mb-[10px] sm:mx-[0px] lg:mx-[15px] text-[14px] sm:text-[22px] lg:text-[22px] leading-none">
        FPT Smart Home - Thương hiệu nhà thông minh từ FPT
      </h1>
      <h2 className="text-center font-bold text-[#3c4043] mb-[20px] sm:mb-[30px] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xl:text-[45px] leading-none">
        Sản Phẩm Nổi Bật
      </h2>
      <div className="mx-auto mt-[30px] flex flex-col-reverse sm:flex-row sm:mt-[60px]">
        <div className="flex basis-[40%] rounded-[8px] self-stretch items-center sm:pl-[20px] pr-[30px] lg:px-[30px] xl:px-[50px]">
          <div>
            <p className="mb-[10px] sm:mb-[15px] text-[#3c4043] font-bold text-[18px] sm:text-[22px] lg:text-[28px] sm:leading-5">
              Ổ Cắm Thông Minh
            </p>
            <p className="mb-[10px] sm:mb-[15px] text-[#3c4043] text-[15px] sm:text-[17px] leading-5">
              Ổ cắm thông minh (phích cắm thông minh) FPT Smart Home được tích
              hợp điều khiển từ xa, hẹn giờ tắt bật, điều khiển giọng nói qua
              điện thoại tiện lợi!
            </p>
            <p className="font-bold text-[#3c4043] text-[22px] sm:text-[25px] leading-tight">
              590.000 VNĐ
            </p>
            <p className="text-[#9d9999] text-[13px] sm:text-[15px] leading-none">
              (Chưa bao gồm VAT)
            </p>
            <div className="justify-start mt-[20px]">
              <button className="items-center relative z-0 justify-center w-[140px] sm:w-[180px] h-[40px] inline-flex rounded-[5px] border-solid border-[1.6px] border-[#3c4043] bg-[#3c4043] text-[#fff] hover:text-[#3c4043] hover:bg-[#fff]">
                <span className="cursor-pointer text-[14px] md:text-[15px] font-bold text-center">
                  Tìm Hiểu Ngay
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:basis-[60%] flex h-[200px] sm:h-[330px] md:h-[300px] lg:h-[400px] xl:h-[430px] 3xl:h-[470px] relative rounded-[10px] mb-[20px] sm:mb-0">
          <img
            src="/images/product.png"
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

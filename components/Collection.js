export default function Collection() {
  return (
    <div className="w-full xl:max-w-[1150px] 2xl:max-w-[1300px] px-[20px] sm:px-[25px] mt-[100px] md:mt-[120px] lg:mt-[160px] mx-auto">
      <h2 className="text-[#3c4043] text-[20px] sm:text-[24px] md:text-[35px] lg:text-[40px] xxl:text-[45px] font-bold text-center mb-[20px] sm:mb-[30px]">
        Bộ sưu tập công tắc
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] mt-[35px] md:mt-[60px] lg:mt-[80px] mx-auto">
        <div className="relative flex justify-center items-center">
          <img
            src="/images/collection-1.png"
            alt=""
            className="w-full h-full"
          />
          <button className="bottom-[30px] md:bottom-[40px] absolute w-[126px] md:w-[140px] lg:w-[160px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#e95b0b]">
            <span className="text-[15px] font-bold text-center">Xem ngay</span>
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src="/images/collection-2.png"
            alt=""
            className="w-full h-full"
          />
          <button className="bottom-[30px] md:bottom-[40px] absolute w-[126px] md:w-[140px] lg:w-[160px] h-[40px] rounded-[5px] border-solid border-[1.6px] border-[#000] text-[#1a1a1a] hover:bg-[#3c4043] hover:text-[#fff]">
            <span className="text-[15px] font-bold text-center">Xem ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
}

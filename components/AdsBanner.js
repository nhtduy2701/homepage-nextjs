export default function AdsBanner() {
  return (
    <div className="3xl:mt-[120px] 2xl:mt-[100px] lg:mt-[80px] mt-[56px]">
      <img
        src="/images/ads-banner.png"
        alt=""
        className="hidden md:block w-full h-full object-contain"
      />
      <img
        src="/images/ads-banner-mobile.jpg"
        alt=""
        className="w-full h-full block md:hidden object-contain"
      />
    </div>
  );
}

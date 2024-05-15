export default function AdsBanner() {
  return (
    <div className="lg:mt-[120px] mt-[56px]">
      <img
        src="/images/ads-banner.png"
        className="hidden md:block w-full h-full object-contain"
      />
      <img
        src="/images/ads-banner-mobile.jpg"
        className="w-full h-full block md:hidden object-contain"
      />
    </div>
  );
}

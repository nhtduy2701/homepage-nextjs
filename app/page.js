import AdsBanner from "@/components/AdsBanner";
import Banner from "@/components/Banner";
import Collection from "@/components/Collection";
import Construction from "@/components/Construction";
import Feedback from "@/components/Feedback";
import Knowledge from "@/components/Knowledge";
import ApartmentType from "@/components/ApartmentType";
import Product from "@/components/Product";
import Question from "@/components/Question";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main>
      <Banner />
      <Product />
      <Collection />
      <Construction />
      <ApartmentType />
      <AdsBanner />
      <Knowledge />
      <Video />
      <Feedback />
      <Question />
    </main>
  );
}

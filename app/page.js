import AdsBanner from "@/components/AdsBanner";
import Banner from "@/components/Banner";
import Collection from "@/components/Collection";
import Construction from "@/components/Construction";
import Feedback from "@/components/Feedback";
import Knowledge from "@/components/Knowledge";
import Package from "@/components/Package";
import Product from "@/components/Product";
import Question from "@/components/Question";

export default function Home() {
  return (
    <main>
      <Banner />
      <Product />
      <Collection />
      <Construction />
      <Package />
      <AdsBanner />
      <Knowledge />
      <Feedback />
      <Question />
    </main>
  );
}

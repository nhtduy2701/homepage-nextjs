import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/public/styles/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

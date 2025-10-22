import Header from "@/components/Header";
import "../styles/output.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Villagerpedia",
  description: "Enciclopédia de villagers do Animal Crossingqual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className="bg-darkVanilla text-liberty min-h-screen font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

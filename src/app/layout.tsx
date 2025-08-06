import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Frontend Project",
  description: "Created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header /> {/* Хедер с логотипом по ссылке */}
        <main className="flex-grow container mx-auto px-5 py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

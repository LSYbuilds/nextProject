import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Contents from "@/components/home/Contents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Contents />
    </main>
  );
}

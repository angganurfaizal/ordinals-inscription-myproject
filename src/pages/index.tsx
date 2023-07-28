import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Header
      text1={"Inscribe your"}
      text2={"digital files securely"}
      text3={"on Bitcoin"}
    />
  );
}

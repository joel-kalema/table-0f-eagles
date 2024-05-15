import Image from "next/image";
import HomePage from "./(root)/home/page";
import Nav from "@/components/Navbar/navbar";
import Speakers from "./(root)/speakers/page";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HomePage />
      <Speakers />
    </main>
  );
}

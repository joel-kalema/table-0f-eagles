import Image from "next/image";
import HomePage from "./(root)/home/page";
import Nav from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <main className="home">
      <Nav />
      <HomePage />
    </main>
  );
}

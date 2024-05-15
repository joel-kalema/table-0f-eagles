import HomePage from "./(root)/home/page";
import Nav from "@/components/Navbar/navbar";
import Speakers from "./(root)/home/_componets/speakers/page";
import Location from "./(root)/home/_componets/map";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HomePage />
      <Speakers />
      <Location />
    </main>
  );
}

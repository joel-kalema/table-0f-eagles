import { Prompt } from "next/font/google";
import TextAbout from "./_componets/text";


const prompt = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

export default function HomePage() {
  return (
    <div className="flex justify-center items-center px-32">
        <div>
            <div className="mt-[10rem] text-center">
                <h1 className={`${prompt.className} text-6xl font-extrabold`}>TABLE OF EAGLES</h1>
                <h2 className="mt-6 ">Nov 29 - Dec 01</h2>
            </div>

            <TextAbout />
        </div>
      
    </div>
  );
}
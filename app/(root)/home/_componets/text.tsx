import { Prompt } from "next/font/google";


const prompt = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

export default function TextAbout() {
    return (
        <div className="w-4/6 float-right mt-[20rem]">
            <h1 className="font-extrabold text-2xl mb-10">Welcome to the Table Of Eagles</h1>
            <div>
                <p><span className="text-[#d3b975] font-extrabold">TABLE OF EAGLES</span> is a conference carrying a vision of the Preparation of the Bride of Christ for the soon return of our Lord Jesus (The Rapture). It seeks to build a Prophetic Nation of believers through a conference once every year focusing on:</p>
                <ul className="list-disc ml-6 mt-4">
                    <li>Encounters with Jesus</li>
                    <li>Enlightment(Revelations of The Mind of God through the word)</li>
                    <li>A strong Move of the Prophetic Anointing to Instruct, Guide, & Orient & intercede for the church, the city, & the nation</li>
                    <li>A Strong Understanding of the Apostolic end time mandate of the Church in the Nations (Spiritually & in Marketplace)</li>
                    <li>Equiping & Demonstrating the Supernatural Power of God</li>
                </ul>
            </div>
            <div className="box w-2/6 mt-10 flex justify-center">
                <p>REGISTER NOW</p>
            </div>
        </div>
    );
}
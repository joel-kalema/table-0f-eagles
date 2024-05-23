import Link from "next/link";

export default function Footer() {

    return (
        <div className="text-center py-10 text-[#9b9a96] bg-[#191917]">
            <div className="flex justify-center">
                <p className="mr-2">CONTACT US:</p>
                <Link href="mailto:Tableofeagles01@gmail.com">Tableofeagles01@gmail.com</Link>
            </div>
            <p className="text-xs">© All right reserved</p>
        </div>
    );
}
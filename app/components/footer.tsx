import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="h-14 flex gap-10 divide-x-2 divide-[#1E2D3D] border-t-2 border-[#1E2D3D] items-stretch px-10">
            <div className="self-center">
                <p>find me in:</p>
            </div>
            <div id="social-media" className="grow w-fit flex divide-x-2 divide-[#1E2D3D] border-x-2 border-[#1E2D3D]">
                <Link href={'/https://www.linkedin.com/in/nicolas-lira-4a704b21b/'} className="h-full w-fit px-4 flex items-center">
                    <Image src={'/linkedin.svg'} width={25} height={25} alt="Linkedin"></Image>
                </Link>
                <Link href={'/'} className="h-full w-fit px-4 flex items-center">
                    <Image src={'/linkedin.svg'} width={25} height={25} alt="Linkedin"></Image>
                </Link>
                <Link href={'/'} className="h-full w-fit px-4 flex items-center">
                    <Image src={'/linkedin.svg'} width={25} height={25} alt="Linkedin"></Image>
                </Link>
            </div>
            <div id="github" className="flex-none md:flex items-center gap-4 px-4 hidden">
                @NicolasDSLira 
                <Image src={'/github.svg'} width={25} height={25} alt="Github"></Image>
            </div>
        </footer>
    )
}
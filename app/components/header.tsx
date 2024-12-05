'use client'

import { usePathname } from "next/navigation"
import { LetterFx } from "./LetterFx"
import Link from "next/link"

export default function Header(){
    const patch = usePathname()
    return(
        <header className="border-b-[#1E2D3D] border-b-2 w-full h-14 flex items-center justify-center px-10 ">
            <div className="flex-none hidden md:block">
                <LetterFx speed="medium" trigger="instant" charset={['0', '1']} className="text-[#607B96]">
                    Nicolas Lira
                </LetterFx>
            </div>
            <div className="grow md:mx-24 mx-10 flex h-full divide-x-2 divide-[#1E2D3D] ">
                <Link href={"/"} className={`${patch == '/' ? '':'text-[#607B96]'} h-full flex items-center px-6 `}>__Hello</Link>
                <Link href={"/About"} className={`${!patch.startsWith('/About') && 'text-[#607B96]'} h-full flex items-center px-6 `} >__About</Link>
                <Link href={"/Projects"} className={patch == '/Projects' ? "h-full flex items-center px-6" : "self-end px-6 py-4 text-[#607B96]"}>__Projects</Link>
            </div>
            <div className="flex-none border-s-2 h-full md:flex hidden items-center px-6 border-[#1E2D3D]">
                <Link href={'https://wa.me/5511986019328'} className="text-[#607B96]">__Contact-me</Link>
            </div>
        </header>
    )
}
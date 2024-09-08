import Base from "@/app/About/base";
import Image from "next/image";
import TechList from "./TechList";
export default function Courses(){
    return(
        <Base>
        <div className="w-fit h-10 border-e-2 border-[#1E2D3D] px-6 flex items-center gap-4">
                <p>Tech-stack.json</p>
                <Image src={'/icones/close.svg'} width={20} height={20} alt="Close"/>
            </div>
            <div className="w-full h-[calc(100dvh-9.5rem)] space-y-4 overflow-y-scroll overscroll-contain p-6">
                <div>
                    <h1 className="text-4xl text-[#43D9AD]">My tech Stacks</h1>
                </div>
                <TechList />     
            </div>
        </Base>
    )
}
import Base from "../base";
import Image from "next/image";
import ListEducation from "./education";
const Education = () => {
    return(
        <Base>
            <div className="w-fit h-10 border-e-2 border-[#1E2D3D] px-6 flex items-center gap-4">
                <p>Education.b</p>
                <Image src={'/icones/close.svg'} width={20} height={20} alt="Close"/>
            </div>
            <div className="w-full h-[calc(100dvh-9.5rem)] space-y-4 overflow-y-scroll overscroll-contain p-6">
                <div>
                    <h1 className="text-4xl text-[#3A49A4]">Education</h1>
                </div>
                <div className="flex flex-wrap flex-row gap-10 ">
                    <ListEducation />
                </div>
            </div>
        </Base>
    )
}

export default Education;
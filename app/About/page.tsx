'use client'
import Base from "./base";
import Image from "next/image";

export default function About(){
    return(
        <Base>
            <div className="w-fit h-10 border-e-2 border-[#1E2D3D] px-6 flex items-center gap-4">
                <p>README.md</p>
                <Image src={'/icones/close.svg'} width={20} height={20} alt="Close"/>
            </div>
            <div className="w-full h-[calc(100dvh-9.5rem)] space-y-4 overflow-y-scroll overscroll-contain p-6">
                <h1 className="text-4xl text-[#5565E8]">About Me</h1>
                <p>Hi! I’m Nicolas Lira, fullstack developer with a love for creating web solutions that combine innovation and efficiency. With a solid academic background in System Analysis and Development, my experience in Project development allows me to transform ideas into robust and personalized digital products.</p>
                <p>Working as a freelancer, I developed the website for the Nossa Senhora Aparecida Promotional Service institution (servproaparecida.org.br) using the Laravel framework, TailwindCSS for responsive design, and MySQL for data management. As a developer at Raiztec, I was responsible for updating the company's institutional website, as well as maintaining and correcting BUG's, in addition to developing Landing pages for advertising with Google ADS to attract new customers.</p>
                <p>Still at Raiztec, I was responsible for the complete development of the institutional website of the company Coco Premium (cocopremium.com.br), where I used Laravel, TailwindCSS, and MySQL. This project also included the creation of a REST API for secondary functionalities and the use of Git for code versioning, in addition to developing the online store layout with Twig.</p>
                <p>My professional approach is focused on offering solutions that meet each client's specific needs, always keeping a close eye on user experience and code quality. I am constantly looking for new learning and growth opportunities, actively participating in technology events and expanding my knowledge in the development area. With a professional and collaborative attitude, I am ready to take on new challenges and contribute to projects that require technical excellence and creativity.</p>
            </div>
        </Base>
    )
}
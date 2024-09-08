'use client'
import { useState, ReactNode, act } from 'react';
import Image from 'next/image';

interface AccordionProps {
  title: string;
  active: boolean;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, active }) => {

  const [isOpen, setIsOpen] = useState(active ? true : false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="mb-3 w-full">
      <button className="w-full border-b-2 border-[#1E2D3D] text-start p-3 cursor-pointer flex items-center" onClick={toggleAccordion}>
        <span className={` transition-all ${isOpen && 'rotate-90'} mx-2`}>
            <Image src={'/icones/arrow_title.svg'} width={10} height={10} alt='Arrow'></Image>
        </span>
        {title}
      </button>
      {isOpen &&  (
        <div className=" w-full">
          {children}
        </div>
      )}

    </div>
  );
};

export default Accordion;

import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const TechItems = ({ title, children }: CardProps) => {
  return (
    <div className="group rotate-y-360 relative p-6 w-fit h-fit rounded-lg shadow-lg cursor-pointer">
      {/* Container que será rotacionado */}
      <div className="inset-0 transition-transform duration-700 ">
        {/* Conteúdo dinâmico (children) */}
        {children}
      </div>

      {/* Título que aparece sobre a imagem ao passar o mouse */}
      <div className="absolute inset-0 bg-[#011221] bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default TechItems;
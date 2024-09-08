'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const contentData = [
  {
    id: 0, 
    title: 'portfolio', 
    techs: ['next', 'tawindcss', 'css', 'javascript', 'html', 'react', 'git', 'typescript'], 
    url: 'https://suporte.raiztec.com.br'
  },
  { 
    id: 1, 
    title: 'Coco Premium', 
    techs: ['laravel', 'tawindcss', 'jquery', 'css', 'figma', 'git', 'html', 'javascript', 'linux', 'mysql', 'php', 'ssh'], 
    url: 'https://cocopremium.com.br' 
  },
  { 
    id: 2, 
    title: 'Raiztec', 
    techs: ['javascript', 'html', 'css', 'mysql', 'php', 'jquery'],  
    url: 'https://raiztec.com.br' 
  },
  {
    id: 3, 
    title: 'Serviço Promocional Nossa Senhora Aparecida', 
    techs: ['laravel', 'tawindcss','css', 'figma', 'html', 'javascript', 'mysql', 'php'], 
    url: 'http://servproaparecida.org.br'
  },
  {id: 4, 
    title: 'Landing page Raiztec - CFTV',  
    techs: ['laravel','jquery', 'css', 'figma', 'javascript', 'php'], 
    url: 'https://cftv.raiztec.com.br'
  },
  {
    id: 5, 
    title: 'Landing page Raiztec - Suporte', 
    techs: ['laravel', 'tawindcss', 'css', 'figma', 'javascript', 'html'], 
    url: 'https://suporte.raiztec.com.br'
  }
  
]

const HomePage: React.FC = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [filteredContent, setFilteredContent] = useState(contentData)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target

    setSelectedTechs((prev) => checked ? [...prev, value] : prev.filter((tech) => tech !== value))}

  useEffect(() => {
    if (selectedTechs.length === 0) {
      setFilteredContent(contentData)
    } else {
      const filtered = contentData.filter((item) =>
        item.techs.some((tech) => selectedTechs.includes(tech))
      );
      setFilteredContent(filtered)
    }
  }, [selectedTechs]);

  // Componente Checkbox
  const Checkbox = ({ imagem, texto, value }: Readonly<{ imagem: string; texto: string; value: string }>) => {
    const isChecked = selectedTechs.includes(value)

    return (
      <div>
        <label className='group flex items-center justify-start gap-4 hover:cursor-pointer'>
          <input
            type="checkbox"
            className='hidden'
            value={value}
            checked={isChecked}
            onChange={handleCheckboxChange} // Usa a função global para atualizar o estado
          />
          <span className={`${isChecked ? 'bg-[#607B96]' : ''} text-white w-6 h-6 border-2 border-[#607B96] rounded-md hover:ring-1 hover:cursor-pointer text-background text-center flex justify-center items-center group-hover:ring-1 group-hover:ring-[#607B96]`}>
            {isChecked ? '✓' : ''}
          </span>
          <div className='flex gap-2 justify-center items-center text-[#607B96]'>
            <Image src={`/tech/${imagem}.svg`} width={25} height={25} alt={imagem} />
            <p className='text-sm '>{texto}</p>
          </div>
        </label>
      </div>
    );
  }

  return (
    <div className='flex w-full'>
      <div className='border-e-2 border-[#1E2D3D] py-8 px-6 space-y-4 w-1/5'>
        <h2 className='text-xl font-bold'>Projects</h2>
        <div className='flex flex-col gap-4'>
            <Checkbox imagem="next" texto="NextJS" value="next" />
            <Checkbox imagem="laravel" texto="Laravel v.11" value="laravel" />
            <Checkbox imagem="javascript" texto="JavaScript" value="javascript" />
            <Checkbox imagem="php" texto="PHP" value="php" />
            <Checkbox imagem="tawindcss" texto="tawindcss" value="tawindcss" />
            <Checkbox imagem="react" texto="React" value="react" />
            <Checkbox imagem="jquery" texto="jquery" value="jquery" />
            <Checkbox imagem="mongodb" texto="Mongo DB" value="mongodb" />
            <Checkbox imagem="mysql" texto="MySQL" value="mysql" />
            <Checkbox imagem="typescript" texto="typescript" value="typescript" />
        </div>

      </div>

      <div className='py-8 px-6 w-full overflow-y-scroll space-y-10' >
        <h2 className={` text-2xl font-bold`}>Conteúdo</h2>
        <div className='grid grid-cols-3 gap-10'>
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <div key={item.id} className='flex flex-col gap-4 bg-[#011221] rounded-xl shadow-lg'>
              <Image src={`/projects/${item.id}.png`} width={1200} quality={100} height={50} alt={item.title} className='w-full rounded-t-xl' />
              <div className='p-4 grid gap-4 h-full grid-rows-3'>
                <h3 className='text-lg font-bold'>{item.title}</h3>
                <p className=''>Tecnologias: <span className='text-sm '>{item.techs.join(', ')}</span> </p>
                <Link href={item.url} className='w-fit h-fit bg-[#1C2B3A] p-4 hover:ring-2 hover:ring-[#1C2B3A] transition-all'>View Project</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum conteúdo disponível para o filtro selecionado.</p>
        )}
        </div>
      </div>
    </div>
  )}

export default HomePage;

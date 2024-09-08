import Image from "next/image"


const Universidade = ({name}: Readonly<{name: string}>) => {    
    return(
        <Image className="self-center" src={'/education/'+name+'.png'} width={100} height={0} alt={name} quality={100}/>
    )

}

const Curso = ({curso, nivel}: Readonly<{curso: string, nivel: string}>) => {
    return (
        <div className="col-span-4">
            <h1 className="text-lg"> {curso} </h1>
            <h3 className="text-sm text-[#607B96]"> {nivel} </h3> 
        </div>
    )
}

const LastTime = ({inicio, fim}: Readonly<{inicio: number, fim: number}>) => {
    return(
        <div className="flex-1 self-start flex gap-2 items-end justify-self-end ">
            <h3 className="text-[#FEA55F]">{inicio}</h3>
            <h3>-</h3>
            <h3 className="text-[#C98BDF]">{!fim ? 'Cursed' : fim}</h3> 
        </div>
    )
}

const ElementConstructor = ({faculdade, curso, nivel, inicio, fim}: Readonly<{faculdade: string, curso: string, nivel: string, inicio: number, fim: number}>) => {
    return(
        <div className="grid grid-cols-6  gap-8 w-full p-10 border-2 border-[#1E2D3D] rounded-lg shadow-lg hover:shadow-2xl hover:cursor-pointer hover:ring-2 hover:ring-[#1E2D3D] transition-all inset-0 bg-[#011221]">
            <Universidade name={faculdade} />
            <Curso curso={curso} nivel={nivel} />   
            <LastTime inicio={inicio} fim={fim} />
        </div>
    )
}

const ListEducation = () => {
    return(
        <>  
            <ElementConstructor faculdade="UniFecaf" curso="Business Analytics Data Science, Big Data & A.I" nivel="Post-graduate" inicio={2024} fim={0} />      
            <ElementConstructor faculdade="Unip" curso="systems analysis and development" nivel="Graduate" inicio={2021} fim={2023} />      
            <ElementConstructor faculdade="Etec" curso="systems development" nivel="certificate" inicio={2019} fim={2020} />      
            <ElementConstructor faculdade="Novotec" curso="website development" nivel="certificate" inicio={2018} fim={2018} />      
                    
        </>
    )
}

export default ListEducation
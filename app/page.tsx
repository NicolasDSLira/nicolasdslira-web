import { LetterFx } from "./components/LetterFx";
import Link from "next/link";
import MatrixEffect from "./components/MatrixEffect";
import styles from "@/app/styles.module.css"


export default function Home() {
  
  return (
    <>
      <div className="self-center flex flex-col gap-10 md:mx-20 px-4 ">
        <div className="flex flex-col gap-2">
          <h3>Hi all. I'm </h3>
          <h1 className="text-6xl">
            <LetterFx speed="medium" trigger="instant" charset={['0', '1']}>
              Nicolas Lira
            </LetterFx>
          </h1>
            <h2 className="text-[#4D5BCE] text-2xl">$ Full-stack developer</h2>
        </div>
        <div>
          <p className="text-[#607B96]">// See my main projects in website</p>
          <p className="text-[#607B96]">// Or you can also see them on my Github</p>
          <Link href={"https://github.com/NicolasDSLira"}><span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">githubLink</span> = <span className="text-[#E99287]">“https://github.com/NicolasDSLira”</span></Link>
        </div>

      </div>

      <div className={'flex w-screen h-[calc(100vh)] fixed opacity-10 -z-50'}>
        <MatrixEffect />
      </div>

    </>
      

  );
}


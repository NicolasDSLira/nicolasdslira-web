import { LetterFx } from "./components/LetterFx";
import Link from "next/link";
import MatrixEffect from "./components/MatrixEffect";

export default function Home() {
  return (
    <>
      <div className="self-center flex flex-col gap-10 mx-20">
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

      <div style={styles.container}>
        <div style={styles.monitor}>
          <div style={styles.screen}>
            <MatrixEffect />
          </div>
          <div style={styles.stand}></div>
        </div>
      </div>

    </>
      

  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 'calc(100dvh-7rem)',
  },
  monitor: {
    width: '70%', 
    height: '50%', 
    backgroundColor: '#000',
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  },
  screen: {
    width: '95%',
    height: '80%',
    backgroundColor: '#111', 
    margin: '2.5% auto 0',
    borderRadius: '10px',
    overflow: 'hidden', 
  },
  stand: {
    width: '10%',
    height: '10%',
    backgroundColor: '#666',
    position: 'absolute',
    bottom: '-10%',
    left: '45%',
    borderRadius: '5px',
  },
};
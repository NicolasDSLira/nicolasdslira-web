import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import TechItems from './tech'

const getTechImages = () => {
  const techDir = path.join(process.cwd(), 'public', 'tech');
  const filenames = fs.readdirSync(techDir);
  
  return filenames.map(filename => ({
    title: filename.replace('.svg', ''),
    src: `/tech/${filename}`
  }));
};

const TechList = () => {
  const techImages = getTechImages();

  return (
    <div className="tech-list flex flex-wrap gap-10">
      {techImages.map((tech) => (
        <TechItems key={tech.title} title={tech.title}>
          <Image src={tech.src} alt={tech.title} width={50} height={50} />
        </TechItems>
      ))}
    </div>
  );
};

export default TechList;
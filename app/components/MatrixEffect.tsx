// app/components/MatrixEffect.tsx
"use client";

import { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement!.offsetWidth ; 
      canvas.height = canvas.parentElement!.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const width = canvas.width;
    const height = canvas.height;

    const columns = Math.floor(width / 20);
    const matrix: Array<number> = new Array(columns).fill(1);
    const fontSize = 20;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789あいうえおアイウエオ';

    // Palavras pré-selecionadas
    const words = ['LIRA', 'NEXTJS', 'REACT', 'JAVASCRIPT', 'CSS', 'TAILWINDCSS'];

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Para o efeito de "trilha" mais suave
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0F0'; // Verde estilo "Matrix"
      ctx.font = `${fontSize}px monospace`;

      matrix.forEach((y, index) => {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];

        // Definir aleatoriamente se uma palavra pré-selecionada será exibida
        const shouldDisplayWord = Math.random() > 0.98; // Chance de 2%
        let text = randomChar;

        // Se for escolhida, selecionar uma palavra aleatória
        if (shouldDisplayWord) {
          const randomWord = words[Math.floor(Math.random() * words.length)];
          text = randomWord; // Atribui a palavra selecionada
        }

        const x = index * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > height && Math.random() > 0.975) {
          matrix[index] = 0;
        }

        matrix[index]++;
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval); // Limpar o intervalo ao desmontar o componente
      window.removeEventListener('resize', resizeCanvas); // Remover listener de resize
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default MatrixEffect;

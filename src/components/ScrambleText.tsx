import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay before animation starts (ms)
  scrambleDuration?: number; // How long to show randomizing scramble (ms)
  scrambleSpeedStart?: number; // Initial scramble speed - fast (ms)
  scrambleSpeedEnd?: number; // Final scramble speed - slow (ms)
  pixelBlur?: boolean; // Enable pixelated blur effect during scramble
}

const CHARS = '#%@$&*0123456789?!<>[]{}|/\\~^';

const getRandomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const generateScrambled = (text: string) => {
  return text.split('').map(char => char === ' ' ? ' ' : getRandomChar()).join('');
};

// SVG filter for pixelation effect
const PixelFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <filter id="pixelate">
        <feFlood x="4" y="4" height="2" width="2" />
        <feComposite width="8" height="8" />
        <feTile result="a" />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
        <feMorphology operator="dilate" radius="4" />
      </filter>
    </defs>
  </svg>
);

const ScrambleText = ({ 
  text, 
  className = '', 
  delay = 0,
  scrambleDuration = 800,
  scrambleSpeedStart = 30,
  scrambleSpeedEnd = 150,
  pixelBlur = false
}: ScrambleTextProps) => {
  const [phase, setPhase] = useState<'waiting' | 'scrambling' | 'done'>('waiting');
  const [scrambledText, setScrambledText] = useState(() => generateScrambled(text));
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(0);

  // Reset when text changes
  useEffect(() => {
    setPhase('waiting');
    setScrambledText(generateScrambled(text));
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [text]);

  // Phase 0: Wait for delay
  useEffect(() => {
    if (phase !== 'waiting') return;

    const timeout = setTimeout(() => {
      setPhase('scrambling');
    }, delay);

    return () => clearTimeout(timeout);
  }, [phase, delay]);

  // Phase 1: Scramble with linear slowdown, then switch to real text
  useEffect(() => {
    if (phase !== 'scrambling') return;

    startTimeRef.current = Date.now();
    let timeoutId: number;

    const scheduleNextScramble = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min(elapsed / scrambleDuration, 1);
      
      // Update progress for blur effect
      setProgress(currentProgress);
      
      // Linear interpolation from fast to slow
      const currentSpeed = scrambleSpeedStart + (scrambleSpeedEnd - scrambleSpeedStart) * currentProgress;

      if (elapsed >= scrambleDuration) {
        setPhase('done');
        setProgress(1);
        return;
      }

      setScrambledText(generateScrambled(text));
      timeoutId = window.setTimeout(scheduleNextScramble, currentSpeed);
    };

    scheduleNextScramble();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase, text, scrambleDuration, scrambleSpeedStart, scrambleSpeedEnd]);

  // Calculate blur amount based on progress (starts blurry, clears up)
  const blurAmount = pixelBlur ? Math.max(0, 5 * (1 - progress)) : 0;
  const usePixelFilter = pixelBlur && progress < 0.5;
  
  const blurStyle: React.CSSProperties = pixelBlur && phase !== 'done' ? {
    filter: `blur(${blurAmount}px)${usePixelFilter ? ' url(#pixelate)' : ''}`,
    transition: 'filter 0.1s ease-out',
  } : {};

  if (phase === 'done') {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      {pixelBlur && <PixelFilter />}
      <span className={className} style={blurStyle}>{scrambledText}</span>
    </>
  );
};

export default ScrambleText;

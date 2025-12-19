import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  scrambleDuration?: number;
  scrambleSpeedStart?: number;
  scrambleSpeedEnd?: number;
  pixelBlur?: boolean;
}

const CHARS = '#%@$&*0123456789?!<>[]{}|/\\~^';

const getRandomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const generateScrambled = (text: string) => {
  return text.split('').map(char => char === ' ' ? ' ' : getRandomChar()).join('');
};

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
  const [phase, setPhase] = useState<'waiting' | 'scrambling' | 'done'>(delay === 0 ? 'scrambling' : 'waiting');
  const [scrambledText, setScrambledText] = useState(() => generateScrambled(text));
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    setPhase(delay === 0 ? 'scrambling' : 'waiting');
    setScrambledText(generateScrambled(text));
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [text, delay]);

  useEffect(() => {
    if (phase !== 'waiting' || delay === 0) return;

    const timeout = setTimeout(() => {
      setPhase('scrambling');
    }, delay);

    return () => clearTimeout(timeout);
  }, [phase, delay]);

  useEffect(() => {
    if (phase !== 'scrambling') return;

    startTimeRef.current = Date.now();
    let timeoutId: number;

    const scheduleNextScramble = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min(elapsed / scrambleDuration, 1);
      
      setProgress(currentProgress);
      
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

import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay before animation starts (ms)
  scrambleDuration?: number; // How long to show randomizing scramble (ms)
  scrambleSpeedStart?: number; // Initial scramble speed - fast (ms)
  scrambleSpeedEnd?: number; // Final scramble speed - slow (ms)
}

const CHARS = '#%@$&*0123456789?!<>[]{}|/\\~^';

const getRandomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const generateScrambled = (text: string) => {
  return text.split('').map(char => char === ' ' ? ' ' : getRandomChar()).join('');
};

const ScrambleText = ({ 
  text, 
  className = '', 
  delay = 0,
  scrambleDuration = 800,
  scrambleSpeedStart = 30,
  scrambleSpeedEnd = 150
}: ScrambleTextProps) => {
  const [phase, setPhase] = useState<'waiting' | 'scrambling' | 'done'>('waiting');
  const [scrambledText, setScrambledText] = useState(() => generateScrambled(text));
  const startTimeRef = useRef<number>(0);

  // Reset when text changes
  useEffect(() => {
    setPhase('waiting');
    setScrambledText(generateScrambled(text));
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
      const progress = Math.min(elapsed / scrambleDuration, 1);
      
      // Linear interpolation from fast to slow
      const currentSpeed = scrambleSpeedStart + (scrambleSpeedEnd - scrambleSpeedStart) * progress;

      if (elapsed >= scrambleDuration) {
        setPhase('done');
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

  if (phase === 'done') {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{scrambledText}</span>;
};

export default ScrambleText;

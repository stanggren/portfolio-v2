import { useEffect, useState, useMemo, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // Delay before animation starts (ms)
  scrambleDuration?: number; // How long to show randomizing scramble (ms)
  scrambleSpeedStart?: number; // Initial scramble speed - fast (ms)
  scrambleSpeedEnd?: number; // Final scramble speed - slow (ms)
  holdDuration?: number; // How long to hold final scrambled text before reveal (ms)
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
  scrambleSpeedEnd = 150,
  holdDuration = 200
}: ScrambleTextProps) => {
  const [phase, setPhase] = useState<'waiting' | 'scrambling' | 'revealing' | 'done'>('waiting');
  const [scrambledText, setScrambledText] = useState(() => generateScrambled(text));
  const [revealedCount, setRevealedCount] = useState(0);
  const startTimeRef = useRef<number>(0);

  // Generate final static scrambled text for hold/reveal phase
  const finalScrambled = useMemo(() => generateScrambled(text), [text]);

  // Reset when text changes
  useEffect(() => {
    setPhase('waiting');
    setScrambledText(generateScrambled(text));
    setRevealedCount(0);
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

  // Phase 1: Scramble with linear slowdown
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
        setScrambledText(finalScrambled);
        setPhase('revealing');
        return;
      }

      setScrambledText(generateScrambled(text));
      timeoutId = window.setTimeout(scheduleNextScramble, currentSpeed);
    };

    scheduleNextScramble();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase, text, scrambleDuration, scrambleSpeedStart, scrambleSpeedEnd, finalScrambled]);

  // Phase 2: Reveal real text from left to right
  useEffect(() => {
    if (phase !== 'revealing') return;

    if (revealedCount >= text.length) {
      setPhase('done');
      return;
    }

    const charDelay = holdDuration / text.length;
    const timeout = setTimeout(() => {
      setRevealedCount(prev => prev + 1);
    }, charDelay);

    return () => clearTimeout(timeout);
  }, [phase, revealedCount, text.length, holdDuration]);

  // Build display text
  const getDisplayText = () => {
    if (phase === 'waiting') {
      return scrambledText;
    }
    if (phase === 'revealing') {
      // Show revealed real chars + remaining scrambled chars
      return text.slice(0, revealedCount) + finalScrambled.slice(revealedCount);
    }
    return scrambledText;
  };

  if (phase === 'done') {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{getDisplayText()}</span>;
};

export default ScrambleText;

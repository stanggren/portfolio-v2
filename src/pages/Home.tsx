import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import FloatingCube from '../components/FloatingCube';
import ScrambleText from '../components/ScrambleText';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState(0);

  // Re-trigger animation on page load/navigation
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, []);

  return (
    <>
      <FloatingCube delay={1800} />
      <div className="relative z-10">
        <h1>
          <ScrambleText 
            key={`title-${animationKey}-${i18n.language}`} 
            text={t('home.title')} 
            delay={0}
            scrambleDuration={1400}
            scrambleSpeedStart={100}
            scrambleSpeedEnd={400}
          />
        </h1>
        <p className="mt-4 max-w-[400px]">
          <ScrambleText 
            key={`intro-${animationKey}-${i18n.language}`} 
            text={t('home.intro')} 
            delay={0}
            scrambleDuration={1400}
            scrambleSpeedStart={100}
            scrambleSpeedEnd={400}
          />
        </p>
      </div>
    </>
  );
};

export default Home;


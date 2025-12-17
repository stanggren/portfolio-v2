import { useTranslation } from 'react-i18next';
import FloatingCube from '../components/FloatingCube';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <FloatingCube />
      <div className="relative z-10">
        <h1 className="text-2xl font-bold">{t('home.title')}</h1>
        <p className="mt-4 max-w-[400px]">{t('home.intro')}</p>
      </div>
    </>
  );
};

export default Home;


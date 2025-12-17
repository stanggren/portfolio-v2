import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const navLinks = [
    { path: `${langPrefix}/web`, label: t('nav.web') },
    { path: `${langPrefix}/audio`, label: t('nav.audio') },
    { path: `${langPrefix}/cv`, label: t('nav.cv') },
    { path: `${langPrefix}/contact`, label: t('nav.contact') },
  ];

  return (
    <div className="pt-32 md:pt-56">
      <h1 className="text-2xl font-bold">{t('home.title')}</h1>
      <p className="mt-4">{t('home.intro')}</p>
      <ul className="mt-32 font-bold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:text-blue-700">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


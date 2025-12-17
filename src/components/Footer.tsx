import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const getLanguageSwitchPath = () => {
    const currentPath = location.pathname;
    if (i18n.language === 'en') {
      // Switch to Swedish: add /sv prefix
      return `/sv${currentPath}`;
    } else {
      // Switch to English: remove /sv prefix
      return currentPath.replace(/^\/sv/, '') || '/';
    }
  };

  return (
    <footer className="bg-white p-16 mt-auto font-bold">
      <div className="max-w-[1000px] mx-auto md:px-24">
        <ul>
          <li>
            <Link to={langPrefix || '/'} className="hover:text-blue-700">A/S</Link>
          </li>
          <li>
            <a href="mailto:astanggren@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">astanggren@gmail.com</a>
          </li>
          <li>
            <Link to={getLanguageSwitchPath()} className="hover:text-blue-700">
              {t('languageSwitcher.switchTo')}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

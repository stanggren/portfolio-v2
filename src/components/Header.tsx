import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const navLinks = [
    { path: `${langPrefix}/web`, label: t('nav.web') },
    { path: `${langPrefix}/audio`, label: t('nav.audio') },
    { path: `${langPrefix}/cv`, label: t('nav.cv') },
    { path: `${langPrefix}/contact`, label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(sv|en)/, '');
    const checkPath = path.replace(/^\/(sv|en)/, '');
    return pathWithoutLang === checkPath || currentPath === path;
  };

  const getLanguageSwitchPath = (targetLang: 'en' | 'sv') => {
    const currentPath = location.pathname;
    if (targetLang === 'sv') {
      return `/sv${currentPath.replace(/^\/sv/, '')}`;
    } else {
      return currentPath.replace(/^\/sv/, '') || '/';
    }
  };

  const isEnglish = i18n.language === 'en';

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="max-w-[1000px] mx-auto px-16 py-16 md:px-24">
        <div className="flex items-center justify-between">
          <Link to={langPrefix || '/'} className="font-bold hover:text-blue-700">
            A/S
          </Link>

          <div className="flex items-center gap-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 hover:text-blue-700 font-bold ${
                  isActive(link.path) ? 'underline' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2 font-bold">
              <Link
                to={getLanguageSwitchPath('en')}
                className={`hover:text-blue-700 ${isEnglish ? 'underline' : ''}`}
              >
                en
              </Link>
              <span className="mx-1">/</span>
              <Link
                to={getLanguageSwitchPath('sv')}
                className={`hover:text-blue-700 ${!isEnglish ? 'underline' : ''}`}
              >
                sv
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


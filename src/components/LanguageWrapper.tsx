import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE } from '../i18n';

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const isSwedish = location.pathname.startsWith('/sv');
    const targetLang = isSwedish ? 'sv' : DEFAULT_LANGUAGE;
    
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [location.pathname, i18n]);

  return <Outlet />;
};

export default LanguageWrapper;

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

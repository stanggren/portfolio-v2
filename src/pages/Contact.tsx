import { useTranslation } from 'react-i18next';
import ScrambleText from '../components/ScrambleText';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold pb-24">
        <ScrambleText text={t('contact.title')} scrambleDuration={400} scrambleSpeedStart={50} scrambleSpeedEnd={150} pixelBlur />
      </h1>
      <section>
        <ul>
          <li>
            <a href="tel:+46791013513" className="font-bold hover:text-blue-700">
              079-101 35 13
            </a>
          </li>
          <li>
            <a href="mailto:astanggren@gmail.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-700">
              astanggren@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/stanggren" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-700">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andreas-stanggren-6a27a8176/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-700">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;


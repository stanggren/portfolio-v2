import { useTranslation } from 'react-i18next';
import ScrambleText from '../components/ScrambleText';
import patchImage from '../assets/pd_img_1.png';

const PureDataDatabending = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold pb-24">
        <ScrambleText text={t('audio.pureDataDatabending.title')} delay={0} scrambleDuration={500} scrambleSpeedStart={30} scrambleSpeedEnd={150} pixelBlur />
      </h1>
      
      <section className="space-y-8">
        <p>{t('audio.pureDataDatabending.description')}</p>
        
        <p>
          <a href="/downloads/databending.pd" download className="hover:text-blue-700 underline">
            {t('audio.pureDataDatabending.downloadLink')}
          </a>
        </p>

        <div>
          <h3 className="font-bold mb-2">{t('audio.pureDataDatabending.instructionsTitle')}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('audio.pureDataDatabending.instruction1')}</li>
            <li>{t('audio.pureDataDatabending.instruction2')}</li>
            <li>{t('audio.pureDataDatabending.instruction3')}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">{t('audio.pureDataDatabending.recordingTitle')}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>{t('audio.pureDataDatabending.recording1')}</li>
            <li>{t('audio.pureDataDatabending.recording2')}</li>
            <li>{t('audio.pureDataDatabending.recording3')}</li>
            <li>{t('audio.pureDataDatabending.recording4')}</li>
          </ul>
        </div>

        <p>
          {t('audio.pureDataDatabending.exampleText')}{' '}
          <a href="https://on.soundcloud.com/Hjpiomngx2mchIYVnZ" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">
            {t('audio.pureDataDatabending.listenHere')}
          </a>
        </p>

        <img 
          src={patchImage} 
          alt="Pure Data databending patch" 
          className="mt-8 w-full max-w-2xl"
        />
      </section>
    </div>
  );
};

export default PureDataDatabending;


import { useTranslation } from 'react-i18next';
import ScrambleText from '../components/ScrambleText';

const Audio = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold pb-24">
        <ScrambleText text={t('audio.title')} scrambleDuration={300} scrambleSpeedStart={30} scrambleSpeedEnd={150} pixelBlur />
      </h1>
      <section>
        <ul>
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://open.spotify.com/album/0YCGEGY6JE5T89NRkN6FFq?si=SSwUFyzBTxmJojL21FrP8Q" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                Tåni Såprano EP
              </a>
            </h3>
            <p>{t('audio.taniSopranoDescription')}</p>
          </li>
          <li className="mb-16">
            <a href="https://soundcloud.com/andreas-stanggren" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-700">
              {t('audio.individualWork')}
            </a>
            <p>{t('audio.individualWorkDescription')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://store.steampowered.com/app/2646620/White_Hook_River/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                White Hook River
              </a>
            </h3>
            <p>{t('audio.whiteHookRiverDescription')}</p>
            <p className="text-sm">{t('audio.whiteHookRiverAward')}</p>
            <p className="text-sm">
              <a href="https://frostspektrum.itch.io/hookem" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                {t('audio.playDemo')}
              </a>
            </p>
          </li>

        </ul>
      </section>
    </div>
  );
};

export default Audio;


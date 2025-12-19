import { useTranslation } from 'react-i18next';
import ScrambleText from '../components/ScrambleText';

const CV = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold pb-24">
        <ScrambleText text={t('cv.title')} delay={0} scrambleDuration={500} scrambleSpeedStart={30} scrambleSpeedEnd={150} pixelBlur />
      </h1>

      <section>
        <h2 className="font-bold">{t('cv.education')}</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.education_items.hola.name')}</h3>
            <p>{t('cv.education_items.hola.description')}</p>
            <p className="text-sm">{t('cv.education_items.hola.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.education_items.umea.name')}</h3>
            <p>{t('cv.education_items.umea.description')}</p>
            <p className="text-sm">{t('cv.education_items.umea.period')}</p>
            <p className="text-sm">{t('cv.education_items.umea.details')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.education_items.teknikhogskolan.name')}</h3>
            <p>{t('cv.education_items.teknikhogskolan.description')}</p>
            <p className="text-sm">{t('cv.education_items.teknikhogskolan.period')}</p>
            <p className="text-sm">{t('cv.education_items.teknikhogskolan.details')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.education_items.hulebacksgymnasiet.name')}</h3>
            <p>{t('cv.education_items.hulebacksgymnasiet.description')}</p>
            <p className="text-sm">{t('cv.education_items.hulebacksgymnasiet.period')}</p>
          </li>
        </ul>
      </section>

      <section className="mt-48">
        <h2 className="font-bold">{t('cv.work')}</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.grebban.title')}</h3>
            <p>{t('cv.work_items.grebban.company')}</p>
            <p className="text-sm">{t('cv.work_items.grebban.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.visitGroup.title')}</h3>
            <p>{t('cv.work_items.visitGroup.company')}</p>
            <p className="text-sm">{t('cv.work_items.visitGroup.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.brattasskolan.title')}</h3>
            <p>{t('cv.work_items.brattasskolan.company')}</p>
            <p className="text-sm">{t('cv.work_items.brattasskolan.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.stenaLine.title')}</h3>
            <p>{t('cv.work_items.stenaLine.company')}</p>
            <p className="text-sm">{t('cv.work_items.stenaLine.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.ies.title')}</h3>
            <p>{t('cv.work_items.ies.company')}</p>
            <p className="text-sm">{t('cv.work_items.ies.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.australia.title')}</h3>
            <p className="text-sm">{t('cv.work_items.australia.period')}</p>
          </li>
          <li className="mb-16">
            <h3 className="font-bold">{t('cv.work_items.willys.title')}</h3>
            <p>{t('cv.work_items.willys.company')}</p>
            <p className="text-sm">{t('cv.work_items.willys.period')}</p>
          </li>
        </ul>
      </section>

      <section className="mt-48">
        <h2 className="font-bold">{t('cv.other')}</h2>
        <ul className="mt-16">
          <li className="mb-16">
            <h3 className="font-bold">
              <a href="https://valsforening.se" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                {t('cv.other_items.vals.name')}
              </a>
            </h3>
            <p>{t('cv.other_items.vals.role')}</p>
            <p className="text-sm">
              {t('cv.other_items.vals.descriptionPrefix')}{' '}
              <a href="https://www.instagram.com/vals.galleri/" target="_blank" rel="noopener noreferrer">
                Vals Galleri
              </a>
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CV;


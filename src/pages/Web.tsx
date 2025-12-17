import { useTranslation } from 'react-i18next';
import ScrambleText from '../components/ScrambleText';

const Web = () => {
  const { t } = useTranslation();

  const grebbanWorks = [
    {
      name: 'Skateovation',
      url: 'https://skateovation.com/',
      roleKey: 'web.roles.techLead',
      tech: 'Shopify, System Architecture, Liquid, Alpine.js, Tailwind',
    },
    {
      name: 'Macforum',
      url: 'https://www.macforum.se/',
      roleKey: 'web.roles.techLead',
      tech: 'Shopify, System Architecture, Data Migration, Liquid, React.js, Tailwind',
    },
    {
      name: 'Dotkeeper',
      url: 'https://dotkeeper.com/',
      roleKey: 'web.roles.frontendDeveloper',
      tech: 'WordPress, PHP Laravel, Bedrock, Sass, jQuery',
    },
    {
      name: 'J.Lindeberg',
      url: 'https://www.jlindeberg.com/',
      roleKey: 'web.roles.frontendDeveloper',
      tech: 'Shopify, Liquid, Alpine.js, React.js, Tailwind',
    },
    {
      name: 'Pinewood',
      url: 'https://pinewood.eu/',
      roleKey: 'web.roles.frontendDeveloper',
      tech: 'Shopify, Liquid, Alpine.js, Tailwind',
    },
    {
      name: 'Rixo',
      url: 'https://rixolondon.com/',
      roleKey: 'web.roles.frontendDeveloper',
      tech: 'Shopify, Liquid, Alpine.js, React.js, Tailwind',
    },
  ];

  const consultingWorks = [
    {
      name: 'Verkligheten',
      url: 'https://verkligheten.net/',
      tech: 'WordPress, PHP, Mail Client, Third Party Integrations',
    },
    {
      name: 'Ewas Glada Galleri',
      url: 'https://ewasgladagalleri.se/',
      tech: 'WordPress, PHP, Booking System, Payment System, Design, Copy',
    },
    {
      name: 'Vals Kulturförening',
      url: 'https://valsforening.se/',
      tech: 'WordPress, PHP, Design, Copy',
    },
  ];

  return (
    <div>
      <h1 className="font-bold pb-24">
        <ScrambleText text={t('web.title')} scrambleDuration={400} scrambleSpeedStart={50} scrambleSpeedEnd={200} />
      </h1>

      <section>
        <h2 className="font-bold">{t('web.grebbanTitle')} <a href="https://www.grebban.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">{t('web.grebbanLink')}</a></h2>
        <ul className="mt-16">
          {grebbanWorks.map((work) => (
            <li key={work.name} className="mb-16">
              <h3 className="font-bold">
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  {work.name}
                </a>
              </h3>
              <p>{t(work.roleKey)}</p>
              <p className="text-sm">{work.tech}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-48">
        <h2 className="font-bold">{t('web.consultingTitle')}</h2>
        <ul className="mt-16">
          {consultingWorks.map((work) => (
            <li key={work.name} className="mb-16">
              <h3 className="font-bold">
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  {work.name}
                </a>
              </h3>
              <p className="text-sm">{work.tech}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Web;


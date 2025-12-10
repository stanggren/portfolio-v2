const Web = () => {
  const grebbanWorks = [
    {
      name: 'Skateovation',
      url: 'https://skateovation.com/',
      role: 'Tech Lead',
      tech: 'Shopify, System Architecture, Liquid, Alpine.js, Tailwind',
    },
    {
      name: 'Macforum',
      url: 'https://www.macforum.se/',
      role: 'Tech Lead',
      tech: 'Shopify, System Architecture, Data Migration, Liquid, React.js, Tailwind',
    },
    {
      name: 'Dotkeeper',
      url: 'https://dotkeeper.com/',
      role: 'Frontend Developer',
      tech: 'WordPress, PHP Laravel, Bedrock, Sass, jQuery',
    },
    {
      name: 'J.Lindeberg',
      url: 'https://www.jlindeberg.com/',
      role: 'Frontend Developer',
      tech: 'Shopify, Liquid, Alpine.js, React.js, Tailwind',
    },
    {
      name: 'Pinewood',
      url: 'https://pinewood.eu/',
      role: 'Frontend Developer',
      tech: 'Shopify, Liquid, Alpine.js, Tailwind',
    },
    {
      name: 'Rixo',
      url: 'https://rixolondon.com/',
      role: 'Frontend Developer',
      tech: 'Shopify, Liquid, Alpine.js, React.js, Tailwind',
    },
  ];

  const consultingWorks = [
    'Verkligheten',
    'Ewas Glada Galleri',
    'Vals Kulturförening',
  ];

  return (
    <div>
      <h1 className="sr-only">Web</h1>

      <section>
        <h2 className="font-bold">Selection of works at Grebban</h2>
        <ul className="mt-16">
          {grebbanWorks.map((work) => (
            <li key={work.name} className="mb-16">
              <h3 className="font-bold">
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  {work.name}
                </a>
              </h3>
              <p>{work.role}</p>
              <p className="text-sm">{work.tech}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-32">
        <h2 className="font-bold">Selection of consulting works</h2>
        <ul className="mt-16">
          {consultingWorks.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Web;


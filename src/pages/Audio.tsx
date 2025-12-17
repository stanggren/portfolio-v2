const Audio = () => {
  const sectionOne = [
    {
      name: 'Project 1',
      url: '#',
      role: 'Role',
      tech: 'Tech stack',
    },
  ];

  const sectionTwo = [
    {
      name: 'Project 1',
      url: '#',
      tech: 'Tech stack',
    },
  ];

  return (
    <div>
      <h1 className="font-bold pb-24">Audio</h1>

      <section>
        <h2 className="font-bold">Section One</h2>
        <ul className="mt-16">
          {sectionOne.map((work) => (
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

      <section className="mt-48">
        <h2 className="font-bold">Section Two</h2>
        <ul className="mt-16">
          {sectionTwo.map((work) => (
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

export default Audio;


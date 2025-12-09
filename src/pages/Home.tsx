import { Link } from 'react-router-dom';

const Home = () => {
  const navLinks = [
    { path: '/web', label: 'Web' },
    { path: '/audio', label: 'Audio' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold">I'm Andreas Stanggren –</h1>
      <p className="mt-4">A Umeå based web developer and audio explorer filling my time with arts, coding and building web experiences.</p>
      <ul className="mt-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:text-blue-700">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


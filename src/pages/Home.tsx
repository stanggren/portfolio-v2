import { Link } from 'react-router-dom';

const Home = () => {
  const navLinks = [
    { path: '/web', label: 'Web' },
    { path: '/audio', label: 'Audio' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800">Välkommen</h1>
      <ul className="mt-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


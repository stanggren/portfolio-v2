import { Link } from 'react-router-dom';

const Home = () => {
  const navLinks = [
    { path: '/web', label: 'Web' },
    { path: '/audio', label: 'Audio' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="pt-32">
      <h1 className="text-2xl font-bold">I'm Andreas Stanggren –</h1>
      <p className="mt-4">A web developer and audio explorer based in Umeå, spending my time on art, coding, and crafting web experiences.</p>
      <ul className="mt-32 font-bold">
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


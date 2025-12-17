import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/web', label: 'Web' },
    { path: '/audio', label: 'Audio' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="max-w-[1000px] mx-auto px-16 py-16 md:px-24">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold hover:text-blue-700">
            A/S
          </Link>

          <div className="flex items-center gap-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 hover:text-blue-700 font-bold ${
                  isActive(link.path) ? 'underline' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


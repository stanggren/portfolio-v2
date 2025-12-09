import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <ul>
          <li>
            <Link to="/" className="hover:text-blue-700">A/S</Link>
          </li>
          <li>
            <a href="mailto:astanggren@gmail.com" className="hover:text-blue-700">astanggren@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

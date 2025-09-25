import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <nav className="d-flex justify-content-between">
      <Link to="/" title="Homepage">
        <img src="/images/me.jpg" alt="Sarah's logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link 
            to="/" 
            title="Homepage" 
            className={`menu-option ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            title="About Sarah" 
            className={`menu-option ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/work" 
            title="Sarah's work" 
            className={`menu-option ${location.pathname === '/work' ? 'active' : ''}`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            title="Contact Sarah" 
            className={`menu-option ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
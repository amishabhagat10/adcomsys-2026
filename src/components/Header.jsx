import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, BookOpen, Mic, Calendar, DollarSign, Sparkles, Mail } from 'lucide-react';
import logo1 from '@/assets/logo-1.png';
import logo2 from '@/assets/logo-2.png';
import logo3 from '@/assets/logo-3.png';
import logo4 from '@/assets/logo-4.png';
import logo5 from '@/assets/logo-5.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about-uem', label: 'About UEM', icon: BookOpen },
    { 
      label: 'Committee', 
      icon: Users,
      submenu: [
        { path: '/committee/organizing', label: 'Organizing Committee' },
        { path: '/committee/technical', label: 'Technical Program Committee' },
        { path: '/committee/advisory', label: 'International Advisory Committee' },
      ]
    },
    {
      label: 'Authors',
      icon: BookOpen,
      submenu: [
        { path: '/authors/submissions', label: 'Submissions' },
        { path: '/authors/call-for-papers', label: 'Call for Papers' },
        { path: '/authors/important-dates', label: 'Important Dates' },
      ]
    },
    { path: '/keynote-speakers', label: 'Keynote Speakers', icon: Mic },
    {
      label: 'Technical Programs',
      icon: Calendar,
      submenu: [
        { path: '/technical-programs/schedule', label: 'Technical Paper Schedule' },
        { path: '/technical-programs/accepted-papers', label: 'Accepted Papers' },
        { path: '/technical-programs/best-papers', label: 'Best Papers' },
      ]
    },
    { path: '/registration', label: 'Registration', icon: DollarSign },
    { path: '/events', label: 'Events', icon: Sparkles },
    { path: '/contact', label: 'Contact Us', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logos-container">
            <img src={logo1} alt="IEM Logo" className="logo" />
            {/*<img src={logo2} alt="Geeks for Geeks Logo" className="logo" />*/}
            <img src={logo3} alt="AdComSys Logo" className="logo" />
            {/*<img src={logo4} alt="Springer Logo" className="logo" />*/}
            <img src={logo5} alt="UEM Kolkata Logo" className="logo" />
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              {navigationItems.map((item, index) => (
                <div key={index} className="nav-item">
                  {item.submenu ? (
                    <div className="nav-dropdown">
                      <button className="nav-link dropdown-toggle">
                        <item.icon size={18} />
                        <span>{item.label}</span>
                      </button>
                      <div className="dropdown-menu">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`dropdown-item ${isActive(subItem.path) ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

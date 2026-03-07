import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Rocket } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className="logo">
                <Rocket size={32} color="#00f2ff" />
                FLY <span>TOWARDS</span>
            </Link>

            <ul className="nav-menu">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

                <li className="dropdown">
                    <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                        Products <ChevronDown size={12} strokeWidth={3} />
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/fly-bill">Fly Bill</Link></li>
                        <li><Link to="/payroll">FLY PAYROLL</Link></li>
                        <li><Link to="/smart-crm">Smart CRM</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link to="/service">
                        Service <ChevronDown size={12} strokeWidth={3} />
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/web-development">Web Development</Link></li>
                        <li><Link to="/whatsapp-api">WhatsApp Marketing API</Link></li>
                        <li><Link to="/service">All Services</Link></li>
                    </ul>
                </li>

                <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>

            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
                Enquire Now
            </Link>
        </nav>
    );
};

export default Navbar;

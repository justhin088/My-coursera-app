import { Link } from 'react-router-dom';
import './Nav.css';  // if you want separate styles

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">🍋 Little Lemon</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

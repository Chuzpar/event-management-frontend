import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <h2>Eventide</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">✨ Discover</Link>
        </li>

        <li>
          <Link to="/events">◈ My Events</Link>
        </li>

        <li>
          <Link to="/create-event">+ Create Event</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
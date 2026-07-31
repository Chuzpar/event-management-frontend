import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>🎉 Eventide</h2>

          <p>
            Discover, organize, and experience unforgettable events all in one place.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Create Event</li>
            <li>Profile</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@eventide.com</p>

          <p>📍 Nairobi, Kenya</p>

          <p>📞 +254 700 123 456</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Eventide. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
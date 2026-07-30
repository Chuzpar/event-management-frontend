import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <span className="badge">
          ⭐ FEATURED EVENT
        </span>

        <h1>
          Neon Horizons Electronic Festival
        </h1>

        <p>
          Three stages. Forty artists. One unforgettable weekend.
          Neon Horizons brings together the finest names in electronic music.
        </p>

        <div className="hero-info">

          <span>🕒 Aug 2, 2026 • 8:00 PM</span>

          <span>📍 Berlin</span>

          <span className="sold">
            86% booked
          </span>

        </div>

        <div className="hero-buttons">

          <button className="details">
            View Details
          </button>

          <button className="register">
            Register — €85
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;
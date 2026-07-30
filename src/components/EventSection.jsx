import "./EventSection.css";

function EventSection() {
  return (
    <section className="events-section">

      <div className="section-header">

        <div>
          <p className="subtitle">BROWSE EVENTS</p>
          <h2>What's Happening</h2>
        </div>

        <input
          type="text"
          placeholder="Search events, cities..."
          className="search"
        />

      </div>

      <div className="categories">
        <button className="active">All</button>
        <button>Music</button>
        <button>Tech</button>
        <button>Art</button>
        <button>Food</button>
        <button>Sports</button>
        <button>Business</button>
      </div>

    </section>
  );
}

export default EventSection;
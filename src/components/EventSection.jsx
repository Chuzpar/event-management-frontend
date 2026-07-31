import "./EventSection.css";
import EventCard from "./EventCard";

const events = [
  {
    title: "Neon Horizons Festival",
    category: "Music",
    price: "€85",
    date: "Aug 2, 2026",
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
  },
  {
    title: "AI Future Summit",
    category: "Tech",
    price: "€299",
    date: "Aug 14, 2026",
    location: "Amsterdam",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Street Art Expo",
    category: "Art",
    price: "Free",
    date: "Sept 6, 2026",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
  },
  {
    title: "Food Festival",
    category: "Food",
    price: "€120",
    date: "Sept 18, 2026",
    location: "Rome",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  }
];

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
      <div className="events-grid">

  {events.map((event, index) => (

    <EventCard
      key={index}
      title={event.title}
      category={event.category}
      image={event.image}
      price={event.price}
      date={event.date}
      location={event.location}
    />

  ))}

</div>

    </section>
  );
}


export default EventSection;
import "./EventCard.css";

function EventCard({ title, category, image, price, date, location }) {
  return (
    <div className="event-card">

      <img src={image} alt={title} />

      <div className="card-content">

        <span className="category">
          {category}
        </span>

        <span className="price">
          {price}
        </span>

        <h3>{title}</h3>

        <p>{date}</p>

        <p>{location}</p>

      </div>

    </div>
  );
}

export default EventCard;
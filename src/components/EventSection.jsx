import { useEffect, useState } from "react";
import "./EventSection.css";
import EventCard from "./EventCard";
import { getEvents } from "../services/eventService";


function EventSection() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const data = await getEvents();
        setEvents(data);

      } catch (error) {

        console.error("Failed to load events:", error);

      } finally {

        setLoading(false);

      }

    };


    fetchEvents();

  }, []);


  if (loading) {
    return <h2>Loading events...</h2>;
  }

  return (
    <section className="event-section">
      <div className="event-list">
        {events.map((event) => (
          <EventCard
            key={event.id}
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
import "./Stats.css";

function Stats() {
  const stats = [
    { number: "500+", label: "Events Hosted" },
    { number: "15K+", label: "Happy Attendees" },
    { number: "200+", label: "Event Organizers" },
    { number: "50+", label: "Cities Covered" }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
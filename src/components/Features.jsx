import "./Features.css";

function Features() {
  const features = [
    {
      title: "Curated Experiences",
      description: "Discover hand-picked events tailored to your interests."
    },
    {
      title: "Instant Booking",
      description: "Reserve your spot in just a few clicks."
    },
    {
      title: "Secure Payments",
      description: "Fast and secure checkout for every event."
    },
    {
      title: "Community Driven",
      description: "Connect with organizers and fellow attendees."
    }
  ];

  return (
    <section className="features">
      <p className="features-subtitle">WHY CHOOSE EVENTIDE</p>

      <h2>Experience Events Differently</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">✨</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
export default function TestimonialCard({ name, rating }) {
    return (
      <div className="testimonial">
        <p>⭐ {rating}</p>
        <span>{name}</span>
      </div>
    );
  }
  
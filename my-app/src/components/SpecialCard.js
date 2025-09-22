export default function SpecialCard({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/Reservations">Order a delivery</a>
    </div>
  );
}

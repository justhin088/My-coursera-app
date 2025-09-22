import SpecialCard from './SpecialCard';

const specialsData = [
  {
    image: "/images/greek salad.jpg",
    title: "Greek Salad",
    description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese."
  },
  {
    image: "/images/bruschetta.jpg",
    title: "Bruschetta",
    description: "Grilled bread with garlic and toppings including tomatoes, olive oil, and basil."
  },
  {
    image: "/images/lemon dessert.jpg",
    title: "Lemon Dessert",
    description: "Traditional lemon dessert with lemon zest and fresh cream."
  }
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map(({ image, title, description }) => (
          <SpecialCard key={title} image={image} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Hero from "../components/Hero";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/cards.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cards");
        return res.json();
      })
      .then((data) => {
        setCards(data);
        const mid = data[Math.floor(data.length / 2)];
        setSelectedId(mid.id);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-lg font-semibold">Loading cards...</p>;

  if (error)
    return <p className="text-center mt-20 text-lg font-semibold text-red-600">{error}</p>;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Hero />
      <section className="p-6 max-w-6xl mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((c) => (
            <div key={c.id} className="flex flex-col w-80">
              <Card
                data={c}
                selected={selectedId === c.id}
                onSelect={() => setSelectedId(c.id)}
                className="flex flex-col h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

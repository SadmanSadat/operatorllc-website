import { testimonials } from '@/app/lib/constants';

export default function Testimonials(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-serif text-3xl text-operator-cream">What Clients Say</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-2xl border border-operator-steel/30 bg-white/5 p-5 text-operator-cream">
            <p>“{item.quote}”</p>
            <footer className="mt-3 text-sm text-operator-orange">{item.name} · {item.market}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

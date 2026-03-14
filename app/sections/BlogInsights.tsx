export default function BlogInsights(): JSX.Element {
  return (
    <section className="bg-operator-charcoal py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl text-operator-cream">Insights & GEO Playbooks</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['How to rank in AI answers with GEO', 'B2B LinkedIn thought leadership blueprint', 'Local commerce growth loop for 2026'].map((title) => (
            <article key={title} className="rounded-2xl border border-operator-steel/30 bg-white/5 p-5 text-operator-cream">
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

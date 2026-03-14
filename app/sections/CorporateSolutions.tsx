import AnimatedCounter from '@/app/components/AnimatedCounter';

export default function CorporateSolutions(): JSX.Element {
  return (
    <section id="corporate" className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-serif text-3xl text-operator-cream">Corporate Growth Engine</h2>
      <p className="mt-2 max-w-3xl text-operator-steel">From executive branding to ABM campaigns, we turn industrial expertise into predictable B2B pipeline.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white/5 p-5"><p className="text-sm text-operator-steel">Revenue Generated</p><p className="text-3xl text-operator-orange"><AnimatedCounter end={50} suffix="M+" /></p></div>
        <div className="rounded-2xl bg-white/5 p-5"><p className="text-sm text-operator-steel">Qualified Leads</p><p className="text-3xl text-operator-orange"><AnimatedCounter end={1200} suffix="+" /></p></div>
        <div className="rounded-2xl bg-white/5 p-5"><p className="text-sm text-operator-steel">Avg Conversion Lift</p><p className="text-3xl text-operator-orange"><AnimatedCounter end={31} suffix="%" /></p></div>
      </div>
    </section>
  );
}

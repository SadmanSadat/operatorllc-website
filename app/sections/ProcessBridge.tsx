import SplitReveal from '@/app/components/SplitReveal';

export default function ProcessBridge(): JSX.Element {
  return (
    <section className="bg-operator-charcoal py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl text-operator-cream">How We Bridge Corporate & Local</h2>
        <div className="mt-6">
          <SplitReveal
            left={<div className="rounded-2xl border border-operator-steel/30 p-6 text-operator-cream"><h3 className="font-semibold">Authority Layer</h3><p className="mt-2 text-sm text-operator-steel">Market intelligence, positioning, and enterprise-grade funnel architecture.</p></div>}
            right={<div className="rounded-2xl border border-operator-steel/30 p-6 text-operator-cream"><h3 className="font-semibold">Activation Layer</h3><p className="mt-2 text-sm text-operator-steel">Localized storytelling, platform-native content, and high-converting social commerce.</p></div>}
          />
        </div>
      </div>
    </section>
  );
}

import IndustryBadge from '@/app/components/IndustryBadge';

export default function TrustBar(): JSX.Element {
  return (
    <section className="border-y border-operator-steel/20 bg-operator-charcoal py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6">
        <p className="text-sm text-operator-steel">Trusted by growth-stage and enterprise operators.</p>
        <div className="flex gap-2">
          <IndustryBadge label="Real Estate" />
          <IndustryBadge label="Steel" />
          <IndustryBadge label="Manufacturing" />
        </div>
      </div>
    </section>
  );
}

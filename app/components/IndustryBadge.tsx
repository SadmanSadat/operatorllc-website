import { Building2, Factory, Hammer } from 'lucide-react';

const icons = {
  'Real Estate': Building2,
  Steel: Factory,
  Manufacturing: Hammer
} as const;

export default function IndustryBadge({ label }: { label: keyof typeof icons }): JSX.Element {
  const Icon = icons[label];
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-operator-steel/40 px-3 py-1 text-xs text-operator-cream">
      <Icon className="h-4 w-4 text-operator-orange" />
      {label}
    </div>
  );
}

import LocalMap from '@/app/components/LocalMap';

export default function LocalSolutions(): JSX.Element {
  return (
    <section id="local" className="bg-operator-cream py-14 text-operator-navy">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Local Growth Solutions</h2>
          <p className="mt-2">We scale community-first brands with local SEO, social storytelling, and marketplace growth campaigns.</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            <li>Google Business Profile optimization</li>
            <li>Hyper-targeted PPC for local intent</li>
            <li>E-commerce storefront acceleration</li>
          </ul>
        </div>
        <LocalMap />
      </div>
    </section>
  );
}

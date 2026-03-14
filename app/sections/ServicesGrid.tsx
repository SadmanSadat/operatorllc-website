import { services } from '@/app/lib/constants';
import ServiceCard from '@/app/components/ServiceCard';

export default function ServicesGrid(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-serif text-3xl text-operator-cream">All 31 Services, One Integrated Growth Partner</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}

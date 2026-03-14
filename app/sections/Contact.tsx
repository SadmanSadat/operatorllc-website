import ContactForm from '@/app/components/ContactForm';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-serif text-3xl text-operator-cream">Start Your Growth Partnership</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm text-operator-steel">Corporate Inquiry</p>
          <ContactForm endpoint="/api/corporate-contact" inquiryType="corporate" />
        </div>
        <div>
          <p className="mb-2 text-sm text-operator-steel">Local Business Inquiry</p>
          <ContactForm endpoint="/api/local-contact" inquiryType="local" />
        </div>
      </div>
    </section>
  );
}

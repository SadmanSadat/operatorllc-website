export default function SEOMetadata(): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Corporation',
        name: 'Operator LLC',
        areaServed: 'United States',
        slogan: 'Digital Growth Architects'
      },
      {
        '@type': 'LocalBusiness',
        name: 'Operator LLC Austin',
        address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' }
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

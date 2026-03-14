import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'OperatorLLC - Digital Growth Architects for Corporate & Local Markets',
  description: 'OperatorLLC drives enterprise and local growth ecosystems from Austin, TX.',
  metadataBase: new URL('https://www.operatorllc.com'),
  alternates: { canonical: '/' },
  keywords: ['OperatorLLC', 'Austin digital agency', 'GEO', 'LLM visible', 'B2B marketing'],
  openGraph: {
    title: 'OperatorLLC',
    description: 'Bridging corporate scale with local agility.',
    url: 'https://www.operatorllc.com',
    siteName: 'OperatorLLC'
  },
  other: {
    'ai-search-optimized': 'true',
    'llm-visible': 'true'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable} bg-operator-navy text-white`}>{children}</body>
    </html>
  );
}

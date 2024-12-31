import { Inter, Montserrat } from 'next/font/google';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import StickyCTA from '../components/ui/StickyCTA';
import CookieConsent from '../components/ui/CookieConsent';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
import '@/styles/global.css';
import { gotham } from '@/fonts';
import type { Metadata } from 'next';
import ThemeRegistry from '@/styles/ThemeRegistry';
import Navbar from '../components/Navbar';
import Navigation from './(navigation)';
import { NavMenuProvider } from '@/components/Navbar/NavmenuProvider';

export const metadata: Metadata = {
  title: 'Indian Media Syndicate',
  description: `Indian Media Syndicate strives to be the global leader in Exploration, Scientific Communications, Real Life Entertainment, serving passionate Explorers around the world with scientific journalism that inspires, informs and entertains. 
  This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Indic Societies.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={gotham.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <NavMenuProvider>
            <Navbar />
            <Navigation />
            {children}
          </NavMenuProvider>
        </ThemeRegistry>
      </body>
    </html >
  )
};
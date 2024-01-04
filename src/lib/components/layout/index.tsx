import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Footer from './Footer';
import Header from './Header';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen ">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Header />
          <main className="wrapper flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

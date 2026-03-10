"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QueryProvider from "../providers/QueryProvider";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          className={cn(
            "flex size-16 items-center justify-center rounded-full bg-primary",
            "animate-pulse shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-primary/80",
          )}
        >
          <span className="text-xl font-bold text-black dark:text-white">MT</span>
        </div>
      </div>
    );
  }

  return (
    <QueryProvider>
      <div className="min-h-screen flex flex-col bg-[var(--background)]">
        <Navbar />
        <main className="flex-grow relative pt-[var(--nav-height)]">
          {children}
        </main>
        <Footer />
      </div>
    </QueryProvider>
  );
};

export default Layout;

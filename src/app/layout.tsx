import React from 'react';
import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "../index.css";

export const metadata: Metadata = {
    title: "Minimalistic Technology | Engineering the Future",
    description: "Premium web design and development agency. AI-powered website builder. From idea to live website in weeks.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var savedTheme = localStorage.getItem('theme');
                                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                    var theme = savedTheme || systemTheme;
                                    document.documentElement.setAttribute('data-theme', theme);
                                } catch (e) {
                                    console.error('Theme initialization failed:', e);
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}

import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'How to Share a Shopping List Across 53 Languages - ListKart',
    description: 'Break the language barrier. Create a list in English, and your partner can read it in Spanish, Hindi, or 53 other languages.',
};

export default function MultilingualBlog() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <img src="/assets/logo.png" alt="ListKart Logo" />
                            <span>ListKart</span>
                        </Link>
                    </div>
                    <nav className="nav-menu">
                        <Link href="/#about">About</Link>
                        <Link href="/#features">Features</Link>
                        <Link href="/#how-it-works">How It Works</Link>
                        <Link href="/#support">Support</Link>
                        <Link href="/blog">Blog</Link>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.smartsupermarket.app&hl=en_IN"
                            className="btn-nav"
                            target="_blank"
                        >
                            Download App
                        </a>
                    </nav>
                </div>
            </header>

            <main className="blog-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--white)' }}>
                <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '1rem', color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Global & Multilingual
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2', color: 'var(--text-color)', letterSpacing: '-0.03em' }}>
                        How to Share a Shopping List Across 53 Languages: The Global Solution
                    </h1>

                    <div style={{ backgroundColor: '#2563eb', color: 'white', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', marginBottom: '3rem', boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.1)' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>Milk • Lait • Leche • दूध</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginTop: '1rem' }}>One App. 53 Languages.</p>
                    </div>

                    <div className="blog-content" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-light)' }}>
                            In today&apos;s interconnected world, modern families, expats, and international couples often face a unique daily challenge: the language barrier during grocery shopping.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            The Multilingual Household Dilemma
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Imagine this scenario: You are an expat living in Germany. You think and plan your meals in English, but when you go to the local supermarket, all the aisles and labels are in German. Similarly, international couples living together often have to translate items back and forth via text messages.
                        </p>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', marginBottom: '2.5rem', borderLeft: '4px solid #ef4444', fontStyle: 'italic' }}>
                            &quot;I used to send my husband the household shopping list in English on WhatsApp. He would go to the local market in Tokyo and spend 20 minutes just translating the vegetable names to find what we needed.&quot;
                        </div>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            The ListKart Solution: Write in English, Read in 53 Languages
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This exact problem is why <strong>ListKart was built from the ground up to be fully multilingual</strong>. It is not just an app translated into multiple languages; its core functionality is designed for cross-language sharing.
                        </p>

                        <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem', marginBottom: '3rem' }}>
                            <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', backgroundColor: 'var(--white)' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>1. Universal Sharing</h3>
                                <p>Create a shared grocery list and type all items in English. When you share this list, your partner can open it in their native language instantly.</p>
                            </div>
                            <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', backgroundColor: 'var(--white)' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>2. Seamless Auto-Translation</h3>
                                <p>While you see &quot;Tomatoes&quot; and &quot;Milk&quot;, your Spanish-speaking partner sees &quot;Tomates&quot; and &quot;Leche&quot;, and your Hindi-speaking parents see &quot;टमाटर&quot; and &quot;दूध&quot;.</p>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            Supporting 53+ Global & Regional Languages
                        </h2>
                        <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6', marginBottom: '3rem' }}>
                            <p style={{ fontWeight: '700', marginBottom: '1rem' }}>ListKart&apos;s language support includes:</p>
                            <ul style={{ columns: 2, paddingLeft: '1.25rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Spanish, French, German</li>
                                <li style={{ marginBottom: '0.5rem' }}>Japanese, Korean, Chinese</li>
                                <li style={{ marginBottom: '0.5rem' }}>Arabic, Turkish, Persian</li>
                                <li style={{ marginBottom: '0.5rem' }}>Hindi, Tamil, Telugu</li>
                                <li style={{ marginBottom: '0.5rem' }}>Marathi, Gujarati, Bengali</li>
                            </ul>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            ListKart is also a perfect travel companion. Switch the app to the local language of the country you are visiting and show the list directly to the store clerk.
                        </p>

                        <div style={{ marginTop: '4rem', padding: '3rem 2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontWeight: '800' }}>Break the language barrier in your household today.</h3>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.smartsupermarket.app&hl=en_IN"
                                className="btn btn-primary"
                                target="_blank"
                                style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.125rem' }}
                            >
                                Download Now for Free
                            </a>
                        </div>
                    </div>
                </article>
            </main>

            <footer>
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} ListKart. All rights reserved. | <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link> | <Link href="/blog" style={{ color: 'inherit', textDecoration: 'underline' }}>Blog</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}


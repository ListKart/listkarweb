import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'FAQ & User Guide - ListKart',
    description: 'Help Center for ListKart - Learn how to use the app, share lists, and track budgets.',
};

export default function FAQPage() {
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

            <main style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-color)' }}>
                        ListKart FAQ & User Guide
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '3rem', lineHeight: '1.6' }}>
                        Welcome to the ListKart Help Center! Here you’ll find easy answers to common questions and simple guides on how to use the app effectively.
                    </p>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>👋</span> What is ListKart?
                        </h2>
                        <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong>ListKart</strong> is your smart, privacy-first companion for organized shopping. It replaces messy paper lists with a clean, digital experience that helps you shop faster and smarter.
                            </p>
                            <ul className="check-list" style={{ paddingLeft: '1rem' }}>
                                <li style={{ marginBottom: '1rem' }}><strong>Smart Lists:</strong> Create lists for Groceries, Travel, Movies, and more.</li>
                                <li style={{ marginBottom: '1rem' }}><strong>Budget Tracking:</strong> Add prices to your items, and ListKart will automatically calculate your total before you reach the checkout.</li>
                                <li style={{ marginBottom: '1rem' }}><strong>Privacy First:</strong> Your data stays on your phone. No tracking, no ads.</li>
                            </ul>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>📱 How to Use ListKart</h2>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-color)' }}>How to Create a New List</h3>
                                <p>Tap the big <strong>&quot;+&quot; (Plus)</strong> button on the home screen, give your list a name, and hit Create. Your new list is ready in seconds.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-color)' }}>How to Add Items</h3>
                                <p>You can <strong>Type</strong>, <strong>Scan</strong> with your camera, or use <strong>Voice</strong> to add items. You can even say multiple items like &quot;Milk, Bread, Eggs&quot; and we&apos;ll add them separately.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-color)' }}>How to Share a List</h3>
                                <p>Open a list, tap the 3-dots menu, and select <strong>&quot;Share&quot;</strong>. Send the unique link to family or friends via WhatsApp or SMS.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>🔒 Privacy & Data</h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                { q: "Do you track what I buy?", a: "No. Your shopping lists are yours alone. We don&apos;t build a profile of your habits to sell to advertisers." },
                                { q: "Do I need an account?", a: "No. You can use all features without ever creating an account, ensuring complete anonymity." },
                                { q: "Is my personal data safe?", a: "Yes. Your data primarily lives locally on your device, which is the safest place for it." }
                            ].map((item, i) => (
                                <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Q: {item.q}</h4>
                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>A: {item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div style={{ marginTop: '4rem', padding: '3rem 2rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '24px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Still have questions?</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>Our team is here to help you get the most out of ListKart.</p>
                        <a
                            href="mailto:support@getlistkart.com"
                            style={{ display: 'inline-flex', padding: '1rem 2.5rem', backgroundColor: 'white', color: 'var(--primary-color)', borderRadius: '50px', fontWeight: '800', textDecoration: 'none', transition: 'transform 0.2s' }}
                        >
                            Email Support
                        </a>
                    </div>
                </div>
            </main>

            <footer style={{ backgroundColor: 'var(--white)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} ListKart. All rights reserved. | <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link> | <Link href="/faq" style={{ color: 'inherit', textDecoration: 'underline' }}>FAQ</Link> | <Link href="/blog" style={{ color: 'inherit', textDecoration: 'underline' }}>Blog</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}


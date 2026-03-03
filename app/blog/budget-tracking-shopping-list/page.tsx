import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Master Your Spending: Using ListKart as a Smart Budget Tracker - ListKart',
    description: 'Learn how to track your shopping budget effortlessly. Discover features like pie-charts, category-wise spending, and budget limits.',
};

export default function BudgetBlog() {
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
                        Budgeting & Finance
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2', color: 'var(--text-color)', letterSpacing: '-0.03em' }}>
                        Master Your Spending: Using ListKart as a Smart Budget Tracker
                    </h1>

                    <div style={{ overflow: 'hidden', borderRadius: '16px', marginBottom: '3rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
                        <img src="/assets/feature-budget.jpg" alt="ListKart Budget Tracker" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div className="blog-content" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-light)' }}>
                            Groceries and daily household supplies take up a significant part of our monthly spending. Without proper tracking, it&apos;s easy to overspend. That&apos;s why ListKart isn’t just a shopping list—it’s a powerful visual budget tracking tool keeping your finances in perfect balance.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            Why Tracking Shopping Expenses Matters
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Have you ever reached the billing counter and been surprised by the final total? Unplanned purchases and &quot;invisible&quot; spending silently drain your wallet. When you track expenses directly while building your shopping list, you gain immediate control <em>before</em> you spend a single rupee.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            How ListKart Helps You Stay Within Limit
                        </h2>

                        <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem', marginBottom: '3rem' }}>
                            <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>1. Set Your Limit</h3>
                                <p>Start your shopping journey by setting a Budget Limit for your current list. Anchoring your mindset before you shop is key.</p>
                            </div>
                            <div style={{ padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>2. Real-Time Totals</h3>
                                <p>As you add items and prices, ListKart continuously calculates your total. See how much margin you have left instantly.</p>
                            </div>
                        </div>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', marginBottom: '3rem', borderLeft: '4px solid var(--primary-color)' }}>
                            <p style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Example Scenario:</p>
                            <p style={{ fontSize: '1.25rem', margin: 0 }}>Limit: ₹2000 | Current Cart: ₹1450</p>
                            <p style={{ color: '#16a34a', fontWeight: '700', marginTop: '0.5rem' }}>Safe Zone: You still have ₹550 left!</p>
                        </div>

                        <h2 style={{ fontSize: '2rem', marginTop: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                            Visualizing Your Spending
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Numbers are great, but visuals are better. ListKart features beautiful and interactive graphic reports including category-wise <strong>Pie Charts</strong> to help you analyze your purchasing habits instantly.
                        </p>

                        <ul className="check-list" style={{ marginBottom: '3rem' }}>
                            <li>Break down expenses by Dairy, Produce, Snacks, etc.</li>
                            <li>Identify exactly where you can cut back.</li>
                            <li>Unified experience for both lists and budgets.</li>
                        </ul>

                        <div style={{ marginTop: '4rem', padding: '3rem 2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-color)', fontWeight: '800' }}>Try ListKart and make shopping planned instead of remembered.</h3>
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


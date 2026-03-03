import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Blog - ListKart | Shopping Tips & Product Updates',
    description: 'Pro tips on grocery shopping, budget tracking, and simplifying your daily routine with ListKart.',
};

const blogPosts = [
    {
        slug: 'multilingual-shopping-list',
        title: 'How to Share a Shopping List Across 53 Languages',
        excerpt: 'Break the language barrier. Create a list in English, and your partner can read it in Spanish, Hindi, or 53 other languages.',
        date: 'Mar 1, 2026',
        tag: 'Global',
        tagColor: '#ef4444',
        bgColor: '#2563eb',
        isImage: false,
        content: 'Milk • दूध • Leche'
    },
    {
        slug: 'budget-tracking-shopping-list',
        title: 'Master Your Spending: Using ListKart as a Smart Budget Tracker',
        excerpt: 'Learn how to track your shopping budget effortlessly. Discover features like pie-charts and category-wise spending.',
        date: 'Feb 28, 2026',
        tag: 'Budgeting',
        tagColor: '#3b82f6',
        image: '/assets/feature-budget.jpg',
        isImage: true
    },
    {
        slug: 'best-shopping-list-app-2026',
        title: 'Best Shopping List App in 2026 – Why ListKart is the Smartest Choice',
        excerpt: 'Forgetting items while shopping is a common problem. Discover why ListKart is designed to make planning effortless.',
        date: 'Feb 27, 2026',
        tag: 'Productivity',
        tagColor: '#10b981',
        image: '/assets/perfect-for.jpg',
        isImage: true
    }
];

export default function BlogIndex() {
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

            <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '1rem', letterSpacing: '-0.04em' }}>
                            ListKart Blog
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                            Shopping tips, product updates, and ideas to simplify your daily routine.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
                            >
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    className="blog-card-hover"
                                >
                                    <div style={{
                                        height: '240px',
                                        width: '100%',
                                        backgroundColor: post.isImage ? '#f8fafc' : post.bgColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        {post.isImage ? (
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', padding: '2rem' }}>
                                                {post.content}
                                            </span>
                                        )}
                                    </div>

                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            borderRadius: '50px',
                                            backgroundColor: `${post.tagColor}15`,
                                            color: post.tagColor,
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '1rem',
                                            alignSelf: 'flex-start'
                                        }}>
                                            {post.tag}
                                        </div>

                                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-color)', lineHeight: '1.3' }}>
                                            {post.title}
                                        </h2>

                                        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                            {post.excerpt}
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            paddingTop: '1.25rem',
                                            borderTop: '1px solid rgba(0,0,0,0.05)',
                                            fontSize: '0.875rem'
                                        }}>
                                            <span style={{ color: 'var(--text-light)' }}>{post.date}</span>
                                            <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Read Article &rarr;</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <footer>
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} ListKart. All rights reserved. | <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link> | <Link href="/blog" style={{ color: 'inherit', textDecoration: 'underline' }}>Blog</Link>
                    </p>
                </div>
            </footer>

            <style jsx>{`
        .blog-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
        </>
    );
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src="/assets/logo.png" alt="ListKart Logo" />
            <span>ListKart</span>
          </div>
          <nav className="nav-menu">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#support">Support</a>
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

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="text-content">
              <h1>
                Never Forget <span className="highlight">Anything...</span>
              </h1>
              <p className="subtitle">
                The smartest way to organize your grocery shopping. Create lists, share with family, and save money.
              </p>
              <div className="cta-group">
                <a
                  href="https://play.google.com/store/apps/details?id=com.smartsupermarket.app&hl=en_IN"
                  className="btn btn-primary"
                  target="_blank"
                >
                  <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                    />
                  </svg>
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="image-content">
              <div className="hero-image-wrapper">
                <img src="/assets/hero-illustration.png" alt="ListKart App Usage" className="hero-app-icon" />
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2>The Complete Shopping & Grocery List App</h2>
            <p className="lead-text">
              Create simple shopping lists fast, share your grocery list with family in real-time, and add items by voice
              or camera scan. ListKart is a private, ad-free and easy shopping list app packed with features to make every
              supermarket trip effortless.
            </p>
          </div>
        </section>

        <section className="features" id="features">
          {/* Feature Spotlight: Shared Lists */}
          <div className="container two-column reverse-mobile" style={{ marginBottom: '5rem' }}>
            <div className="text-column">
              <h2>Shared Shopping Lists</h2>
              <p className="lead-text" style={{ textAlign: 'left', margin: 0 }}>Create shared grocery lists and keep everyone synced. Tick off items together in real-time – perfect for partners, families, roommates or flatmates shopping together.</p>
            </div>
            <div className="image-column">
              <img src="/assets/feature-shared.jpg" alt="Family Shopping Together" className="spotlight-image" />
            </div>
          </div>

          <div className="container">
            <h2>More Smart Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Smart Shopping List</h3>
                <p>Create unlimited shopping and grocery lists. Add items by typing, voice, or camera scan. Organise by aisles, meals, or priorities.</p>
              </div>
              <div className="feature-card">
                <h3>Shared Family Lists</h3>
                <p>Keep everyone synced. Tick off items together in real-time – perfect for partners, families, and roommates.</p>
              </div>
              <div className="feature-card">
                <h3>Voice & Scan Input</h3>
                <p>Add items hands-free or scan handwritten lists using fast OCR. Just point, capture, and auto-add.</p>
              </div>
              <div className="feature-card">
                <h3>Home Screen Widgets</h3>
                <p>View and tick off items without opening the app utilizing quick-add widgets in multiple sizes.</p>
              </div>
              <div className="feature-card">
                <h3>Offline Mode</h3>
                <p>Works fully offline. Data stays on your phone and syncs automatically when you're back online.</p>
              </div>
              <div className="feature-card">
                <h3>17 Languages</h3>
                <p>Available in English, Hindi, Spanish, French, German, Portuguese, Japanese, Korean, and many more.</p>
              </div>
              <div className="feature-card">
                <h3>Budget Tracker</h3>
                <p>Track spending with built-in price lists and category budgets. Monitor expenses instantly.</p>
              </div>
              <div className="feature-card">
                <h3>Privacy-First & Ad-Free</h3>
                <p>No account required, no data collection, and completely ad-free forever.</p>
              </div>
            </div>
          </div>

          {/* Feature Spotlight: Budget */}
          <div className="container two-column" style={{ marginTop: '5rem' }}>
            <div className="image-column">
              <img src="/assets/feature-budget.jpg" alt="Budget Tracking" className="spotlight-image" />
            </div>
            <div className="text-column">
              <h2>Budget & Expense Tracker</h2>
              <p className="lead-text" style={{ textAlign: 'left', margin: 0 }}>Track your grocery spending with a built-in price list and category budgets. See how much you have left instantly and monitor expenses over time.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3>Create List</h3>
                <p>Start your shopping list instantly.</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h3>Add Items</h3>
                <p>Use voice, camera, or typing.</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h3>Share</h3>
                <p>Sync with family in real-time.</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h3>Shop</h3>
                <p>Tick off items and track easy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="perfect-for section-alt">
          <div className="container">
            <div className="two-column">
              <div className="image-column">
                <img src="/assets/perfect-for.jpg" alt="Happy Users" className="spotlight-image" />
              </div>
              <div className="text-column">
                <h2>Perfect For</h2>
                <ul className="check-list">
                  <li>Weekly grocery shopping</li>
                  <li>Supermarket checklist organisation</li>
                  <li>Shared family shopping lists</li>
                  <li>Meal planning and recipe ingredients</li>
                  <li>Pantry tracking & household essentials</li>
                  <li>Budget-conscious shopping</li>
                  <li>Healthy food planning</li>
                  <li>Offline shopping trips</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
              <h2>Complete Feature List</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>Unlimited shopping lists, shared grocery list syncing, camera OCR scan for handwritten lists, voice input, widgets, offline shopping list app mode, budget tracker and price calculator, dark mode and left-hand mode, 16 themes, healthy templates, pantry list support, privacy-first design, no ads, 100% free forever.</p>
            </div>
          </div>
        </section>

        <section className="support" id="support">
          <div className="container">
            <h2>Support</h2>
            <p>Have questions or need help? Our team is here for you.</p>
            <a href="mailto:support@getlistkart.com" className="support-email">
              <svg
                className="mail-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              support@getlistkart.com
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            &copy; 2024 ListKart. All rights reserved. | <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link> | <Link href="/blog" style={{ color: 'inherit', textDecoration: 'underline' }}>Blog</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

import Link from 'next/link'

export const metadata = {
    title: 'Privacy Policy - ListKart',
    description: 'Privacy Policy for ListKart - Grocery Listing App',
}

export default function PrivacyPolicy() {
    return (
        <>
            <header>
                <div className="container">
                    <Link href="/" className="logo">
                        <img src="/assets/logo.png" alt="ListKart Logo" />
                        <span>ListKart</span>
                    </Link>
                    <nav className="nav-menu">
                        <Link href="/#about">About</Link>
                        <Link href="/#features">Features</Link>
                        <Link href="/#how-it-works">How It Works</Link>
                        <Link href="/#support">Support</Link>
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

            <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1>Privacy Policy for ListKart</h1>
                    <p style={{ color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: '3rem' }}>
                        Effective Date: February 03, 2026
                    </p>

                    <section>
                        <p className="lead-text" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                            ListKart ("we", "our", "us") is committed to protecting your privacy.
                        </p>
                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            We believe in transparency regarding how we handle your data. Ideally, your data belongs to you. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                        </p>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>1. Information We Collect</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            To improve our application and provide you with a better user experience, we collect specific types of non-personal information.
                        </p>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>A. Usage Data & Analytics</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            We collect anonymous usage data to understand how users interact with ListKart. This helps us identify popular features, detect areas for improvement, and optimize performance.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li>
                                <strong>Interaction Data:</strong> Pages visited, buttons clicked, and time spent on specific screens.
                            </li>
                            <li>
                                <strong>Technical Data:</strong> Crash reports, performance metrics, and app launch times.
                            </li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>B. Device Information</h3>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            We may collect minimal device-specific information to ensure compatibility and troubleshoot issues:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li>
                                <strong>Device Identifiers:</strong> Model, manufacturer, and operating system version (e.g., Android, iOS).
                            </li>
                            <li>
                                <strong>Regional Data:</strong> General location data (Country/Region level) based on device settings, solely for language and regional feature optimization.
                            </li>
                        </ul>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>
                            2. How We Use Your Information
                        </h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            The data we collect is used strictly for the following purposes:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li><strong>Service Improvement:</strong> To analyze usage trends and enhance the functionality and user interface of the app.</li>
                            <li><strong>Troubleshooting:</strong> To identify, investigate, and resolve bugs or crashes.</li>
                            <li><strong>Feature Optimization:</strong> To tailor content and features (like language settings) to your region.</li>
                        </ul>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>
                            3. Third-Party Services
                        </h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            We utilize trusted third-party service providers to assist us with analytics, data hosting, and infrastructure maintenance.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li><strong>Analytics Providers:</strong> We partner with industry-standard analytics services to help us understand app usage. These providers analyze data in an anonymized and aggregated form.</li>
                            <li><strong>Cloud Infrastructure:</strong> Secured third-party cloud services are used to host app assets and support backend functionality.</li>
                            <li><strong>Anonymity:</strong> We do not disclose the specific identity of these providers in this policy, but we ensure they adhere to strict data security and privacy standards. We do not sell your data to these providers or any other third parties.</li>
                        </ul>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>4. App Permissions</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            We request specific permissions to enable key features:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li><strong>Camera Permission:</strong> Used solely for scanning barcodes to add items to your list. Scanning is processed locally; no video feeds are transmitted for surveillance.</li>
                            <li><strong>Internet Access:</strong> Required to send anonymous analytics data, crash reports, and to fetch app assets (such as product images or language updates).</li>
                            <li><strong>Storage/Files Access:</strong> Used to save your shopping lists and settings on your device.</li>
                            <li><strong>Microphone Permission (Optional):</strong> Used for voice input features. Audio is processed by your device's speech engine and is not recorded by us.</li>
                        </ul>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>5. Data Security</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                            We take the security of your data seriously.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            <li><strong>Transmission:</strong> Any data exchanged between the app and our analytics/cloud servers is transmitted over secure, encrypted connections (SSL/TLS).</li>
                            <li><strong>Storage:</strong> We implement robust security measures to protect data from unauthorized access.</li>
                        </ul>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>6. Children’s Privacy</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Our application is designed for general audiences. We do not knowingly collect personal identifiable information from children under the age of 13.
                        </p>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>7. Changes to This Policy</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Effective Date" at the top of this policy.
                        </p>

                        <h2 style={{ textAlign: 'left', fontSize: '1.75rem', marginTop: '2.5rem' }}>8. Contact Us</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            If you have any questions about this Privacy Policy or our data practices, please contact us.
                            <br />
                            <a
                                href="mailto:support@getlistkart.com"
                                style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none' }}
                            >
                                📧 support@getlistkart.com
                            </a>
                        </p>
                    </section>
                </div>
            </main>

            <footer>
                <div className="container">
                    <p>
                        &copy; 2024 ListKart. All rights reserved. | <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</Link>
                    </p>
                </div>
            </footer>
        </>
    )
}

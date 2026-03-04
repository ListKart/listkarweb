const fs = require('fs');
const path = require('path');

// 1. FAQ HTML substitution
const faqContent = `<div class="blog-header" style="background-color: var(--white); padding-bottom: 20px;">
    <div class="container" style="max-width: 800px; margin: 0 auto; text-align: left;">
        <h1 class="blog-title" style="margin-bottom: 1rem;">ListKart FAQ &amp; User Guide</h1>
        <p class="blog-subtitle" style="font-size: 1.25rem; color: var(--text-light); margin-bottom: 3rem; line-height: 1.6; text-align: left; margin-left: 0;">
            Welcome to the ListKart Help Center! Here you'll find easy answers to common questions and simple guides on how to use the app effectively.
        </p>

        <section style="margin-bottom: 4rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>👋</span> What is ListKart?
            </h2>
            <div style="font-size: 1.125rem; line-height: 1.8; color: var(--text-color);">
                <p style="margin-bottom: 1.5rem;">
                    <strong>ListKart</strong> is your smart, privacy-first companion for organized shopping. It replaces messy paper lists with a clean, digital experience that helps you shop faster and smarter.
                </p>
                <ul class="check-list" style="padding-left: 1rem;">
                    <li style="margin-bottom: 1rem;"><strong>Smart Lists:</strong> Create lists for Groceries, Travel, Movies, and more.</li>
                    <li style="margin-bottom: 1rem;"><strong>Budget Tracking:</strong> Add prices to your items, and ListKart will automatically calculate your total before you reach the checkout.</li>
                    <li style="margin-bottom: 1rem;"><strong>Privacy First:</strong> Your data stays on your phone. No tracking, no ads.</li>
                </ul>
            </div>
        </section>

        <section style="margin-bottom: 4rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 1.5rem;">📱 How to Use ListKart</h2>
            <div style="display: grid; gap: 2rem;">
                <div style="padding: 1.5rem; background-color: var(--bg-secondary); border-radius: 16px;">
                    <h3 style="margin-bottom: 0.75rem; font-size: 1.25rem; color: var(--primary-color);">How to Create a New List</h3>
                    <p>Tap the big <strong>"+" (Plus)</strong> button on the home screen, give your list a name, and hit Create. Your new list is ready in seconds.</p>
                </div>
                <div style="padding: 1.5rem; background-color: var(--bg-secondary); border-radius: 16px;">
                    <h3 style="margin-bottom: 0.75rem; font-size: 1.25rem; color: var(--primary-color);">How to Add Items</h3>
                    <p>You can <strong>Type</strong>, <strong>Scan</strong> with your camera, or use <strong>Voice</strong> to add items. You can even say multiple items like "Milk, Bread, Eggs" and we'll add them separately.</p>
                </div>
                <div style="padding: 1.5rem; background-color: var(--bg-secondary); border-radius: 16px;">
                    <h3 style="margin-bottom: 0.75rem; font-size: 1.25rem; color: var(--primary-color);">How to Share a List</h3>
                    <p>Open a list, tap the 3-dots menu, and select <strong>"Share"</strong>. Send the unique link to family or friends via WhatsApp or SMS.</p>
                </div>
            </div>
        </section>

        <section style="margin-bottom: 4rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 1.5rem;">🔒 Privacy &amp; Data</h2>
            <div style="display: grid; gap: 1.5rem;">
                <div style="border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1.5rem;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-color);">Q: Do you track what I buy?</h4>
                    <p style="color: var(--text-light); line-height: 1.6;">A: No. Your shopping lists are yours alone. We don't build a profile of your habits to sell to advertisers.</p>
                </div>
                <div style="border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1.5rem;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-color);">Q: Do I need an account?</h4>
                    <p style="color: var(--text-light); line-height: 1.6;">A: No. You can use all features without ever creating an account, ensuring complete anonymity.</p>
                </div>
                <div style="border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1.5rem;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-color);">Q: Is my personal data safe?</h4>
                    <p style="color: var(--text-light); line-height: 1.6;">A: Yes. Your data primarily lives locally on your device, which is the safest place for it.</p>
                </div>
            </div>
        </section>

        <div style="margin-top: 4rem; padding: 3rem 2rem; background-color: var(--primary-color); color: white; border-radius: 24px; text-align: center;">
            <h3 style="font-size: 1.75rem; margin-bottom: 1.5rem;">Still have questions?</h3>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9;">Our team is here to help you get the most out of ListKart.</p>
            <a href="mailto:support@getlistkart.com" style="display: inline-flex; padding: 1rem 2.5rem; background-color: white; color: var(--primary-color); border-radius: 50px; font-weight: 800; text-decoration: none; transition: transform 0.2s;">
                Email Support
            </a>
        </div>
    </div>
</div>`;

let faqHtml = fs.readFileSync('faq.html', 'utf8');
faqHtml = faqHtml.replace(/<main>[\s\S]*?<\/main>/, `<main>\n${faqContent}\n    </main>`);
faqHtml = faqHtml.replace('<title>Blog - ListKart</title>', '<title>FAQ - ListKart</title>');
fs.writeFileSync('faq.html', faqHtml, 'utf8');

// 2. Blog reordering
let blogGrid = `
                <!-- Blog Post 1 -->
                <a href="blog/multilingual-shopping-list.html" class="blog-card">
                    <div class="blog-card-image" style="background-color: transparent; overflow: hidden; padding: 0;">
                        <img src="assets/blog-cover.jpg?v=3" alt="Multilingual Shopping List iOS Android" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="blog-card-content">
                        <span class="blog-card-tag" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); color: #059669;">Global</span>
                        <h2 class="blog-card-title">How ListKart Bridges the Language Gap with Native Support</h2>
                        <p class="blog-card-excerpt">Shopping in a globalized world shouldn't mean struggling with translations. Discover how ListKart breaks language barriers supporting 40+ native languages...</p>
                        <div class="blog-card-footer">
                            <span>Mar 1, 2026</span>
                            <span class="read-more">Read Article &rarr;</span>
                        </div>
                    </div>
                </a>

                <!-- Blog Post 2 -->
                <a href="blog/budget-tracking-shopping-list.html" class="blog-card">
                    <div class="blog-card-image" style="background-color: transparent; overflow: hidden; padding: 0;">
                        <img src="assets/blog-budget-tracker.jpg?v=1" alt="Budget Tracker App" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="blog-card-content">
                        <span class="blog-card-tag" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); color: #3b82f6;">Budgeting</span>
                        <h2 class="blog-card-title">Master Your Spending: Using ListKart as a Smart Budget Tracker</h2>
                        <p class="blog-card-excerpt">Learn how to track your shopping budget effortlessly. Discover features like pie-charts, category-wise spending, and budget limits.</p>
                        <div class="blog-card-footer">
                            <span>Feb 28, 2026</span>
                            <span class="read-more">Read Article &rarr;</span>
                        </div>
                    </div>
                </a>

                <!-- Blog Post 3 -->
                <a href="blog/best-shopping-list-app-2026.html" class="blog-card">
                    <div class="blog-card-image" style="background-color: transparent; overflow: hidden; padding: 0;">
                        <img src="assets/blog-cover.jpg?v=2" alt="Best Shopping List App" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="blog-card-content">
                        <span class="blog-card-tag">Productivity</span>
                        <h2 class="blog-card-title">Best Shopping List App in 2026 – Why ListKart is the Smartest Choice</h2>
                        <p class="blog-card-excerpt">Forgetting items while shopping is one of the most common daily problems. Discover why ListKart is designed to make everyday planning effortless.</p>
                        <div class="blog-card-footer">
                            <span>Feb 27, 2026</span>
                            <span class="read-more">Read Article &rarr;</span>
                        </div>
                    </div>
                </a>

                <!-- Placeholder for future blog post -->
                <div class="blog-card" style="opacity: 0.6; pointer-events: none; border: 1px dashed rgba(0,0,0,0.1); background: transparent; display: flex; align-items: center; justify-content: center; min-height: 400px;">
                    <div style="text-align: center; color: var(--text-light);">
                        <div style="font-size: 2rem; margin-bottom: 1rem;">✍️</div>
                        <p style="font-weight: 500;">More articles coming soon!</p>
                    </div>
                </div>
`;
let blogHtml = fs.readFileSync('blog.html', 'utf8');
blogHtml = blogHtml.replace(/<div class="blog-grid">[\s\S]*?<\/div>\s*<\/section>/, `<div class="blog-grid">\n${blogGrid}\n            </div>\n        </section>`);
fs.writeFileSync('blog.html', blogHtml, 'utf8');

// 3. Navigation update
function fixNav(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Add FAQ before Blog if it doesn't exist
    if (!html.includes('FAQ</a>')) {
        let blogLinkMatch = html.match(/<a href="[^"]*blog\.html">Blog<\/a>/);
        if (blogLinkMatch) {
             let prefix = file.includes('blog/') || file.includes('blog\\\\') ? '../' : '';
             html = html.replace(blogLinkMatch[0], `<a href="${prefix}faq.html">FAQ</a>\n                ${blogLinkMatch[0]}`);
        }
    }
    
    fs.writeFileSync(file, html, 'utf8');
}

const files = ['index.html', 'faq.html', 'blog.html', 'privacy.html', '404.html'];
files.forEach(fixNav);

if (fs.existsSync('blog')) {
    const blogFiles = fs.readdirSync('blog');
    blogFiles.forEach(f => {
        if(f.endsWith('.html')) fixNav(path.join('blog', f));
    });
}

console.log("Updates applied successfully.");

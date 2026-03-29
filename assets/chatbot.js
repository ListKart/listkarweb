/* 
   Lista Chatbot v2.0 - Industry Standard 
   Expanded Logic: 50+ Keywords & Category Menus
*/

(function() {
    const chatbotData = {
        name: "Lista",
        greeting: "Hi there! I'm **Lista**, your personal shopping assistant. I can help you with features, pricing, and much more. What's on your mind? 😊",
        
        // Categorized knowledge base
        knowledge: {
            greetings: {
                keywords: ["hi", "hello", "hey", "hola", "namaste", "salam", "morning", "afternoon", "evening", "yo", "sup"],
                response: "Hello! I'm here to help you make the most of ListKart. How's your day going? 👋",
                showMenu: true
            },
            status: {
                keywords: ["how are you", "how's it going", "kaise ho", "fine", "ok", "good"],
                response: "I'm doing great, thank you for asking! I'm ready to help you organize your shopping. What can I do for you? ✨",
                showMenu: true
            },
            identity: {
                keywords: ["who are you", "what is your name", "koun ho", "naam", "your name"],
                response: "I'm **Lista**! I was created to help users understand ListKart's features and mission. Think of me as your smart shopping guide. 🤖"
            },
            features: {
                keywords: ["feature", "function", "what can it do", "kaise kaam karta hai", "smart features", "voice", "scan", "barcode", "aisle", "sorting"],
                response: "ListKart is packed with features:\n• **Smart Sorting**: Items group by aisles automatically.\n• **Voice Entry**: Just speak to add items.\n• **Barcode Scanner**: Scan products instantly.\n• **Smart Checklists**: Templates for health, parties, etc. 🛒",
                showMenu: true
            },
            pricing: {
                keywords: ["free", "cost", "paisa", "charge", "money", "price", "subscription", "paid", "buy"],
                response: "ListKart is **100% free**! No hidden costs, no subscriptions, and no credit card required. It's a gift to the global shopping community. 💰"
            },
            ads: {
                keywords: ["ads", "advertisement", "annoying", "clutter"],
                response: "Currently, ListKart is **completely ad-free**. We focus on a premium, clean experience. In the future, we might add tiny, non-intrusive ads to keep the servers running, but never the annoying ones! 🚫"
            },
            sharing: {
                keywords: ["share", "sync", "family", "partner", "wife", "husband", "friend", "send", "link"],
                response: "Sharing is simple! Open any list, tap the **Share Icon**, and send the link. Your partner will see updates in real-time as you shop! 👨‍👩‍👧‍👦"
            },
            offline: {
                keywords: ["offline", "no internet", "network", "signal", "wifi", "basement", "store"],
                response: "Yes! ListKart works perfectly offline. You can check off items in the store without any signal. It syncs with your family once you're back online. 📴"
            },
            privacy: {
                keywords: ["privacy", "data", "safe", "secure", "track", "storage", "personal"],
                response: "Your privacy is our priority. Most data stays **locally on your device**. We don't track your shopping habits or sell your data. Your lists are yours. 🔒"
            },
            languages: {
                keywords: ["language", "hindi", "marathi", "gujarati", "tamil", "telugu", "spanish", "french", "global", "tongue"],
                response: "ListKart supports **53+ languages**! You can write in your native language and the app understands. It's truly a global tool. 🌐"
            },
            creator: {
                keywords: ["who made", "creator", "developer", "owner", "solo"],
                response: "ListKart was built with love by a solo developer who wanted a better, cleaner shopping experience for everyone. ❤️"
            },
            devices: {
                keywords: ["android", "iphone", "ios", "desktop", "phone", "pc", "mac"],
                response: "It's available on **Android** (Play Store) and works as a web-app on **iOS & Desktop**. Just visit our homepage! 📱"
            },
            support: {
                keywords: ["help", "support", "bug", "problem", "issue", "contact", "email"],
                response: "Need help? Email us at **support@getlistkart.com**. We're always happy to assist! 📧"
            },
            thanks: {
                keywords: ["thanks", "thank you", "shukriya", "dhanyawad", "awesome", "great", "nice", "love it"],
                response: "You're very welcome! I'm glad I could help. Enjoy your shopping! 😊"
            },
            bye: {
                keywords: ["bye", "see ya", "goodbye", "chalo", "later"],
                response: "Goodbye! Have a productive day and happy shopping! 👋"
            }
        },

        // Top level categories for the Menu
        categories: [
            { id: 'features', label: '🛒 Smart Features' },
            { id: 'pricing', label: '💰 Pricing & Ads' },
            { id: 'sharing', label: '👨‍👩‍👧‍👦 Family Sync' },
            { id: 'offline', label: '📴 Offline Mode' },
            { id: 'privacy', label: '🔒 Privacy' },
            { id: 'languages', label: '🌐 53+ Languages' },
            { id: 'support', label: '📧 Contact Support' }
        ],

        defaultResponse: "I'm still learning! You can find more detail on our <a href='faq.html' style='color:var(--primary-color)'>FAQ page</a> or just ask about features, sharing, or pricing. 😊"
    };

    const body = document.body;
    
    // Create Launcher
    const launcher = document.createElement('button');
    launcher.className = 'chatbot-launcher';
    launcher.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.2L4,17.2V4h16V16z M7,9h10V7H7V9z M7,13h10v-2H7V13z"/></svg>`;
    body.appendChild(launcher);

    // Create Window
    const windowEl = document.createElement('div');
    windowEl.className = 'chatbot-window';
    windowEl.innerHTML = `
        <div class="chatbot-header">
            <div class="chatbot-header-info">
                <div class="chatbot-avatar">🤖</div>
                <div class="chatbot-header-text">
                    <h3>${chatbotData.name}</h3>
                    <div class="chatbot-status">Online</div>
                </div>
            </div>
            <button class="chatbot-close">×</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input-area">
            <input type="text" class="chatbot-input" placeholder="Type Hi or ask a question..." id="chatbot-input">
            <button class="chatbot-send" id="chatbot-send">
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
        </div>
    `;
    body.appendChild(windowEl);

    const messagesContainer = document.getElementById('chatbot-messages');
    const inputField = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const closeBtn = windowEl.querySelector('.chatbot-close');

    launcher.addEventListener('click', () => {
        windowEl.classList.toggle('active');
        if (windowEl.classList.contains('active') && messagesContainer.children.length === 0) {
            bootup();
        }
    });

    closeBtn.addEventListener('click', () => windowEl.classList.remove('active'));

    function bootup() {
        addMessage(chatbotData.greeting, 'bot');
        setTimeout(showMainMenu, 600);
    }

    function addMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `message message-${sender}`;
        msg.innerHTML = text.replace(/\n/g, '<br>');
        messagesContainer.appendChild(msg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return msg;
    }

    function showMainMenu() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'chatbot-menu-grid';
        
        chatbotData.categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'menu-item-btn';
            btn.innerText = cat.label;
            btn.onclick = () => {
                handleUserInput(cat.label);
                // Directly trigger the corresponding logic
                const responseObj = chatbotData.knowledge[cat.id];
                setTimeout(() => {
                    addMessage(responseObj.response, 'bot');
                    addMenuReturn();
                }, 500);
            };
            menuContainer.appendChild(btn);
        });
        
        messagesContainer.appendChild(menuContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function addMenuReturn() {
        const btn = document.createElement('button');
        btn.className = 'quick-reply-btn';
        btn.style.marginTop = '10px';
        btn.innerText = "🔙 Back to Menu";
        btn.onclick = showMainMenu;
        messagesContainer.appendChild(btn);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleUserInput(input) {
        if (!input.trim()) return;
        
        // Add user message if not already added by menu click
        if (input.indexOf('🛒') === -1 && input.indexOf('💰') === -1) {
            addMessage(input, 'user');
        } else {
            addMessage(input, 'user');
        }
        
        inputField.value = '';
        
        const lowerInput = input.toLowerCase();
        let found = false;

        // Logic for Bot response
        setTimeout(() => {
            for (const key in chatbotData.knowledge) {
                const item = chatbotData.knowledge[key];
                if (item.keywords.some(k => lowerInput.includes(k))) {
                    addMessage(item.response, 'bot');
                    if (item.showMenu) setTimeout(showMainMenu, 800);
                    else addMenuReturn();
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                addMessage(chatbotData.defaultResponse, 'bot');
                addMenuReturn();
            }
        }, 600);
    }

    sendBtn.addEventListener('click', () => handleUserInput(inputField.value));
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput(inputField.value);
    });

    // Close on mobile outside click
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && windowEl.classList.contains('active') && !windowEl.contains(e.target) && !launcher.contains(e.target)) {
            windowEl.classList.remove('active');
        }
    });
})();

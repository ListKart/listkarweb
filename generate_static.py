import os
import json
from bs4 import BeautifulSoup

def generate_static():
    locales_dir = "locales"
    output_base = os.getcwd()
    
    # Supported languages based on available JSON files
    languages = [f.split('.')[0] for f in os.listdir(locales_dir) if f.endswith('.json')]
    
    # Pages to translate (root level)
    root_pages = [f for f in os.listdir('.') if f.endswith('.html')]
    # Pages in subdirectories
    blog_pages = [os.path.join('blog', f) for f in os.listdir('blog') if f.endswith('.html')]
    join_pages = [os.path.join('join', f) for f in os.listdir('join') if f.endswith('.html')]
    
    all_pages = root_pages + blog_pages + join_pages

    for lang in languages:
        if lang == 'en': continue
        
        print(f"Processing language: {lang}")
        with open(os.path.join(locales_dir, f"{lang}.json"), 'r', encoding='utf-8') as f:
            translations = json.load(f)
            
        lang_dir = os.path.join(output_base, lang)
        if not os.path.exists(lang_dir):
            os.makedirs(lang_dir)
            
        # Also handle blog and join subdirs inside lang dir
        if not os.path.exists(os.path.join(lang_dir, 'blog')):
            os.makedirs(os.path.join(lang_dir, 'blog'))
        if not os.path.exists(os.path.join(lang_dir, 'join')):
            os.makedirs(os.path.join(lang_dir, 'join'))

        for page_path in all_pages:
            with open(page_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
            
            # Update HTML lang attribute
            html_tag = soup.find('html')
            if html_tag:
                html_tag['lang'] = lang
            
            # Find and replace translatable elements
            for element in soup.find_all(attrs={"data-i18n": True}):
                key = element['data-i18n']
                if key in translations:
                    # Replace text content
                    element.string = translations[key]
            
            # Special handling for meta tags (title, description)
            # These often don't have data-i18n but are critical for SEO
            # We use keys like [pagename]_page_title
            page_name = os.path.basename(page_path).replace('.html', '')
            title_key = f"{page_name}_page_title"
            if title_key in translations:
                title_tag = soup.find('title')
                if title_tag:
                    title_tag.string = translations[title_key]
            
            # Fix relative paths for assets (CSS, JS, Images)
            # Since these pages are now in /[lang]/ or /[lang]/blog/
            depth = page_path.count(os.sep) + 1 # +1 because of the /[lang]/ folder
            prefix = "../" * depth
            
            # Replace paths in link, script, img, a tags
            for tag in soup.find_all(['link', 'script', 'img', 'a']):
                attr = 'href' if tag.name in ['link', 'a'] else 'src'
                if tag.has_attr(attr):
                    val = tag[attr]
                    if not val.startswith(('http', '//', '#', 'mailto:')):
                        # If it's a relative path, prefix it
                        tag[attr] = prefix + val

            # Write translated file
            output_path = os.path.join(lang_dir, page_path)
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(soup.prettify())

if __name__ == "__main__":
    generate_static()

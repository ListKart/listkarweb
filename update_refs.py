import os
import re

def update_references(directory):
    # Pattern to match .png, .jpg, .jpeg extensions
    # We use a non-greedy match to avoid capturing too much if multiple occur on one line
    # and we look for common quote/whitespace delimiters
    pattern = re.compile(r'\.(png|jpg|jpeg)(?=[\s\"\'\)])', re.IGNORECASE)

    for root, dirs, files in os.walk(directory):
        # Skip .git and other hidden dirs
        if '.git' in root:
            continue
            
        for file in files:
            if file.lower().endswith(('.html', '.css', '.js', '.json')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                    
                    new_content = pattern.sub('.webp', content)
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated references in {path}")
                except Exception as e:
                    print(f"Failed to process {path}: {e}")

if __name__ == "__main__":
    current_dir = os.getcwd()
    update_references(current_dir)

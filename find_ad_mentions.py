import os
import re

patterns = [
    re.compile(r'ad-free', re.IGNORECASE),
    re.compile(r'ad free', re.IGNORECASE),
    re.compile(r'no ads', re.IGNORECASE),
    re.compile(r'ads-free', re.IGNORECASE),
    re.compile(r'without ad', re.IGNORECASE),
    re.compile(r'विज्ञापन-मुक्त', re.IGNORECASE),
    re.compile(r'कोई विज्ञापन नहीं', re.IGNORECASE),
    re.compile(r'बिना विज्ञापन', re.IGNORECASE),
]

root_dir = r"d:\My App\GetListKart"
exclude_dirs = {'.git', 'node_modules', 'assets', 'public'}

# Let's find language dirs (any dir that is 2 characters or pt-BR)
all_dirs = [d for d in os.listdir(root_dir) if os.path.isdir(os.path.join(root_dir, d))]
lang_dirs = {d for d in all_dirs if len(d) == 2 or d == 'pt-BR'}

exclude_dirs.update(lang_dirs)

print("Searching English files and locales...")

results = []

# Search root files
for f in os.listdir(root_dir):
    if f.endswith('.html') or f.endswith('.js') or f.endswith('.py'):
        path = os.path.join(root_dir, f)
        with open(path, 'r', encoding='utf-8', errors='ignore') as file:
            for i, line in enumerate(file, 1):
                for p in patterns:
                    if p.search(line):
                        results.append((os.path.relpath(path, root_dir), i, line.strip()))
                        break

# Search blog/ and join/ folders (English only)
for sub in ['blog', 'join']:
    sub_path = os.path.join(root_dir, sub)
    if os.path.exists(sub_path):
        for f in os.listdir(sub_path):
            if f.endswith('.html'):
                path = os.path.join(sub_path, f)
                with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                    for i, line in enumerate(file, 1):
                        for p in patterns:
                            if p.search(line):
                                results.append((os.path.relpath(path, root_dir), i, line.strip()))
                                break

# Search locales/
locales_path = os.path.join(root_dir, 'locales')
if os.path.exists(locales_path):
    for f in os.listdir(locales_path):
        if f.endswith('.json'):
            path = os.path.join(locales_path, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                for i, line in enumerate(file, 1):
                    for p in patterns:
                        if p.search(line):
                            results.append((os.path.relpath(path, root_dir), i, line.strip()))
                            break

print(f"Found {len(results)} matches.")
for file, line_num, content in results[:100]:
    print(f"{file}:{line_num}: {content[:100]}")

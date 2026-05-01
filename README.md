# NoteVerse ✨

A next-generation, feature-rich note-taking web app that runs entirely in your browser — no sign-up, no server, no data leaves your device.

🌐 **Live demo:** [note.sumityadav.com.np](https://note.sumityadav.com.np)

---

## ✨ Features

### 📝 Rich Text Editing
- Full-featured WYSIWYG editor with a floating toolbar
- Block types: Heading 1–4, Paragraph, Code Block, Blockquote
- Inline formatting: **Bold**, *Italic*, <u>Underline</u>, ~~Strikethrough~~, Superscript, Subscript
- Text & highlight color pickers
- Font family and font size controls
- Text alignment (left, center, right)

### 📋 Content Blocks
- Bullet lists, numbered lists, and interactive checklists
- Insert tables, images, horizontal dividers, and code blocks
- Insert links with a handy link dialog
- Emoji picker
- Slash command palette (`/`) for quick block insertion

### 🗂️ Note Management
- Create, edit, delete, and restore notes (with Trash)
- Pin important notes to the top
- Color-code notes (Red, Amber, Green, Blue, Purple, Pink)
- Add and filter notes by **tags**
- Sort by Last Modified, Created, or Title A–Z
- Switch between list and grid view
- Full-text search across all notes (Ctrl+F)
- Right-click context menu for quick actions

### 💾 Storage & Import / Export
- Auto-saves to **localStorage** — no account needed
- Export notes as HTML, Markdown (`.md`), Plain Text, or JSON
- Import `.txt`, `.md`, or `.html` files

### 🎨 Themes & Modes
| Theme | Description |
|-------|-------------|
| 🌑 Dark | Default dark theme |
| ☀️ Light | Clean light theme |
| 📜 Sepia | Warm sepia tone |
| 🌊 Ocean | Deep blue ocean theme |

- **Zen Mode** — distraction-free fullscreen writing (F11)
- **Focus Mode** — dims all paragraphs except the one you're typing in
- **Typewriter Mode** — keeps the active line vertically centered
- **Split Preview** — live Markdown-rendered preview alongside the editor
- **Outline Panel** — jump to any heading in the current note

### ⏱️ Productivity
- Built-in **Pomodoro Timer** (25 / 5 min work–break cycles)
- Word count, character count, estimated read time, and line number in the status bar
- Full keyboard shortcut support (press ⌨️ for the shortcut reference)

### ⌨️ Key Shortcuts
| Action | Shortcut |
|--------|----------|
| New note | Ctrl+Alt+N |
| Save | Ctrl+S |
| Search | Ctrl+F |
| Bold | Ctrl+B |
| Italic | Ctrl+I |
| Underline | Ctrl+U |
| Link | Ctrl+K |
| Zen Mode | F11 |
| Undo / Redo | Ctrl+Z / Ctrl+Y |

---

## 🚀 Getting Started

NoteVerse is a single HTML file — **no build step required**.

```bash
git clone https://github.com/rockerritesh/notepad.git
cd notepad
# Open index.html in any modern browser
open index.html
```

Or just visit the live site: [note.sumityadav.com.np](https://note.sumityadav.com.np)

---

## 🛠️ Tech Stack

- Vanilla **HTML / CSS / JavaScript** — zero dependencies
- `localStorage` for persistence
- `DOMParser`-based HTML sanitization
- GitHub Pages for hosting

---

## 📄 License

[MIT](LICENSE) © [rockerritesh](https://github.com/rockerritesh)

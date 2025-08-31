# Dario Patt — Portfolio

Curiosity-led. Reliable, versatile systems.
- NeuralMesh (cyan) for openness/curiosity; TrustRings (teal) for reliability/trust.
- Writing uses **Markdown files** rendered inside the page layout (no MDX).
- Newsletter at `/writing` -> `/api/subscribe` (wire to a provider via env).

## Develop
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Markdown posts
- Add `.md` files under `content/posts/` with YAML front matter:
  ```yaml
  ---
  title: "Post title"
  description: "Short summary"
  date: "2025-09-02"
  tags: ["systems"]
  ---
  ```
- They appear at `/writing/<slug>` using the standard site header and typography.

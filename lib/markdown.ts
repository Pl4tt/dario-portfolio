import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdownToHtml(md: string): string {
  const raw = marked.parse(md) as string;
  const clean = sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img', 'h1','h2','h3','h4','pre','code','hr','blockquote'
    ]),
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
      code: ['class'],
    },
    transformTags: {
      'a': sanitizeHtml.simpleTransform('a', { rel: 'nofollow noopener noreferrer', target: '_blank' }, true),
    }
  });
  return clean;
}

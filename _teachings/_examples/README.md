---
published: false
---

# al-folio course page examples (reference only)

These files are **not** published on the site (`published: false`, `example: true`). They are kept so you can copy the format when you add a real course.

## Use a course page on the site

1. Copy one of the `.md` files above to `_teachings/your-course-slug.md` (not under `_examples/`).
2. Edit frontmatter: set `published: true` or remove `published` and `example`, update `title`, `year`, `schedule`, etc.
3. On `_pages/teaching.md`, uncomment `{% include courses.liquid %}`.

See also [CUSTOMIZE.md — Creating a teachings collection](../../CUSTOMIZE.md#creating-a-teachings-collection).

## Preview an example locally (optional)

Set `published: true` on one example file and remove `example: true`, then rebuild. Move it back under `_examples/` when done.

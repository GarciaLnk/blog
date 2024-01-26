# Personal Blog

Personal blog built with Astro, blog posts coming soon™

## Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where any Astro/React/Vue/Svelte/Preact components should go.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. `getCollection()` retrieves posts from `src/content/blog/`, and are type-checked using a schema.

Any static assets, like images, are placed in the `public/` directory.

## Commands

| Command          | Action                                              |
| :--------------- | :-------------------------------------------------- |
| `pnpm install`   | Installs dependencies                               |
| `pnpm dev`       | Starts local dev server at `localhost:4321`         |
| `pnpm build`     | Builds a production site to `./dist/`               |
| `pnpm preview`   | Allows previewing a build locally, before deploying |
| `pnpm astro ...` | Runs CLI commands like `astro add`, `astro check`   |
| `pnpm format`    | Formats the codebase with Prettier                  |

## Credit

The theme used is based off [Charca's](https://github.com/Charca/astro-blog-template).

> "Storage as a service, network as a service, CPU as a service, your mom as a service..."
>
> — *nexovec, 2024* 

# Introduction

This is the third iteration of my quest for the holy grail - building a CRUD web app.

Previously, I have considered metaframeworks: [Next.js](https://github.com/ugurkellecioglu/next-14-lucia-auth-postgresql-drizzle-typescript-example/issues/1), [SvelteKit](https://github.com/edwardspresume/sveltekit-lucia-auth-v3-example/issues/3), and [Astro](https://github.com/aabbtree77/session-auth-starter). Before that, [MERN with vanilla Js](https://github.com/aabbtree77/miniguestlog).

The stack here splits an app into frontend (Vite + React) and backend (Hono + Drizzle + bun:sqlite). Authentication is session cookie-based user-password storage (hashing) and verification. Communication via the Fetch API (REST API).

This code is the frontend part. See [the accompanied backend](https://github.com/aabbtree77/auth-starter-backend).

```sh
bun install
bun run dev
```

If this breaks, start with `bun create hono my-app` and recreate the structure.    

Notice that I did not place `.env` inside `.gitignore`.

# Decisions Made

1. No emails, no password resets.

2. Only a single active user session is allowed.

3. Only `bun run dev`.

# Some Thoughts About (BE + FE) vs Metaframeworks

Pros (BE + FE):

- The Fetch API instead of obscure rushed components du jour.

- Much easier to understand and debug.

- More help from ChatGPT or DeepSeek.

Con (BE + FE):

- Separate github repos, runtimes, build systems, .env files, routing, hosting, documenting...

Some interesting cases to consider: PocketBase (BE + FE) and Payload CMS (Next.js).


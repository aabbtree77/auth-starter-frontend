> "Storage as a service, network as a service, cpu as a service, your mom as a service..."
>
> — *nexovec, 2024* 

# Introduction

This is the second iteration of my quest for the holy grail - the best way to build CRUD web apps.

Previously, I have considered metaframeworks: [Next.js](https://github.com/ugurkellecioglu/next-14-lucia-auth-postgresql-drizzle-typescript-example/issues/1), [SvelteKit](https://github.com/edwardspresume/sveltekit-lucia-auth-v3-example/issues/3), and [Astro](https://github.com/aabbtree77/session-auth-starter). However, they are not reliable.

Therefore, I have removed Astro by splitting everything into frontend (Vite + React) and backend (Hono + Drizzle + bun:sqlite). I have removed Lucia too. The DB is now an explicitly controlled system, not a connector/adapter thing.

This code is the frontend part. See [the accompanied backend](https://github.com/aabbtree77/auth-starter-backend).

```sh
bun install
bun run dev
```

If this breaks, start with `bun create hono my-app` and recreate the structure.    

Notice that I did not place `.env` inside `.gitignore`.

# Decisions Made

1. No emails and complex workflows, hence no password resets, might add a social login as an escape hatch some day.

2. Only a single active user session is allowed. Managing multiple sessions with multiple cookies with all the permutations and expiry times, do you really want to go there?

3. Only the `bun run dev` mode.

4. Almost no middleware.

# Some Thoughts About (BE + FE) vs Metaframeworks

Pros of (BE + FE):

- No need to dwell on what a server-side React is, could be, will be.

- Feels like learning what the web is, as opposed to, say, Next.js.

These advantages are huge, esp. when considering how broken everything is.

Cons of (BE + FE):

- Two projects instead of one. Separate github repos, build systems, .env shenanigans, BE vs FE routing, docs, hosting... With dev and prod branches this becomes four. 

- Some choice paralysis, but this holds mostly for the backend, and it is not very severe. Express vs say Hono, SQLite vs PostgreSQL, Drizzle with the SQL strings (select) vs Drizzle all the way (query), Bun vs Node.

- [A lot of people](https://2023.stateofjs.com/en-US/libraries/meta-frameworks/) are now pushing metaframeworks. Next.js is no Unity/Unreal, but still something to watch for.  


## SpecStory

## Vercel Deployment ESLint Error Fix (2/4/2025, 1:23:40 AM)

_**User**_

i try to deploy in vercel :

i try to deploy my next.js web into vercel and this error happen :

Failed to compile.
./app/about/page.tsx
16:87  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
Error: Command "npm run build" exited with 1

---

_**Assistant**_

I understand you're encountering an ESLint error during deployment to Vercel related to unescaped entities in your `about/page.tsx` file. Let me help you fix this issue.

First, let me check the content of your about page to see exactly where the problem is.

---

_****_

Read file: app/about/page.tsx

---

_****_



I see the issue. The error is related to unescaped apostrophes in your text content. Let me fix this by properly escaping the apostrophes in the about page.

---

_****_

```diff
              </p>
              <p className="mb-4">
-               Located in the heart of Terengganu, our nursery benefits from the region's rich soil and tropical climate,
+               Located in the heart of Terengganu, our nursery benefits from the region&apos;s rich soil and tropical climate,
                allowing us to grow healthy and robust plants.
              </p>
```

---

_****_



I've fixed the issue by replacing the unescaped apostrophe (`'`) with the HTML entity `&apos;` in the text content. This should resolve the ESLint error that was preventing the build from completing.

The error occurred because React requires special characters like apostrophes to be properly escaped in JSX to avoid potential parsing issues. You can use any of these methods to escape apostrophes in React:
- `&apos;` (what we used)
- `&lsquo;`
- `&#39;`
- `&rsquo;`

Try deploying to Vercel again - the build should now complete successfully. If you encounter any other similar issues with unescaped entities in other files, you can apply the same fix by replacing the apostrophes with `&apos;`.

Let me know if you need any further assistance or if you encounter any other deployment issues!

---



---


## 🛠️ Development Environment

- **Language**: TypeScript (`^5.0.0`)
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Data Fetching**: React Query (TanStack)
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint with `@typescript-eslint`
- **Formatting**: Prettier
- **Package Manager**: `npm` (preferred)

## 📂 Recommended Project Structure

```warp-runnable-command
.
├── app/                     # App Router structure
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
├── components/              # UI components (shadcn or custom)
├── hooks/                   # Custom React hooks
├── lib/                     # Client helpers, API wrappers, etc.
├── styles/                  # Tailwind customizations
├── tests/                   # Unit and integration tests
├── public/
├── .eslintrc.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

## 📦 Installation Notes

- Tailwind setup with `postcss`
- shadcn/ui installed with `npx shadcn-ui@latest init`
- React Query initialized with `<QueryClientProvider>`

## ⚙️ Dev Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Start**: `pnpm start`
- **Lint**: `pnpm lint`
- **Format**: `pnpm format`
- **Test**: `pnpm test`

## 🧠 Codex Usage

- Use `Codex /init` to create this file
- Run `Codex` in the root of the repo
- Prompt with: `think hard`, `ultrathink` for deep plans
- Compact with `Codex /compact`
- Use `Codex /permissions` to whitelist safe tools

## 📌 Prompt Examples

```warp-runnable-command
Codex, refactor `useUser.ts` to use React Query.
Codex, scaffold a new `Button.tsx` using shadcn/ui and Tailwind.
Codex, generate the Tailwind styles for this mockup screenshot.
Codex, build an API route handler for POST /api/user.
Codex, create a test for `ProfileCard.tsx` using RTL.
```

## 🧪 Testing Practices

- **Testing Library**: `@testing-library/react`
- **Mocking**: `msw`, `vi.mock()`
- **Test command**: `pnpm test`
- Organize tests in `/tests` or co-located with components

## 🧱 Component Guidelines

- Use `shadcn/ui` components by default for form elements, cards, dialogs, etc.
- Style components with Tailwind utility classes
- Co-locate CSS modules or component-specific styling in the same directory

## ⚛️ React Query Patterns

- Set up `QueryClient` in `app/layout.tsx`
- Use `useQuery`, `useMutation`, `useInfiniteQuery` from `@tanstack/react-query`
- Place API logic in `/lib/api/` and call via hooks
- Use query keys prefixed by domain: `['user', id]`

## 📝 Code Style Standards

- Prefer arrow functions
- Annotate return types
- Always destructure props
- Avoid `any` type, use `unknown` or strict generics
- Group imports: react → next → libraries → local

## 🔍 Documentation & Onboarding

- Each component and hook should include a short comment on usage
- Document top-level files (like `app/layout.tsx`) and configs
- Keep `README.md` up to date with getting started, design tokens, and component usage notes

## 🔐 Security

- Validate all server-side inputs (API routes)
- Use HTTPS-only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic

## 🧩 Custom Slash Commands

Stored in `.Codex/commands/`:

- `/generate-hook`: Scaffold a React hook with proper types and test
- `/wrap-client-component`: Convert server to client-side with hydration-safe boundary
- `/update-tailwind-theme`: Modify Tailwind config and regenerate tokens
- `/mock-react-query`: Set up MSW mocking for all useQuery keys
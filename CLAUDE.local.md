# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

### Technology Stack

- **Monorepo**: Turborepo with pnpm workspaces
- **Backend**: Fastify, TypeScript
- **Frontend**: Vue 3, Vite, TypeScript, Tailwind CSS 4
- **Database**: PostgreSQL with Drizzle ORM
- **UI Library**: Vue 3, Shadcn-vue, Tailwind CSS 4
- **Deployment**: Render.com

## Apps & Packages

### Apps
- **`apps/backend`**: Fastify API server with TypeScript. Handles authentication, business logic, and database operations using PostgreSQL with Drizzle ORM.
- **`apps/frontend`**: Vue 3 SPA with Vite, TypeScript, and Tailwind CSS 4. Consumes the backend API and uses the shared UI components.

### Packages
- **`packages/ui`**: Shared component library built with shadcn-vue and Tailwind CSS 4. Exports individual components (no barrel files) for optimal tree-shaking. Components are built as ES modules and consumed by frontend apps.
- **`packages/eslint-config`**: Shared ESLint configuration based on Anthony Fu's config with Prettier integration for Tailwind class ordering.

## Coding Standards

This is VERY IMPORTANT: YOU MUST before proceeding review @coding-styles.md to understand our standards.

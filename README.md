This is a [Next.js](https://nextjs.org) project using NextAuth and Prisma.

## Local Setup

1. Start a local Postgres with Docker:

```bash
npm run db:local:up
```

2. Create your local env file from the example and fill the auth secrets:

```bash
cp .env.local.example .env.local
```

3. Apply the Prisma migrations to the local database:

```bash
npm run db:migrate
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Useful database commands:

```bash
npm run db:studio
npm run db:local:logs
npm run db:local:down
```

## Production

Production uses Neon/Postgres through environment variables configured in Vercel. Keep `.env.local` for your local Docker database, and configure production envs separately in Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

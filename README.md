This is a [Typescript](https://www.typescriptlang.org/), [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [TailwindCSS](https://tailwindcss.com/)

## Plantilla De Next.Js con TailwindCSS

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador preferido

Puedes comenzar a editar esta pagina modificando el archivo: `pages/index.tsx`.

Esta plantilla esta usando [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para automaticamente usar la fuente Poppins, para cambiar de fuente dirijace: `pages/index.tsx linea: 4`

## Leer mas

Puedes Leer mas sobre Next.Js:

- [Next.js Documentacion](https://nextjs.org/docs)

Puedes tambien chequear el repositorio [Plantilla Next.Js, Repositorio](https://github.com/EdwinEspi18/Plantilla-NextJS) - cada feedback es recibido con amor.

## Deployar en Vercel

Facil de hacer el Build [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.Js.

## Prisma config

Next steps:

1. npx prisma
2. npx prisma init
3. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-star
   ted
4. Agregue el siguiente modelo de datos Prisma a su esquema Prisma en `prisma/schema.prisma`
5. npx prisma migrate dev --name init
6. npx prisma generate
7. npx ts-node index.ts

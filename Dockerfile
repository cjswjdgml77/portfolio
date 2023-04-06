FROM node:18-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs
EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
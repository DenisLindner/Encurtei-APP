FROM node:22-alpine3.22 AS BUILDER

WORKDIR /app

# Copia os arquivos de dependência e instala tudo
COPY package*.json ./
RUN npm install

# Copia todo o código do frontend e faz a build otimizada
COPY . .
RUN npm run build

# --- IMAGEM FINAL DE PRODUÇÃO ---
FROM node:22-alpine3.22

WORKDIR /app

# Avisa o NextJS que estamos em ambiente de produção
ENV NODE_ENV=production

# Copia da etapa BUILDER apenas os arquivos necessários para rodar
COPY --from=BUILDER /app/package*.json ./
# A pasta public não foi copiada porque no seu projeto ela não existe (o Git ignora pastas vazias)
COPY --from=BUILDER /app/.next ./.next
COPY --from=BUILDER /app/node_modules ./node_modules

# O NextJS usa nativamente a porta 3000
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "run", "start"]

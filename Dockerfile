# 使用 Node.js 镜像进行构建
FROM node:14 AS build

WORKDIR /app
COPY . .

# 安装依赖并构建
RUN npm install
RUN npm run build

# 使用 Nginx 提供服务
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

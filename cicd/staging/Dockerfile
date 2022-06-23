FROM node:14-slim

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app
COPY  package.*json .
COPY yarn*.lock .
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]

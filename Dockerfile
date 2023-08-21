# Step 1: Build the Angular app
FROM node:16 as build
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the app files
COPY . .

RUN npm install -g @angular/cli

CMD ng serve --host 0.0.0.0



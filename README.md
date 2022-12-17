# Poll App
This is a Poll app, it was built using Vue3 with composition API and Tailwindcss.

## Deployment URL
You can check the app deployed on https://taironcoelho.github.io/poll-app-vue3/

## Project setup
After cloning this repository you have 2 options to run it locally:

1 - Using your local `node` with `yarn`

2 - Using Docker

### Setup using local `node` and `yarn`
After cloning, access the the project folder and run:
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Setup using docker
After cloning this repository, access the the project folder and execute the following commands to build and start the container on port `8080`:

```
docker build -t <your-image-name> .
docker run -it -p 8080:8080 <your-image-name>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

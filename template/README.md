# <%= name %>

A full-featured Framework7 Vue with Webpack setup with hot-reload & css extraction. Based on [Vue Webpack Boilerplate](https://github.com/vuejs-templates/webpack)

## Usage

### 1. Instal dependencies

Go to the downloaded repository folder and run:
```
npm install
```

This will download latest version of Framework7, Framework7-Vue, Vue and required icon fonts (to `/src/fonts/`)

### 2. Run the app

```
npm run dev
```

App will be opened in browser at `http://0.0.0.0:8080/`

### 3. Build app for production

```
npm run build
```

The output will be at `www/` folder

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at http://0.0.0.0:8080
npm run dev

# build for production with minification
npm run build-prod
```

## Project Structure

* `src/index.html` - main app HTML
* `src/assets` - folder with static assets (images)
* `src/components` - folder with custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/pages` - app `.vue` pages
* `src/app.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/app.vue` - main app structure/component
* `/static/` - folder with extra static assets that will be copied into output folder

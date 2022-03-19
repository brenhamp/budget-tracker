const APP_PREFIX = 'FoodFest-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (e) {
    const FILES_TO_CACHE = [
        "../index.html",
        "./index.js",
        "./idb.js",
        "./schedule.html",
        "../css/styles.css",
        "../icons",
        "../../models/transaction.js",
        "../../routes/api.js"
      ];
})
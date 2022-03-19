const APP_PREFIX = 'BudgetTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
        "./index.html",
        "./js/index.js",
        "./js/idb.js",
        "./css/styles.css",
        "../routes/api.js",
        "./icons",
        "../models/transaction.js"
      ];    
      e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
});
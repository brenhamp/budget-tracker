self.addEventListener('install', function (e) {
    const FILES_TO_CACHE = [
        "../index.html",
        "./index.js",
        "./idb.js",
        "./schedule.html",
        "../css/styles.css",
        "./assets/css/bootstrap.css",
        "./assets/css/tickets.css",
        "./dist/app.bundle.js",
        "./dist/events.bundle.js",
        "./dist/tickets.bundle.js",
        "./dist/schedule.bundle.js"
      ];
})
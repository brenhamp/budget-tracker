self.addEventListener('install', function (e) {
    const FILES_TO_CACHE = [
        "../index.html",
        "./index.js",
        "./tickets.html",
        "./schedule.html",
        "./assets/css/style.css",
        "./assets/css/bootstrap.css",
        "./assets/css/tickets.css",
        "./dist/app.bundle.js",
        "./dist/events.bundle.js",
        "./dist/tickets.bundle.js",
        "./dist/schedule.bundle.js"
      ];
})
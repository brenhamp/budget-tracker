self.addEventListener('install', function (e) {
    const FILES_TO_CACHE = [
        "../index.html",
        "./index.js",
        "./idb.js",
        "./schedule.html",
        "../css/styles.css",
        "../icons",
        "../../models/transaction.js",
        "../../routes/api.js",
        "./dist/events.bundle.js",
        "./dist/tickets.bundle.js",
        "./dist/schedule.bundle.js"
      ];
})
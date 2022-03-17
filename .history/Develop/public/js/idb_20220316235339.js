let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_budget', { autoIncrement: true });
  };

  request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
      // uploadBudget();
    }
  };
  
  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };

  function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['new_budget'], 'readwrite');
  
    // access the object store for `new_budget`
    const budgetObjectStore = transaction.objectStore('new_budget');
  
    // add record to your store with add method
    budgetObjectStore.add(record);
  }
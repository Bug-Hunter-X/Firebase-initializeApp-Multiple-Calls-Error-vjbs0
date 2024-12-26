To fix this, ensure you call `initializeApp` only once. You can achieve this by checking if the app has already been initialized using a global variable or similar mechanism. Here's how you can modify your code:

```javascript
// multipleInitSolution.js
let app; // Global variable to store the Firebase app instance

const firebaseConfig = {
  // ... your Firebase configuration
};

if (!app) {
  app = firebase.initializeApp(firebaseConfig);
  console.log('Firebase app initialized successfully');
}

// Rest of your Firebase code here...
```
This improved version ensures that `initializeApp` is called only the first time the code executes, thereby preventing the error.
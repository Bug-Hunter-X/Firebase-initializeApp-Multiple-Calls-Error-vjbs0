# Firebase initializeApp Multiple Calls Error
This repository demonstrates a common error encountered when using the Firebase JavaScript SDK: calling `initializeApp` multiple times with different configurations.

The `multipleInit.js` file shows the problematic code that throws the error. The `multipleInitSolution.js` file demonstrates the corrected approach.

**Problem:** Calling `initializeApp` multiple times with different configurations can lead to unexpected behavior or outright failure.  Firebase requires a single, consistent initialization.

**Solution:**  Ensure you call `initializeApp` only once, typically at the start of your application.
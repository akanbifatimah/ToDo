
# Todo App

First Commit is a simple Todo List application built with React.js.

## Features
- Display a list of todo items.
- Add a new todo item.
- Mark a todo item as completed.
- Remove a todo item.
- Filter todo items by all, active, and completed.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
    npm install

## Running the App
npm start

## Running Tests
npm test


<!-- task 2 -->

## Testing

1. **Loading State**: Ensure "Loading... and lottie file for loading" appears while data is being fetched.
   - **Method**: Verify this is displayed when `setLoading(true)` is triggered in the `useEffect` try block.

2. **Error Handling**: Verify error messages appear for both server and custom errors.
   - **Method**: Test by entering a wrong URL or disconnecting from the internet to trigger error handling.
   - **Expected Outcome**: Ensure that appropriate error messages, such as server errors or custom error messages, are displayed.

3. **Todo Items**: Confirm only the first 10 todos are displayed.
   - **Method**: Switch to the "All" tab and check the total count of tasks.
   - **Expected Outcome**: Ensure that the count reflects only the first 10 todos fetched from the API.

### Additional Notes:
- **CSS**: Ensure that styles for error messages (`error` class) are correctly applied for visibility.
- **Functionality**: Validate the functionality of adding, marking as completed, and removing todos in conjunction with fetched data.



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

## login
Use any valid email address format e.g example@gmail.com
Use any value as Password e.g password

<!-- task 2 -->

## Testing

1. **Loading State**: Ensure "Loading... and lottie file for loading" appears while data is being fetched.
   - **Method**: Verify this is displayed when `setLoading(true)` is triggered in the `useEffect` try block.

2. **Error Handling**: Verify error messages appear for both server and custom errors.
   - **Method**: Test by entering a wrong URL or disconnecting from the internet to trigger error handling.
   - **Expected Outcome**: Ensure that appropriate error messages, such as server errors or custom error messages, are displayed.

3. **Todo Items**: Confirm only the first 5 todos are displayed.
   - **Method**: Switch to the "All" tab and check the total count of tasks.
   - **Expected Outcome**: Ensure that the count reflects only the first 5 todos fetched from the API.

### Additional Notes:
- **CSS**: Ensure that styles for error messages (`error` class) are correctly applied for visibility.
- **Functionality**: Validate the functionality of adding, marking as completed, and removing todos in conjunction with fetched data.

## Branching Strategy
Git Flow
- Git Flow is a branching model designed to provide a structured approach to managing branches in a Git repository. Here’s how it was implemented in this project:

- Main Branches:

- **master**: Represents the stable production-ready code. It only receives merges from development branche.
- **develop**: Integration branch where ongoing development and feature integration occurs. All feature branches are merged into develop

- Supporting Branches:

- **Feature branches**: Created off develop for developing new features. Each feature has its own branch and is merged back into develop upon completion.

## Running Unit Test
To run the unit tests for the application, use the following command:

      ```
      npm test
      ```

- This will execute all test files in the project. Ensure that you have installed all dependencies using:    

      npm install


You should see the results of the tests in the terminal, including any errors or failures.      

## Assumptions

- During the implementation, I made the following assumptions and decisions:

Dummy Token for Authentication: I used a dummy token (dummyToken = '123456789090') for authentication since no actual authentication endpoint was provided during development. This allowed me to simulate the authentication flow and test the application's behavior without relying on a real backend.

-  In a production environment, the server would typically provide a JWT token for secure authentication.
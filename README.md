
# React Native CRUD App with Redux Toolkit

This is a simple CRUD (Create, Read, Update, Delete) application built with React Native and Redux Toolkit. The app allows you to manage a list of items by performing CRUD operations. It utilizes Redux Toolkit for state management and Axios for API communication.

## Features

- Fetch and display a list of items from a mock API
- Create a new item
- Update an existing item
- Delete an item

## Requirements

- Node.js (v14 or above)
- React Native (v0.64 or above)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install the dependencies:

```bash
npm install
```

3. Start the Metro bundler:

```bash
npx react-native start
```

4. Run the app on an Android emulator or connected device:

```bash
npx react-native run-android
```

## API Mocks

The app uses mock API functions to simulate the backend operations. You can find the API mock functions in the `api.js` file. By default, it assumes the API is running on `http://localhost:8000`. Make sure to adjust the API URL and endpoints in the `api.js` file if needed.

## Project Structure

- `App.js`: The entry point of the application, responsible for rendering the main screens.
- `ItemListScreen.js`: Displays the list of items and handles the item deletion.
- `ItemCreateScreen.js`: Provides a form to create a new item.
- `store.js`: Configures the Redux store and defines the items slice with reducers and async thunks.
- `api.js`: Contains mock API functions for CRUD operations.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
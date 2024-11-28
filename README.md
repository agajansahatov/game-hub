# GameHub

GameHub is a modern front-end web application designed to browse and discover games. Built with React and TypeScript, this project demonstrates my strong understanding of functional components, state management, data fetching, and styling. It is a code-along learning project based on Mosh Hamedani's "React 18" course at: [Code with Mosh](https://codewithmosh.com/)

## Live Demo

Check out the live version at: [GameHub](https://game-hub-three-kohl.vercel.app/)

## Features

- **Game Listing**: Browse through a variety of games.
- **Infinite Scrolling**: Load games dynamically as you scroll.
- **Filtering**: Filter games by genre, platform.
- **Sorting**: Order the list of games by different categories.
- **Searching**: Seach games by entering a word.
- **Visiting game details**: Hover over on a game card to the beautiful transition and then click on it to see the details of the game you want.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Chakra UI
- **State Management**: Zustand
- **Data Fetching**: Axios and React Query
- **Routing**: React Router

## Key Concepts Covered

- Building reusable functional components
- State management with hooks (`useState`) and Zustand
- Form handling with React Hook Forms and validation using Zod
- Connecting to APIs using Axios and React Query for data fetching and caching
- Routing with React Router
- Responsive UI design with Chakra UI
- Best practices for clean and maintainable code

## Getting Started

### Prerequisites

- Make sure the Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/agajansahatov/game-hub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd game-hub
   ```
3. Clone the repository:
   ```bash
   npm install
   ```
4. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
5. Add the API key to src/services/api-client.ts

### Running the App

- To start the development server:

  ```bash
  npm run dev
  ```

- To build the project:

  ```bash
  npm run build
  ```

- To preview the production build:

  ```bash
  npm run preview
  ```

### Folder Structure

```bash
src/
├── assets/        # Static assets
├── components/    # Reusable components
├── data/          # Static data
├── entities/      # Entity interfaces
├── hooks/         # Server state hooks
├── pages/         # Application pages
├── services/      # API services
index.css          # Custom styles
main.tsx           # Main Application
routes.tsx         # React Router Routes
store.ts           # Zustand stores
theme.ts           # Chakra UI theme config
vite-env.d.ts
```

### Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request.

### Acknowledgements

This project was inspired by Mosh Hamedani's React courses on [Code with Mosh](https://codewithmosh.com/)

# Memory Card Game

A simple memory card game built with React. Click on each card only once—if you click the same card twice, your score resets! Try to get the highest score possible.

## Features

- 12 unique character cards
- Score and best score tracking
- Cards shuffle after every click
- Responsive layout

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/memory-card-game.git
   cd memory-card-game
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to play the game.

## Project Structure

```
src/
  ├── App.jsx           # Main app component
  ├── Components/
  │     ├── Body.jsx    # Card grid and shuffle logic
  │     └── Header.jsx  # Game title and score display
  └── Style/
        └── main.css    # Styling for the game
```

## How to Play

- Click on any card to score a point.
- After each click, the cards will shuffle.
- If you click the same card twice, your score resets to zero.
- Try to beat your best score!

## Customization

- You can change the card images and names in `src/Components/Body.jsx` by editing the `imgSrc` array.

## License

This project is for learning purposes.

import React from 'react';
import Board from './Components/Board.jsx';
import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TICK TAC TOE</h1>
      <Board />
    </div>
  );
};
export default App;

// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

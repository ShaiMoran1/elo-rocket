import { useRef } from 'react';
import './App.css'
import { Board } from './components/board/board'

function App() {

  const boardRef = useRef<{ switchOrientation: () => void }>(null);

  const handleSwitchClick = () => {
    // Call child function from parent
    boardRef.current?.switchOrientation();
  };

  return (
    <>
      <div>
        <Board ref={boardRef}></Board>
        <button onClick={handleSwitchClick}>Switch Orientation</button>
      </div>
    </> 
  )
}

export default App

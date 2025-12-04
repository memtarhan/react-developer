// 1 - Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2 - Get a reference to the div with ID root 
const el = document.getElementById('root');

// 3 - Tell React to take control of that element 
const root = ReactDOM.createRoot(el);

// 4 - Create a component 
function App() {
  const message = 'Hello';
  const sum = 1 + 1;

  return (
  <>
  <div>
    <div>Message is: {message}</div>
    <div>Sum is: {sum}</div>
    <h3>Date is: {new Date().toLocaleDateString()}</h3>
  </div>
  </>
  );
}

// 5 - Show the component on the screen 
root.render(<App></App>)
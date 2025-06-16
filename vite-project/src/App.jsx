// import React from 'react'
// import JournalEntry from './JournalEntry'
// // import css from'./assets/app.css'


// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


import React from 'react';
import JournalEntry from './JournalEntry.jsx';
import data from './data.js';

export default function App() {
  const entries = data.map(entry => (
    <JournalEntry 
      key={entry.id}
      {...entry} 
    />
  ));
  
  return (
    <div className="app">
      <h1>My Travel Journal</h1>
      <div className="journal-list">
        {entries}
      </div>
    </div>
  );
}



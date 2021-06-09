import React from 'react'
import Header from "./components/Header";

function App() {
    const name = 'Russell'
    const x = false
  return (
    <div className="container">
     <Header  />
    </div>
  );
}

// class App extends React.Component {
//     render(){
//         return <h1>Hello From Class</h1>
//     }
// }

export default App;

import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState(  [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 1,
            text: 'Haircut',
            day: 'Feb 6th at 2:30pm',
            reminder: true
        },
    ])
  return (
    <div className="container">
     <Header  />
     <Tasks tasks={tasks} />
    </div>
  );
}

// class App extends React.Component {
//     render(){
//         return <h1>Hello From Class</h1>
//     }
// }

export default App;

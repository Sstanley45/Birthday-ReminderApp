import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Data from './components/Data'
import {Card} from './components/Card'

function App() {

  const [users, setUsers] = React.useState(Data)

  const newCard = users.map((data)=>{
    return <Card key ={data.id} 
    {...data}   
    />
  })
    
  const clearUsers = () => {
    setUsers([])
  }
  return (
    <>
    <div className="App">
      <Navbar />
      {users<1 && <h2>There Are No Current BirthDays!!</h2>}
      {newCard}
       {/*<p>{currentDate.toUTCString()}</p> ......Objects are not allowed as react child*/}
      <button className='btn' onClick ={clearUsers} >Clear All</button> 
    </div>
    
    </>
  );
}

export default App;

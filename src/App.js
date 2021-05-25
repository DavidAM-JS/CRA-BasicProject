import React, { Component } from 'react';
import './App.css';
import Hobbies from './components/Hobbies/Hobbies';
import User from './components/User/User';

function Avatar() {
  return <img
    src="https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg"
    alt="User Avatar"
    className="avatar">
  </img>
}

const count = (hobbies) =>{
  const activeHobbies = hobbies.filter((hobbie) =>{
    return hobbie.isActive; 
  });
 return activeHobbies.length;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Users React App</h1>
        <div className="users-container">
          <div className="user">
            <User
            name="David Almaraz"
            description="I'm mechatronic engineer"
            age="25"
            avatar={<Avatar />}>
            </User>
            <Hobbies
            hobbies={[
              {name: 'Soccer', description: 'I like soccer', isActive: true },
              {name: 'Music', description: 'I like playing piano', isActive: false },
              {name: 'Videogames', description: 'Playing Super Metroid', isActive: true }
            ]}
            showHobbies={true}
            count={count}
            />
          </div>
          <div className="user">
            <User
            name="Martin Sosa"
            description="I'm a doctor"
            age="29"
            avatar={<Avatar />}>
            </User>
            <Hobbies
            hobbies={[
              {name: 'Play Tennis', description: 'I like to participate on competitions', isActive: true },
              {name: 'Watching Series', description: 'Action series', isActive: true },
            ]}
            showHobbies={false}
            count={count}
            />
          </div>
          <div className="user">
            <User
            name="Alejandra Mendez"
            description="I'm a teacher"
            age="34"
            avatar={<Avatar />}>
            </User>
            <Hobbies
            hobbies={[
              {name: 'Watching Movies', description: 'I like horror movies', isActive: true },
              {name: 'Music', description: 'I like playing guitar', isActive: true },
              {name: 'Videogames', description: 'I like horror games', isActive: true }
            ]}
            showHobbies={true}
            count={count}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

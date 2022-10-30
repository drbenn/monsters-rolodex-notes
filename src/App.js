// Component only needed when using class based components, not functional
// import { Component } from 'react';

import { useState, useEffect }  from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


// ********************************************************************
//App as functional component
const App = () => {
  // useState is a hook, that interacts with state, but it can only talk to 1 value because its an array, not object
  // so multiple useStates will be required for multiple items in state
  // useState('') is defining inital state of searchField, which is blank string
  const [ searchField, setSearchField ] = useState(''); // [value, setValue]
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilterMonsters ] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
    // if dependecy value inside array below changes, useEffect will run, and as a result re-rendering page
    // if array left blank, the effect will only run once, with no reason to run again
  }, []);


  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters)
    // in this case the useEffect will trigger and re-render when the arrays for monsters or searchfield changes
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

    //replaced by useState hook
    // this.setState((state,props)=>{
    //   return {searchField};
    //   }, () => {
    //     console.log('after monster changed');
    //   })
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    
    <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder="Search Monsters" 
      className="monsters-search-box"/>

    <CardList monsters={filteredMonsters}/> 
  </div>
  )
}
// ********************************************************************




// ********************************************************************
// App as class component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//     console.log('constructor - Load step 1');
//   }

  
//   componentDidMount() {
//     console.log('componentDidMount - Load step 3 - once updated will usually go back to step 2 to render the updates called on componentDID Mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(()=> {
//       return {monsters:users}
//     },
//     ()=> {
//       console.log(this.state);
//     }
//     ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState((state,props)=>{
//       return {searchField};
//       }, () => {
//         console.log('after monster changed');
//       })
//   }

//   render() {
//     console.log('render - Load step 2');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
        
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder="Search Monsters" 
//           className="monsters-search-box"/>

//         <CardList monsters={filteredMonsters}/> 
//       </div>
//     );
//   }

// }
// ********************************************************************


export default App;

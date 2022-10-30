import { Component } from 'react'
import './search-box.styles.css';



// ********************************************************************
//App as functional component
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
        <input 
            className={`search-box ${className}`} 
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}
        />
)

// ********************************************************************





// ********************************************************************
// App as class component
// class SearchBox extends Component {

//     render() {

//         return ( 
//                 <input 
//                     className={`search-box ${this.props.className}`} 
//                     type='search' 
//                     placeholder={this.props.placeholder} 
//                     onChange={this.props.onChangeHandler}
//                 />
//                 );
//     }
// }
// ********************************************************************
export default SearchBox;


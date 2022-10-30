import { Component } from 'react';
import './card.styles.css';


// ********************************************************************
//App as functional component
const Card = ({monster}) => {
        const {id,name,email} = monster
        return (
        <div className="card-container"  key={id}>
        <img 
        alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2&size=180x180`} 
        />
        <h2>
            {name}
        </h2>
        <p >
            {email}
        </p>
    </div>
        )
    }


// ********************************************************************





// ********************************************************************
// App as class component
// class Card extends Component {
//     render() {
//         // const id = 1;
//         const { id, name, email } = this.props.monster;
//         console.log('Card Log');
//         console.log(this.props.monsterProps);
//         return (
//                 <div className="card-container"  key={id}>
//                         <img 
//                         alt={`monster ${name}`} 
//                         src={`https://robohash.org/${id}?set=set2&size=180x180`} 
//                         />
//                         <h2>
//                             {name}
//                         </h2>
//                         <p >
//                             {email}
//                         </p>
//                 </div>

//         )
//     }
// }
// ********************************************************************
export default Card;
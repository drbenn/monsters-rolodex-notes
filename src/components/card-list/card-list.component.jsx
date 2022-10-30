import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';


// ********************************************************************
//App as functional component
const CardList = ({monsters}) => (

        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card key={monster.id} monster={monster}/>
            })}
        </div>
)
// ********************************************************************





// ********************************************************************
// App as class component
// class CardList extends Component {

//     render() {
//         console.log(this.props);
//         const { monsters } = this.props;
        

//         return <div className='card-list'>
//                     {monsters.map((monster) => {
//                         return <Card monster={monster}/>
//                     })}
//                 </div>
//     }
// }

// ********************************************************************

export default CardList;
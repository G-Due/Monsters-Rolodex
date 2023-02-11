import { Component } from 'react'

import '../card-list/card.styles.css';
import '../card-list/card-list.styles.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div class='card-list'>
                {monsters.map((monster) => {
                    const { name, id, username } = monster;
                    return (
                        <div className='card-container'
                            key={id}>
                            <img
                                alt={`monster ${name} `}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{username}</p>
                        </div>
                    )
                })}
            </div>)
    }
}

export default CardList;
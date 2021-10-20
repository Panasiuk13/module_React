import React from 'react'
import axios from 'axios'

import Person from './Person'

class ListRickAndMorty extends React.Component {
    constructor(prop){
        super(prop)

        this.state = {
            info: null,
            persons: null
        }
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                this.setState({
                    info: response.data.info,
                    persons: response.data.results
                })
            })
    }

    deletePerson(id) {
        this.setState({
            persons: this.state.persons.filter(person => {
                return person.id !== id
            })
        })
    }

    render() {
        return(
            <div>
            <h1>Rick and Motry!</h1>

        { this.state.persons && this.state.persons.map(person => {

            return (
                <Person
            deletePerson={ this.deletePerson.bind(this) }
            person={ person }
            key={ person.id }
            />
        )
        }) }

    </div>
    )
    }
}

export default ListRickAndMorty
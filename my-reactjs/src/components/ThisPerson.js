import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';

class ThisPerson extends React.Component{
    constructor(prop){
        super(prop)

        this.state = {
            id: this.props.match.params.id,
            person: {}
        }
    }

    componentDidMount(){
        axios.get(`https://rickandmortyapi.com/api/character/${this.state.id}`)
            .then(response => {
                this.setState({
                    person: response.data
                })
            }).catch(() => {
            this.props.history.push('/404')
        })
    }

    render() {
        return (
            <div>
            <img src={ this.state.person.image } />
        <p>{ this.state.person.name }</p>
        </div>
    )
    }
}

export default withRouter(ThisPerson)
import React from 'react';

class Button extends React.Component {
    // Вызывается первым
    constructor(props){
        super(props)

        this.state = { disabled: false }
        console.log('constructor')
    }

    // Перед рендрингом компонента и при обновлении компонента
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')

        return null
    }

    // После рендригна компонента.
    // В этой функции делается запрос к серверу
    componentDidMount() {
        console.log('componentDidMount')
    }

    // Перед удалением из DOM
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // Вызывается при обновлении props или state
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')

        return true
    }

    // Вызывается перед рендрингом компонента.
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')

        return null
    }

    // Вызывается сразу после обновления компонента.
    // Если shouldComponentUpdate возвращает true
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    render(){
        console.log('render')
        return <button disabled={ this.state.disabled }>
            { this.props.value }
        </button>
    }
}

export default Button
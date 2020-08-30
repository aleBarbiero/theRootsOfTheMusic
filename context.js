import React, { Component } from 'react'
const ElementContext = React.createContext();

class ElementProvider extends Component {
    render() {
        return (
            <ElementContext.Provider>
                {this.props.children}
            </ElementContext.Provider>
        )
    }
}

export default ElementProvider;

const ElementConsumer = ElementContext.Consumer;

export function withElementconsumer(Component){
    return function ConsumerWrapper(props){
        return(
            <ElementConsumer>
                {value => <Component {...props} context={value}/>}
            </ElementConsumer>
        )
    }
}
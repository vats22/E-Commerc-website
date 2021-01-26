import React, { Component } from 'react'

const ProductContext = React.createContext();
//PROVIDER.
//CONSUMER.

 class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="Hii.. I am VATSAL">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
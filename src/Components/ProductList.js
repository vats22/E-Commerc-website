import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import Product from './Product';
import Title from './Title';
export default class ProductList extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="px-5">
                    <div className="container">
                        <Title name="MY" title="Product"/>
                    </div>
                    <div className="row">
                       <ProductConsumer>
                           {(vatsal)=> {
                            return<h1>{vatsal}</h1>
                            }}
                       </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
           
        )
    }
};
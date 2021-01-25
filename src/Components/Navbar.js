import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import { ButtonContainer, NavComponent } from './Navstyle';

export default class Navbar extends Component{
    render(){
        return(
            <NavComponent className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="cart" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="navbar-item ml-5">
                        <Link to="/" className="nav-link">
                            PRODUCTS
                        </Link>
                    </li>              
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className='fas fa-cart-plus btn-lg'/>
                        MY CART
                    </ButtonContainer>
                </Link>             
            </NavComponent>
        )
    }
}



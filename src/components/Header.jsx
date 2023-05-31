import React, { useEffect } from 'react'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const products = useSelector((state) => state.cartReducer.products);

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className="d-flex justify-content-between align-items-center header px-4">
            <img src={logo} alt="logo" />
            <nav>
                <ol className='d-flex justify-content-center align-items-center my-0'>
                    <Link to='/' className="menu-links">
                        <li className='mx-4 menu-items active'>All Products</li>
                    </Link>
                    <Link to='/' className="menu-links">
                        <li className='mx-4 menu-items'>Featured Products</li>
                    </Link>
                    <Link to='/cart' className="menu-links">
                        <li className='mx-4 menu-items active'><span className='mx-4'><img src={cart} alt="logo" /></span>
                            {products.length > 0 ? products.length : 0}
                        </li>
                    </Link>
                </ol>
            </nav>
        </div>
    )
}

export default Header
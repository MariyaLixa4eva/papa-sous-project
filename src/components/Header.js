import React, { useState } from "react";
import { FaShoppingBasket } from 'react-icons/fa';
import Order from "./Order";
import logo from './papasous.png'

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (
        <div>
        {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={ el.id } item={ el } />
        ))} 
        <p className="summa">Сумма: { new Intl.NumberFormat().format(summa) } ₽</p>
        </div>
    )
}
const showNothing = () => {
    return(
        <div className="empty">
            <h2>Товаров не выбрано</h2>
        </div>
    )
}

function Header (props) {
    let [cartOpen, setCartOpen] = useState (false);
    return(
        <header>
            <div><img src={logo} alt=''/></div>
            <div><p>Телефон: <a href="tel:399399">399-399</a></p></div>
            <div>
                <FaShoppingBasket className={`shopCartBtn ${ cartOpen && 'active' }`} onClick={() => setCartOpen(cartOpen = !cartOpen)} />
                {cartOpen && (
                <div className='shopCart'>
                    {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
                </div>
                )}
            </div>
        </header>
    )
}
export default Header;
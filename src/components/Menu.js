import { Component } from "react";

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'vlepeshke',
                    name: 'В лепешке'
                },
                {
                    key: 'burger',
                    name: 'Бургеры'
                },
                {
                    key: 'hot-dog',
                    name: 'Хот-доги'
                },
                {
                    key: 'wings-legs',
                    name: 'Крылья и ножки'
                },
                {
                    key: 'salad',
                    name: 'Салаты'
                },
                {
                    key: 'lunch',
                    name: 'Ланч'
                },
                {
                    key: 'potato',
                    name: 'Картофель'
                },
                {
                    key: 'sauces',
                    name: 'Соусы'
                },
                {
                    key: 'drink',
                    name: 'Напитки'
                },
            ]
        }
    }
    render() {
        return(
            <div className="categories">{ this.state.categories.map(el => (
                <div key={ el.key } onClick={ ()=> this.props.chooseCategory(el.key) }>{ el.name }</div>
            )) }</div>
        )
    }
}
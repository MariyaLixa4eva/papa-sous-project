import { Component } from "react";
import { FaRegWindowClose } from "react-icons/fa";
export class ShowItem extends Component {
    render() {
        return(
            <div className="fullItem">
                <div>
                <FaRegWindowClose className="btn" onClick={ () => this.props.onShowItem(this.props.item) } />
                <img src={ './img/' + this.props.item.img } alt='' onClick={ () => this.props.onShowItem(this.props.item) }/>
                <h2>{ this.props.item.title }</h2>
                <p>{ this.props.item.desc }</p>
                <b>{ this.props.item.price } ₽</b>
                <div className="add" onClick={ ()=>this.props.onAdd(this.props.item) }>+</div>
                </div>
            </div>
        )
    }
}
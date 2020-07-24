import React from 'react';
import Subtotal from './Subtotal';
import Total from './Total';


class Cart extends React.Component {
    render() {
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Subtotal 
                selected={this.props.selected}
                currencyFormatter={this.props.currencyFormatter}
            />
            <Total 
                selected={this.props.selected}
                currencyFormatter={this.props.currencyFormatter}
            />
          </section>
        )
    }
}

export default Cart;
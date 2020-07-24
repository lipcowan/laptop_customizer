import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';
import Header from './Header';
import FormOptions from './FormOptions/FormOptions';
import Cart from './Cart/Cart';


// This object will allow us to
// easily convert numbers into US dollar values

//considering moving this to cart component 
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

// App class should remain only

class App extends Component {
  state = {
    header: 'ELF Computing | Laptops',
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
  // ------------------------- move to Cart/Subtotal? -------------------------------------

    

  // -------------------------- move to Cart/Total? -----------------------

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

  // ---------------------------- Keep in App? -----------------------------

    return (
      <div className="App">
        <Header headerTitle={this.state.header}/>
        <main>
            <FormOptions 
            features={this.props.features} 
            currencyFormatter={USCurrencyFormat}
            updateFeature={this.updateFeature}
          />

          <Cart 
            total={total}
            currencyFormatter={USCurrencyFormat}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  } // ------------------- End of Render() -------------------------------------

  // --------------------- End of App ------------------------------------------
}

export default App;

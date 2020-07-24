import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FormOptions from './FormOptions/FormOptions';
import Cart from './Cart/Cart';

// App class should remain only ------------------------------------------------

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

  // This object will allow us to
  // easily convert numbers into US dollar values
  //leaving here since it's referenced in FormOptions and Cart
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header headerTitle={this.state.header}/>
        <main>
            <FormOptions 
            features={this.props.features} 
            currencyFormatter={this.USCurrencyFormat}
            updateFeature={this.updateFeature}
          />

          <Cart 
            currencyFormatter={this.USCurrencyFormat}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }

  // --------------------- End of App ------------------------------------------
}

export default App;

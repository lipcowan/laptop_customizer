import React from "react";
import Option from "./Option";


// template for each feature, cycle through the available features

//const features = Object.keys(this.props.features).map((feature, idx) => {

class Feature extends React.Component {
  render() {
    const featureHash = this.props.name + this.props.index;
    const options = this.props.options.map((item) => 
      <Option 
        item={item} 
        name={this.props.name} 
        currencyFormatter={this.props.currencyFormatter} 
        updateFeature={this.props.updateFeature}
      />
    );

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Feature;

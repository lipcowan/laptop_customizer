import React from 'react';
import slugify from 'slugify';

// template for each feature, cycle through the available features

//const features = Object.keys(this.props.features).map((feature, idx) => {
  
class Feature extends React.Component {
    
    render() {

    const featureHash = this.props.name + this.props.index
    const options = this.props.options.map(item => {
    const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.name)}
            onChange={e => this.props.updateFeature(this.props.name, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.currencyFormatter.format(item.cost)})
          </label>
        </div>
      );
    });

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

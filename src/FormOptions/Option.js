import React from 'react';
import slugify from "slugify";

export default function Option(props) {
    const {item, name} = props;
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(name)}
          onChange={(e) => props.updateFeature(name, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({props.currencyFormatter.format(item.cost)})
        </label>
      </div>
    );
}
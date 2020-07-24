import React from 'react';
import Feature from './Feature';

// import each of the component options 

export default function FormOptions(props){
 const features=Object.keys(props.features).map((name, index) => {
     let featureProps = {
        index, 
        name, 
        options: props.features[name],
        currencyFormatter: props.currencyFormatter,
        updateFeature: props.updateFeature
    }
    return (
        <Feature {...featureProps}/>
    )
 })
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    );
}
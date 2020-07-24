import React from 'react';

/* for practice, passed in props, easy to update site later 
if header changes we can setState 
- this is mainly for practice since it would likely be easier to update code here instead */

export default function Header(props){
    return (
        <header>
          <h1>{props.headerTitle}</h1>
        </header>
    )
}
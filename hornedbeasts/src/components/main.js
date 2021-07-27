import React from 'react';

import '../App.css';

import dataArray from '../assets/data';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

  render() {
    return(dataArray.map((value) =>
      <div>
        <main>
          <HornedBeasts
            title={value.title}
            imgUrl= {value.image_url}
            description = {value.description}/>
        </main>
      </div>)
    );
  }
}
export default Main;

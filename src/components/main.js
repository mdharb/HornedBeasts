import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';

import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

  render() {
    return(
      <div>
        <main>
          <CardColumns>
            {this.props.beasts.map((value) =>

              <HornedBeasts
                title={value.title}
                imgUrl= {value.image_url}
                description = {value.description}
                keyword = {value.keyword}
                horns = {value.horns}
                showModal={this.props.showModal}/>
            )};

          </CardColumns>
        </main>
      </div>
    );
  }
}

export default Main;

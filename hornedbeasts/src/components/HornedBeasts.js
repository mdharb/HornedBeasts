import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            favoriteCounter: 0
        };
    }


    favorite = () => {
        this.setState({
            favoriteCounter: this.state.favoriteCounter + 1
        });

        alert(this.state.favoriteCounter)
        
    }


    render() {


        return (

            <div>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} onClick = {this.favorite} />
                <p>{this.props.description}</p> */}

<CardColumns>
  <Card style={{width: '30rem', class: 'col d-flex justify-content-center'}}>
    <Card.Img variant="top" src={this.props.imgUrl} onClick = {this.favorite} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.description} <br /> <span>Likes &#10084;&#65039;: {this.state.favoriteCounter}</span>
      </Card.Text>

    </Card.Body>
  </Card>
  </CardColumns>
                
            </div>
        )
    }
};

export default HornedBeasts;

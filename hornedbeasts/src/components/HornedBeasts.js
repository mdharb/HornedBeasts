import React from 'react';

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
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} onClick = {this.favorite} />
                <p>{this.props.description}</p>
            </div>
        )
    }
};

export default HornedBeasts;
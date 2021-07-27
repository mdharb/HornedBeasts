import React from 'react';


import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Data from './components/data.json';
import SelectedBeasts from './components/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: Data,
      modal: false,
      favoritedBeast: {}
    };
  }

    showModal = (name) => {
      let favoritedBeast = Data.find(beast => beast.title === name);
      this.setState({favoritedBeast, modal: true });
    }

    hideModal = () => {
      this.setState({modal: false});
    }

    render() {
      return (
        <div>
          <Header/>
          <Main
            beasts = {this.state.beasts}
            showModal = {this.showModal}/>
          <SelectedBeasts
            favoritedBeast = {this.state.favoritedBeast}
            show = {this.state.modal}
            closeModal = {this.hideModal}/>
          <Footer/>
        </div>
      );
    }
}
export default App;

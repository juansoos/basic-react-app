import React, { Component } from 'react';
import Header from '../layout/components/header';
import HomeLayout from '../layout/components/home-layout';
import Hotel from '../hotels/components/hotel';

class Home extends Component {
  state = {
    hotels: []
  }
  handleOpen = () => {
    console.log('Hotel');
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/hotel/all')
      .then(res => res.json())
      .then(hotels => this.setState({ hotels }))
  }
  render() {
    return (
      <HomeLayout>
        <Header />
        {
          this.state.hotels.map(hotel => <Hotel key={hotel._id} name={hotel.name} price={hotel.price} handleClick={this.handleOpen} />)
        }
      </HomeLayout>
    );
  }
}

export default Home;

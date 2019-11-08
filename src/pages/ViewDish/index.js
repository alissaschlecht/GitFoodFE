import React, { Component } from 'react';

const url = 'https://git-food-api.herokuapp.com/api/dishes/';

class ViewDish extends Component {
  constructor(props){
    super(props);
    this.state = {
      dish: null,
    }
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    
    fetch(`${url}/${params.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ dish: data.dish });
      });
  }
  render() {

    return(
      <div>put dish info here</div>
    )
  }

}

export default ViewDish;
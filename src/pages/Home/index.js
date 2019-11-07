import React, { Component } from 'react';
import styles from './home.module.scss';
import Button from '../../components/Button';
import { Link } from "react-router-dom";

const url = 'https://git-food-api.herokuapp.com/api/dishes/';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: null,
      loading: false,
    };
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ dishes: data.dishes }));
  }

  render(){
    const { dishes, loading } = this.state;
    return (
      <div className={styles.home}>
        <div className='container'>
          { (dishes === null) ? (
            <>
              <h3>Looks like there's nothing added yet!</h3>
              <Link to="/add">Add a new Dish</Link>
            </>
          ) : (
            <>
              <ul>
                {dishes.map((dish) =>
                  <li key={dish.id}>{`${dish.name}`}</li>
                )}
              </ul>
              <Link to="/add">Add a new Dish</Link>
            </>
          )}
        </div>

      </div>
    )
  }
}

export default Home;


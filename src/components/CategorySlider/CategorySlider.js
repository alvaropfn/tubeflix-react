import React, {Component} from 'react'
import Slider from "react-slick";

import './CategorySlider.css'

export default class CategorySlider extends Component{
  constructor(props){
    super(props)
    this.state = {
      movieList: props.data,
      moviesPerRow: 5,
    }
  }
  

  render(){
    const NextArrow = function(props) {
      return (
        <div {...props}> {'>'} </div>
      );
    };
    
    const PrevArrow = function(props) {
      return (
        <div {...props}> {'<'} </div>
      );
    };

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    }

    const {movieList} = this.state

    return(
      <Slider
        className='category-slider'{...settings}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}>

        {movieList.map(movie => (
          <div key={movie.id} className='category-item'>
            <h3>{movie.title.split(" ", 2).join(" ")}</h3>
            <div>{movie.title}</div>
          </div>
        ))}
      </Slider>
  )}
}



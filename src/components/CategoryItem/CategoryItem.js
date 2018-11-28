import React, { Component } from 'react'
import CategorySlider from '../CategorySlider/CategorySlider'

import './CategoryItem.css'

export default class CategoryItem extends Component {

  render() {

    return (
      <div className='category'>
        <h3 className='category-title'>{this.props.title}</h3>
        <CategorySlider data={this.props.data}/>
      </div>
    )
  }
}

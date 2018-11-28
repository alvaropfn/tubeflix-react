import React, {Component} from 'react'
import api from '../../services/api'
import CategoryItem from '../CategoryItem/CategoryItem';


import './CategoryList.css'
export default class Categories extends Component{

  state = {
      categoryList:[],
      limit: 30,
      moviesPerRow: 10,
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const {categoryList, limit, moviesPerRow} = this.state;
    const response = await api.get(`/`)
    const data = response.data
    let localList = []
    for( let i = 0;
        i <= limit;
        i += moviesPerRow){
        localList = [
          ...localList,
          data.slice(i, i + moviesPerRow)
        ]
    }
    this.setState({ categoryList: localList })
  }

  render() {
    const {categoryList} = this.state;
    return(
      <div className='category-list'>
        {categoryList.map(movieList =>(
          <CategoryItem title={`Category ${movieList[0].title}`} key={movieList[0].id} data={movieList} />
        ))}
      </div>
    )
  }
}
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { changeFilterOptions } from '../../redux/actions';
import {helpers} from '../../js/helpers'

import filter from '../../img/icons/general/filter.png'
import back from '../../img/icons/general/back.png'

import '../../styles/news/filterCategory.scss'

const FilterCategory = () => {
    const dispatch = useDispatch()
    const filterOptions = useSelector(state => state.newsFilter)
    const [isActiveCategory, setIsActiveCategory] = useState(false)
    const [categories, setCategories] = useState([
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ])
    const [sortby, setSortBy]= useState([
        'relevancy',
        'popularity',
        'publishedAt'
    ])
    
    return (
        <div className={isActiveCategory?'category active':'category'}>
            <div className="category__button">
                <img src={isActiveCategory?back:filter} onClick={()=>setIsActiveCategory(!isActiveCategory)} alt="#" />
            </div>
            <ul className={isActiveCategory?'category__list active':'category__list'}>
                {
                    filterOptions.endpoint === 'top-headlines' ? 
                    categories.map(item=><li 
                        className={
                        filterOptions.category === item ?
                        "category__item active"
                        :
                        "category__item"
                    } 
                    onClick={()=>dispatch(changeFilterOptions('category', item))} 
                    key={item}
                    >{helpers.nameOfCategoriesHandler(item)}</li>)
                    :
                    sortby.map(item=><li className={
                        filterOptions.sortBy === item ?
                        "category__item active"
                        :
                        "category__item"
                    }
                    onClick={()=>dispatch(changeFilterOptions('sortBy', item))}
                    key={item}
                    >{helpers.nameOfCategoriesHandler(item)}</li>)
                }
            </ul>
        </div>
    )
}

export default FilterCategory
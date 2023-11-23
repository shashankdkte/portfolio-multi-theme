import React, { useState } from 'react'
import CategoryButton from '../category_button/CategoryButton';

const ProjectCategories = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterProjects(activeCat);
    }

  return (
    <div className='portfolio__categories'>
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
            ))
        }
    </div>
  )
}
export default ProjectCategories
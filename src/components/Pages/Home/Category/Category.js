import React from 'react';
import * as CategoriesData from '../../../../assets/data/category.json';
import Category from '../Category/CategoryWrapper';

export default class CategoryComponent extends React.Component {
  render() {
    return (
      <div className="categories">
        <div className="categories-desc">
          Post a popular category or fresh category task
        </div>
        <div className="categories-list">
          {CategoriesData.default.map(cat => (
            <Category {...cat} key={cat.cat_id} />
          ))}
        </div>
      </div>
    );
  }
}

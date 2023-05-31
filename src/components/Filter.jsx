import React from 'react'
import "./Filter.css"

const Filter = () => {
  return (
    <div className="d-flex justify-content-start align-items-start flex-column filter">
       <p className="filter-heading">Filter</p>

       <div className="materials py-4">
           <p className="material-heading filters-header">Material</p>
           <ol className='material-list'>
               <li className="filter-listitems active">All</li>
               <li className="filter-listitems">Cotton</li>
               <li className="filter-listitems">Cotton</li>
               <li className="filter-listitems">Cotton</li>
               <li className="filter-listitems">Cotton</li>
           </ol>
       </div>

       <div className="colors ">
           <p className="color-heading filters-header">Color</p>
           <ol className='color-list'>
               <li className="filter-listitems active">All</li>
               <li className="filter-listitems">Mint Green</li>
               <li className="filter-listitems">Blue</li>
               <li className="filter-listitems">Red</li>
           </ol>
       </div>

    </div>
  )
}

export default Filter
import React from 'react'
import './article.css'
const Article = ({imgUrl, date, title}) => {
  return (
    <div className='article'>
      <div className='article-image'>
        <img src={imgUrl} alt='articleImage'/>
      </div>
      <div className='article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
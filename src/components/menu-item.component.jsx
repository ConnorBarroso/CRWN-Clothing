import React from 'react'
import './component-styles/menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem =({name, imageUrl, size, tag, history, linkUrl, match}) =>{
    return(
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}  className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`) }
    >
    <div
        className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />
        <div className="content-container">
            <h1 className='title'>{name}</h1>
         <div className='subtitle'>{tag}</div>     
        </div>
    </div>
    )
}

export default withRouter(MenuItem);
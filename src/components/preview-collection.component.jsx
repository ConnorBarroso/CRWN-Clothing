import React from 'react';
import './component-styles/preview-collection.styles.scss'

const PreviewCollection = ({ title, items })=>(
    
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            
        {
            //PERFORMANCE CONCERN: ENTIRE ARRAY IS LOADED EVERY RENDER
            items.filter((item, idx) => idx < 4).map((item) =>(
                <div key={item.id}>{item.name}</div>
            ))
        }

        </div>
    </div>
)

export default PreviewCollection;
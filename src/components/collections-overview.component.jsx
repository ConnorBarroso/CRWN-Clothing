import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors'

import PreviewCollection from './preview-collection.component'

import './component-styles/collections-overview.styles.scss'

const CollectionsOverview = () =>{
    const collections = useSelector(selectCollectionsForPreview)

    return(
        <div className='collections-overview'>
             {
            collections.map(({id, ...otherCollectionProps}) =>(
                <PreviewCollection key={id}{...otherCollectionProps}/>
            ))
        }
        </div>
    )
}

export default CollectionsOverview
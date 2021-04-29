import React, { useState } from 'react'
import SHOP_DATA from './page-data/shop.data'
import PreviewCollection from '../components/preview-collection.component'

function ShopPage(){
    const [collections, setCollections] = useState(SHOP_DATA)
    
    return(
        <div className= 'shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <PreviewCollection key={id}{...otherCollectionProps}/>
            ))
        }
    </div>)
}

export default ShopPage;
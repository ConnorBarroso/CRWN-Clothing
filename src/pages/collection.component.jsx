import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollection } from '../redux/shop/shop.selectors'
import CollectionItem from '../components/collection-item.component'


import './page-styles/collection.styles.scss'


const CollectionPage = ({match})=>{

   const collectionId = match.params.collectionId
   
    const collection = useSelector( selectCollection( collectionId ))
    console.log(collection)
    
    const { title, items } = collection

    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className= 'items'>
                {
                    items.map( 
                        item => (<CollectionItem key={item.id} item ={item}/>)
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPage
import React from 'react'
import { Route } from 'react-router'
import CollectionPage from './collection.component'
import CollectionsOverview from '../components/collections-overview.component'
const ShopPage =({match})=>{
    
    return(
        <div className= 'shop-page'>
           <Route exact path={`${match.path}`} component= {CollectionsOverview} />
           <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
        </div>
    )
}

export default ShopPage;
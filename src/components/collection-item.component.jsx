import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/Cart/cart.actions'
import './component-styles/collection-item.styles.scss';
import CustomButton from './custom-button.component';

const CollectionItem =({item}) =>{
    const dispatch = useDispatch();
    const { addItem } = bindActionCreators(actions,dispatch)

    const { name, price, imageUrl } = item;
    
    return(
        <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}/>

        <div className='collection-footer'>
            <div className='name'>{name}</div>
            <div className='price'>{price}</div>
        </div>
        <CustomButton inverted onClick= {()=>addItem(item)}>Add to cart</CustomButton>
        
    </div>
    
    )
    
};

export default CollectionItem;
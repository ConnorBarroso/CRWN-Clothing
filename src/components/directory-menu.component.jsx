import React from 'react';
import { useSelector } from 'react-redux';
import  MenuItem  from './menu-item.component.jsx'
import './component-styles/directory-menu.styles.scss'
import { selectDirectorySections } from '../redux/directory/directory.selector.js';


const DirectoryMenu = ()=>{
    const directory = useSelector(selectDirectorySections)
 
    return(
    <div className='menu-wrapper'>
        {
            directory.map(({id, ...otherSectionProps}) =>(
                <MenuItem key={id} {...otherSectionProps}/>
        ))
        }
    </div>
    )
}
    

export default DirectoryMenu
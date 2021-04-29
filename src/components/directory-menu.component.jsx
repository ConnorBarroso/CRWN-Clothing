import React, {useState} from 'react';
import  MenuItem  from './menu-item.component.jsx'
import './component-styles/directory-menu.styles.scss'


function DirectoryMenu(){
    const [categories, setCategories] = useState(
        [
            {
              'name': 'HATS',
              'id' : 1,
              'imageUrl' : 'https://i.ibb.co/cvpntL1/hats.png',
              'tag': 'SHOP NOW',
              'linkUrl': 'hats'

            },
            {
              'name': 'SHOES',
              'id' : 2,
              'imageUrl' : 'https://i.ibb.co/0jqHpnp/sneakers.png',
              'tag': 'SHOP NOW',
              'linkUrl': 'shoes'
            },
            {
              'name': 'JACKETS',
              'id' : 3,
              'imageUrl' : 'https://i.ibb.co/px2tCc3/jackets.png',
              'tag': 'SHOP NOW',
              'linkUrl': 'jackets'
            },
            {
              'name': `MEN'S`,
              'id' : 4,
              'imageUrl' : 'https://i.ibb.co/R70vBrQ/men.png',
              'size': 'large',
              'tag': 'SHOP NOW',
              'linkUrl': 'mens'
            },
            {
              'name': `WOMEN'S`,
              'id' : 5,
              'imageUrl' : 'https://i.ibb.co/GCCdy8t/womens.png',
              'size': 'large',
              'tag': 'SHOP NOW',
              'linkUrl': 'womens'
            }
          
        ]
    )
 
    return(
    <div className='menu-wrapper'>
        {
            categories.map(({id, ...otherSectionProps}) =>(
                <MenuItem key={id} {...otherSectionProps}/>
        ))
        }
    </div>
    )
}
    

export default DirectoryMenu
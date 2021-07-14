const INITIAL_STATE = {
    sections:[
        {
          'name': 'HATS',
          'id' : 1,
          'imageUrl' : 'https://i.ibb.co/cvpntL1/hats.png',
          'tag': 'SHOP NOW',
          'linkUrl': 'shop/hats'

        },
        {
          'name': 'SHOES',
          'id' : 2,
          'imageUrl' : 'https://i.ibb.co/0jqHpnp/sneakers.png',
          'tag': 'SHOP NOW',
          'linkUrl': 'shop/shoes'
        },
        {
          'name': 'JACKETS',
          'id' : 3,
          'imageUrl' : 'https://i.ibb.co/px2tCc3/jackets.png',
          'tag': 'SHOP NOW',
          'linkUrl': 'shop/jackets'
        },
        {
          'name': `MEN'S`,
          'id' : 4,
          'imageUrl' : 'https://i.ibb.co/R70vBrQ/men.png',
          'size': 'large',
          'tag': 'SHOP NOW',
          'linkUrl': 'shop/mens'
        },
        {
          'name': `WOMEN'S`,
          'id' : 5,
          'imageUrl' : 'https://i.ibb.co/GCCdy8t/womens.png',
          'size': 'large',
          'tag': 'SHOP NOW',
          'linkUrl': 'shop/womens'
        }
      
    ]
};

const directoryReducer = (state =INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default directoryReducer
import React from 'react';

class cartItem extends React.Component{
    render(){
        return(
           <div className="cart-item">
               <div className="left-block">
                    <img style={styles.image} />
               </div>
               <div className="right-block">
                    <div style={ {fontSize:25} }>phone</div>
                    <div style={ {color:'#777'} }>Rs 999</div>
                    <div style={ {color:'#777'} }>Qty: 1</div>
                    <div className="cart-item-action">
                        <button>+</button>
                        <button>-</button>
                        <button>x</button>
                    </div>
               </div>
           </div> 
        );
    }
}

const styles={
  image:{
      height:110,
      width:110,
      borderRedius:4,
      background:'#ccc'
  }
}

export default cartItem;
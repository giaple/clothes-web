import React from 'react';

import classes from './CartItem.module.scss'
import image4 from "../../../assets/img/examples/studio-2.jpg";

const CartItem = () => {

    return (
        <div className={classes['cart-item']}>

            <img src={image4} alt={'test'} className={classes['item-img']}/>
            <div className={classes['item-info']}>
                <div className={classes['item-name']}>Test product name here</div>
                <div>
                    {`Màu: Vàng Đậm - Size: FreeSize`}
                </div>
                <div className={classes.divider}></div>
                <div className={classes['item-price']}>
                    <div>
                        Giá: 312,000
                        </div>
                    <input type='number'/>
                    <div> 1000000</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
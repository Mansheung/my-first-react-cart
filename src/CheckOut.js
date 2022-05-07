import React, { useContext, useState } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import QuantityBtn from './QuantityBtn'
import { CartContext } from './CartContext'
import { CartTotalContext } from './CartTotalContext'

export default function CheckOut() {
  
    const {cartItems} = useContext(CartContext)
    const {totalPriceInCart} = useContext(CartTotalContext)
  
    let cartEmpty = cartItems.length <= 0 ? true : false

    let grandTotal = cartItems.reduce((total,product)=>{
        return total += product.price*product.quantity
    },0)

    const freeShipingFee = 99
  
    return (
    <div>
        <Title mainTitle="你的購物車"/>
        
        {
            cartEmpty &&
            <div>
                <div>你的購物車沒有東西</div>
                <Link to = "/">返回產品列表</Link>
            </div>
            
        }
        
        {
            !cartEmpty &&
            <div>
                <div id="cartSection">
                    {
                        cartItems.map((product)=>(
                            <div key={product.id}>
                                <img src={process.env.PUBLIC_URL+'/my_first_cart_img/'+product.image}></img><br/>
                                品項：{product.name}<br/>
                                描述：{product.description}<br/>
                                價格：${product.price}<br/>
                                購買數量：{product.quantity}<br/>
                                <QuantityBtn productInfo={product}/>
                            </div>
                            ))
                    }
                </div>
                <div id="checkOutSection">
                    {
                        <div>
                            購買金額：{totalPriceInCart}<br/>
                        </div>

                    }
                    {
                        totalPriceInCart >= freeShipingFee ? 
                        <div>我們免費送貨</div> : 
                        <div>還差 ${freeShipingFee-totalPriceInCart} 免費送貨</div>
                    }
                </div>
            </div>
        }
    </div>
  )
}

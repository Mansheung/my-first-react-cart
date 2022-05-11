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
            <div class='row' style={{margin:'0 50px'}}>
                <div id="cartSection" class='col-8'>
                    {
                        cartItems.map((product)=>(

                            <div key={product.id} class="card mb-3" >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={process.env.PUBLIC_URL+'/my_first_cart_img/'+product.image} style={{maxWidth:'100%'}}></img>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>
                                            <p class="card-text">
                                                描述：{product.description}<br/>
                                                價格：${product.price}<br/>
                                                購買數量：{product.quantity}<br/>
                                            </p>
                                            <p class="card-text"><QuantityBtn productInfo={product}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                    }
                </div>
                <div id="checkOutSection" class='col-4'>



                    <div class="card" style={{width:'18rem'}}>
                        <div class="card-body">
                            <h5 class="card-title">我的購物車</h5>
                            <p class="card-text" style={{padding:'30px 0',lineHeight:'40px'}}>
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
                            </p>
                            <div class="total-price-button-decoration">
                                <Link to="/">繼續購物</Link>
                            </div>
                        </div>
                    </div>



                    
                    
                </div>
            </div>
        }
    </div>
  )
}

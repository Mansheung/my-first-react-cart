import React from 'react'
import { useContext , useState } from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const {cartItems,setCartItems} = useContext(CartContext)
    
    //檢查購物車中是否已有該產品
    //findIndex()
    //若在購物車中找到該產品，return 該產品 index 位置 0,1,2,3...
    //若購物車中尚未加入該產品，return -1
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart === -1) ? 0 : cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{
        
        //購物車中無此商品
        if(productIndexInCart === -1)
        {
            setCartItems(
                [{
                    id:productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1
                },...cartItems]
            )
        }
        //購物車中已有此商品
        else
        {
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setNumInCart(newCartArray)
        }
        
        setNumInCart(numInCart+1)
    }

    const handleSubtract = ()=>{

        if(cartItems[productIndexInCart].quantity === 1)
        {
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity --
            setNumInCart(newCartArray)
        }

        setNumInCart(numInCart-1)
    }

    return (
        <div>
            {
                (numInCart === 0) ?
                <button onClick={handleAdd}>加入購物車</button> :
                <div>
                    <span onClick={handleSubtract}>-</span>
                    <span>{numInCart}</span>
                    <span onClick={handleAdd}>+</span>
                </div>
            }
        </div>
    )
}

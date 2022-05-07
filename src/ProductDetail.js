import React, { useEffect,useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductDetail() {
    
    let params = useParams()
    let [productDetail,setProductDetail] = useState(null)
    
    useEffect(()=>{
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response=>response.json())
            .then(data=>{
                let productInfo = data.find((element)=>{
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    },[])
    
    /*
    let productList = [
        {"id" : 1, "name" : "蘋果", "price" : 5, "image" : "apple.jpg","description" : "新鮮蘋果50克，一日一蘋果，醫生遠離我"},
        {"id" : 2, "name" : "橙", "price" : 3, "image" : "orange.jpg","description" : "新鮮橙50克，又甜又好吃"},
        {"id" : 3, "name" : "芒果", "price" : 4, "image" : "mango.jpg","description" : "新鮮芒果500克，宜做甜品"},
        {"id" : 4, "name" : "西瓜", "price" : 20, "image" : "watermelon.jpg","description" : "新鮮西瓜2公斤，夏季必備"},
        {"id" : 5, "name" : "藍莓", "price" : 10, "image" : "blueberry.jpg","description" : "新鮮藍莓50克，補眼之寶"},
        {"id" : 6, "name" : "白蘿蔔", "price" : 5, "image" : "white-carrot.jpg","description" : "新鮮白蘿蔔1公斤，宜煲湯"},
    ]
     
     useEffect(()=>{
        productList.map((product)=>{
            if(product.id === params.id) {
                setProductDetail(product)
            }
        })
     })
     */
    
    

    return (
        <div>
            
            { productDetail &&

                <div>
            
                <Title mainTitle={productDetail.name+'產品資料'}/>

                <img src={process.env.PUBLIC_URL+'/my_first_cart_img/'+productDetail.image}></img><br/>
                <p>名稱：{productDetail.name}</p>
                <p>售價：${productDetail.price}</p>
                <p>描述：{productDetail.description}</p>


                <QuantityBtn productInfo={productDetail} />

                <Link to="/">回到產品列表</Link>

                </div>

            }

        </div>
    )
}

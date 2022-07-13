import { ProductCard } from "../components/productCard"
import  products  from "../product-data.json"

export const ProductListing =()=>{
    const arrOfProduct = Object.values(products)
    return(
        <div>
            <div className="grid product-page-layout m-4">
            {
                arrOfProduct.flat().map(item=>
                    {return(
                        <div key={item.id}>
                            <ProductCard productData={item} />
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}
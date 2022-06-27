import Layout from "../../components/Layout"
import Product from "../../components/Product"
import { getItemData, getPathsFromIds } from "../../lib/utils"

const ProductPage = ({productInfo}) => {
  return (
    <Layout title={productInfo.data.title}>
        <Product item={productInfo.data} showAs="Page"/>
    </Layout>
  )
}

export async function getStaticPaths(){
    const paths = await getPathsFromIds()

    return{
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const id = params.id
    const product = await getItemData(id)
  
    return{
        props:{
            productInfo: product
        }
    }
}

export default ProductPage
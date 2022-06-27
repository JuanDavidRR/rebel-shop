import {products} from "../lib/items";


export async function getItems (){
  return products
}

export async function getLatestItems(){
    const items = await getItems()
    return items.slice(0,4)
}

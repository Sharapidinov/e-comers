import React, {useEffect} from 'react';

import Card from "../compnents/Card";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, search} from "../redux/productsAction/productAction";

const Main = () => {

    const dispatch = useDispatch()
    const {products, cart, searchState} = useSelector(s => s.products)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(search(``))
    },[dispatch])

    return (
        <div className="grid px-8 sm:px-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {

                products?.filter(it => it.title.toLowerCase().includes(searchState.toLowerCase())).map(it => {
                    const count = cart[it.id]?.count || 0

                    return (
                        <Card key={it.id} count={count} it={it}/>
                    )
                })
            }
        </div>
    )
}

export default Main;
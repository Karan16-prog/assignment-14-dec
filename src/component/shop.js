import React, {Component} from "react";
import Product from './product.js'
import './shop.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useStateValue} from "./stateProvider.js";

const Shop = () => {
    const [data,setData] = useState([]);
    const [{basket}, dispatch] = useStateValue();

    //scroll save doesnt work
    const handleScrollPosition = () =>{
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem("scrollPosition");
        }
    }

    //scroll save doesnt work
    const handleClick = e => {
        sessionStorage.setItem("scrollPosition", window.pageYOffset);
    };


    useEffect(() => {
        const getProduct = async() =>{
        try{
            const baseURL = `https://fakestoreapi.com/products?limit=20`;
            const res = await axios.get(baseURL)
            //toArray.push(...res.data);
            //console.log(toArray.length);
            setData(res.data);
            
            }
        catch(e){
            console.log(e);
            }
        }
        getProduct();
        handleScrollPosition();
    })

    console.log(data.length);

    return(
        <div className="shop">
            <h1 className='heading'>Shopping List</h1>
            <div className='button'>
                <button className='but'>Cart: {basket.length}</button>
                <Link to='/' onClick={handleClick}>
                    <button className='but'>Home</button>
                </Link>
                <Link to='/checkout'>
                    <button className='but'>Checkout</button>
                </Link>
            </div>
            <div className="shopContainer">
                
                <div className="productContainer">
                    {
                        data.slice(0,10).map(item => {
                           return <Product 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           category={item.category}
                           description={item.description}
                            />
                        })
                    }
               
                </div>
                <div className="productContainer">
                    {
                        data.slice(10,20).map(item => {
                           return <Product 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           category={item.category}
                           description={item.description}
                            />
                        })
                    }
               
                </div>
            </div>
        </div>
    )
}

export default Shop;
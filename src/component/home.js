import './home.css';
import React from 'react';
import {useState} from 'react';
import Image from './stockphone3.png';
import { withRouter,Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home__container">
            <div className="flex__container">
                <div className='flex__text'>
                    <h1>An easier Responsible Banking</h1>
                    <p className='desktop__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit itaque a tempora eum esse expedita ipsa,
                        quaerat nesciunt delectus suscipit velit maxime aliquam sapiente,
                        commodi adipisci dicta aspernatur maiores officiis sed sint? Laudantium, 
                        modi quo totam dignissimos voluptatum iste ducimus at facere omnis! 
                        Quae recusandae distinctio corporis! Molestias qui esse error excepturi 
                        temporibus asperiores voluptatum alias distinctio aperiam, cumque perferendis, 
                        nihil explicabo ducimus quisquam ea quibusdam architecto minus est omnis earum dicta?
                    </p>
                    <p className='mobile__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam facilis harum nobis impedit fuga tempore error, aut voluptate enim velit nesciunt,
                    deserunt voluptatum minima tenetur magni maxime necessitatibus quas illum.
                    Autem explicabo possimus perferendis nemo id cum sunt consectetur saepe?
                    </p>
                    <div className='flex__links'>
                        <Link to="/shop">
                            <button className='shop__button'>Go to Shop</button>
                        </Link>
                        <p>🌟 5.0</p>
                        <a href='#'>61 reviews</a>
                    </div>
                </div>
                <div className="flex__image"><img className='img' src={Image} alt="stock photo" /></div>
            </div>
        </div>
    )
}

export default withRouter(Home);
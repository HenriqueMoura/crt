import React, { Component } from "react";
import axios from 'axios';
import Slider from "react-slick";
import './Productslist.css';


import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class ProductsList extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://corebiz-test.herokuapp.com/api/v1/products`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
            //make it better
            .catch(error => {
                return error;
            });
    }
    stars = (value) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(value <= i ? <i key={i} class="far fa-star"></i> : <i class="fas fa-star"></i>)
        }
        return stars
    }



    render() {
        var settings = {
            dots: false,
            arrow: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div id="products" >
                <Slider  {...settings}>
                    {
                        this.state.products.map(product => (

                            <div className="product" Slider key={product.productId}>
                                <img src={product.imageUrl} />
                                <div className='basic-info'>
                                    <p> {product.productName}</p>
                                    <div className="stars">
                                        {this.stars(product.stars)}
                                    </div>
                                </div>
                                <div className="price" >
                                    <del>{
                                        product.listPrice ? ` De R$ ${Math.floor(product.listPrice / 100).toFixed(2)}` : ''
                                    }
                                    </del>
                                    <strong>Por: R$ {Math.floor(product.price / 100).toFixed(2)}</strong>
                                    <span>
                                        {
                                            product.listPrice ? ` ou em ${product.installments[0].quantity}x de
                                            R$ ${parseFloat(product.installments[0].value / 100).toFixed(2)}` : ''
                                        }
                                    </span>
                                    <button> Comprar </button>
                                </div>
                            </div>
                        ))
                    }
                </Slider >
            </div >
        );
    }
}
export default ProductsList;
import React, { Component } from "react";
import axios from 'axios'
import Slider from "react-slick";
import './Productslist.css'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

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
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <div id="products" >
                <Slider  {...settings}>
                    {
                        this.state.products.map(product => (
                            <div Slider key={product.productId}>
                                <img src={product.imageUrl} />

                                <p>{product.productName}</p>

                            </div>
                        ))
                    }
                </Slider >
            </div>
        );
    }
}
export default ProductsList;
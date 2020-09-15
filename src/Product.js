import React, {Fragment} from 'react';
import StarIcon from '@material-ui/icons/Star';
import './Product.css';

const Product = ({id, title, image, price, rating}) => {
    return (
        <Fragment>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating)
                                .fill()
                                .map((_)=>(
                                    <p><StarIcon/></p>
                                ))
                        }
                    </div>
                </div>

                <img src={image} alt="Product Image" />
                <button>Add to basket</button>
            </div>
        </Fragment>
    );
};

export default Product;
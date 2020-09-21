import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from "./StateProvider";

const CheckoutProduct = ({id, title, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //Remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="chekcoutProduct">
            <img className="checkoutProduct__image" src={image} alt="checkout image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon/></p>
                            ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
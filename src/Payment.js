import React, {Fragment} from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import './Payment.css';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <Fragment>
            <div className="payment">
                <div className="payment__container">
                    <h1>
                        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                    </h1>

                    {/*Payment Section - Delivery Section*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>786 React Lane</p>
                            <p>Savar, Dhaka, Bangladesh-1200</p>
                        </div>
                    </div>
                    {/*Payment Section - Review Items*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    {/*Payment Section - Payment Methods*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Mehtod</h3>
                            <div className="payment__detials">
                                {/*Stripe magic will go*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Payment;
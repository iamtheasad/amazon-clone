import React, {Fragment, useEffect, useState} from 'react';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link, useHistory} from "react-router-dom";
import './Payment.css';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {getBasketTotal} from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const [processing, setProcessing] = useState();
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // generate the special stirpe secrete which allow us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Strip expects the total in a currencies submit
                url: `/payments/create?total=?{getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (event) => {
        // Do all fancy stripe stuff here...
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then((paymentIntent) => {
            // Payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })
    };

    const handleChange = event => {
        // Listen for changes in the CardEelement
        // and dispaly any error customer types in their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };


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
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            {/*Stripe magic will go*/}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Payment;
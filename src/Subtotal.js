import React from 'react';
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import './Subtotal.css';
import {getBasketTotal} from "./reducer";

const Subtotal = () => {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/*Price*/}
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Procced to Checkout </button>
        </div>
    );
};

export default Subtotal;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 	'pk_test_51JCq3GCUzqgpeTW7LcwGo1A7lc0M6S8szeKE29g39LLhA8Syjr14Aquu3wjLinmASizNeik9tbnDNMlS6vzVWq5R00fLNqgkyQ'
    const onToken = token =>{
        console.log(token)
        alert(' Payment Successful ')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            currency= 'CAD'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description = {`TOTAL: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
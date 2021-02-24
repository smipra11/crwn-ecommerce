import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const PriceForStripe = price * 100
    const publishableKey = "pk_test_51IORb6EOxzGl6gSO6pHGEzGfOnnsAFY9Z46dYdIR3qam3tPPScWfYrhxehDkvOXhHyaqgkwAqrBXbxw47NUuNaiO00Mnez0c86"

     const ontoken = token => {
        console.log(token)
        alert("Payment Successful")
    }


    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Ecommerce"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is ${price}`}
            amount={PriceForStripe}
            panelLabel='Pay Now'
            token={ontoken}
            stripeKey={publishableKey}

        />
    )
}
export default StripeCheckoutButton
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./checkOutForm.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export const CheckoutForm = ({ totalBill, setIsOpen }) => {
  const [errormessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const totalBillInCents = totalBill * 100; // Convert to cents for Stripe
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) return;
    setIsProcessing(true);

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrorMessage(error.message);
      console.log("[error]", error);
    } else {
      setErrorMessage("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    // Step:2 Create a payment intent
    const res = await axios.post(
      "http://localhost:3000/create-payment-intent",
      {
        totalBillInCents,
      }
    );
    const clientSecret = res.data.clientSecret;

    // Step:3 Confirm card payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded!");
        setIsOpen(false); // Close the modal on successful payment
      }
    }
    setIsProcessing(false);
    console.log("Client secret from backend:", clientSecret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#ffff",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex gap-4 py-4">
        <button
          type="submit"
          disabled={!stripe || isProcessing || !elements}
          className="btn bg-green-800 px-10"
        >
          Pay ${totalBill}
        </button>
        <button className="btn bg-red-800" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </div>
      {errormessage && (
        <p className="text-red-500 text-center">{errormessage}</p>
      )}
    </form>
  );
};

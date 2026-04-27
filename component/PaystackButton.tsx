"use client";
import React from "react";
import { usePaystackPayment } from "react-paystack";

type PaystackMetadata = {
  custom_fields: {
    display_name: string;
    variable_name: string;
    value: string;
  }[];
  [key: string]: unknown;
};
type PaystackSuccessCallback = (reference: unknown) => void;
type PaystackCloseCallback = () => void;

interface PaystackButtonProps {
  amount: number;
  email: string;
  metadata?: PaystackMetadata;
  onSuccess?: PaystackSuccessCallback;
  onClose?: PaystackCloseCallback;
  className?: string;
  children?: React.ReactNode;
}

const PaystackButton = ({
  amount,
  email,
  metadata,
  onSuccess,
  onClose,
  className,
  children,
}: PaystackButtonProps) => {
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ...(metadata && { metadata }),
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment({ onSuccess, onClose });
  };

  return (
    <button onClick={handlePayment} className={className}>
      {children || "Pay Now"}
    </button>
  );
};

export default PaystackButton;

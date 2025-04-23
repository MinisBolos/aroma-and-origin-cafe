
import React from 'react';
import { useToast } from "@/hooks/use-toast";

interface CardPaymentFormProps {
  onPaymentSuccess: () => void;
}

const CardPaymentForm: React.FC<CardPaymentFormProps> = () => {
  const { toast } = useToast();
  
  const handleRedirect = () => {
    // Redirect to Asaas payment link
    window.location.href = "https://www.asaas.com/c/v1hjrki3eim4ywx5";
  };

  return (
    <div className="space-y-4 mt-6">
      <p className="text-coffee-medium mb-4">
        Você será redirecionado para nossa página de pagamento segura.
      </p>
      
      <button 
        type="button" 
        className="mt-4 bg-coffee-medium text-white px-4 py-2 rounded-md w-full hover:bg-coffee-dark transition-colors"
        onClick={handleRedirect}
      >
        Continuar para pagamento
      </button>
    </div>
  );
};

export default CardPaymentForm;

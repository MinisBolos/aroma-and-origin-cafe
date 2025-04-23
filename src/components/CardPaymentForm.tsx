
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CardPaymentFormProps {
  onPaymentSuccess: () => void;
}

const CardPaymentForm: React.FC<CardPaymentFormProps> = ({ onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [insufficientFunds, setInsufficientFunds] = useState(false);
  const { toast } = useToast();

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const groups = [];
    
    for (let i = 0; i < numbers.length && i < 16; i += 4) {
      groups.push(numbers.slice(i, i + 4));
    }
    
    return groups.join(' ');
  };

  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 2) {
      return numbers;
    }
    
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  };

  const validateCardDetails = () => {
    if (cardNumber.replace(/\s/g, '').length !== 16) {
      toast({
        title: "Erro",
        description: "Número do cartão deve ter 16 dígitos",
        variant: "destructive"
      });
      return false;
    }

    if (expiry.length !== 5) {
      toast({
        title: "Erro",
        description: "Data de validade deve estar no formato MM/AA",
        variant: "destructive"
      });
      return false;
    }

    if (cvv.length < 3) {
      toast({
        title: "Erro",
        description: "CVV deve ter pelo menos 3 dígitos",
        variant: "destructive"
      });
      return false;
    }

    if (!cardholderName) {
      toast({
        title: "Erro",
        description: "Por favor, informe o nome no cartão",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const processPayment = () => {
    if (!validateCardDetails()) return;

    setIsProcessing(true);
    setInsufficientFunds(false);
    
    // Simulate payment processing with random success/failure
    setTimeout(() => {
      setIsProcessing(false);
      
      // Simulate 30% chance of insufficient funds
      const hasInsufficientFunds = Math.random() < 0.3;
      
      if (hasInsufficientFunds) {
        setInsufficientFunds(true);
        toast({
          title: "Erro no pagamento",
          description: "Seu cartão está sem saldo",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Pagamento aprovado",
        description: "Seu pagamento foi processado com sucesso"
      });
      
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="space-y-4 mt-6">
      {insufficientFunds && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>
            Seu cartão está sem saldo. Por favor, utilize outro cartão ou método de pagamento.
          </AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="cardNumber">Número do Cartão</Label>
        <Input 
          id="cardNumber" 
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry">Data de Validade</Label>
          <Input 
            id="expiry" 
            placeholder="MM/AA"
            maxLength={5}
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input 
            id="cvv" 
            placeholder="123"
            maxLength={4}
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="cardholderName">Nome no Cartão</Label>
        <Input 
          id="cardholderName" 
          placeholder="Nome como está no cartão"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </div>

      {isProcessing && (
        <div className="text-center text-coffee-medium">
          Processando pagamento...
        </div>
      )}

      <button 
        type="button" 
        className="mt-4 bg-coffee-medium text-white px-4 py-2 rounded-md w-full hover:bg-coffee-dark transition-colors"
        onClick={processPayment}
        disabled={isProcessing}
      >
        {isProcessing ? "Processando..." : "Pagar"}
      </button>
    </div>
  );
};

export default CardPaymentForm;

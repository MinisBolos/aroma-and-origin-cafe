
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CardPaymentForm = () => {
  return (
    <div className="space-y-4 mt-6">
      <div>
        <Label htmlFor="cardNumber">Número do Cartão</Label>
        <Input 
          id="cardNumber" 
          placeholder="0000 0000 0000 0000"
          maxLength={19}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry">Data de Validade</Label>
          <Input 
            id="expiry" 
            placeholder="MM/AA"
            maxLength={5}
          />
        </div>
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input 
            id="cvv" 
            placeholder="123"
            maxLength={4}
            type="password"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="cardholderName">Nome no Cartão</Label>
        <Input 
          id="cardholderName" 
          placeholder="Nome como está no cartão"
        />
      </div>
    </div>
  );
};

export default CardPaymentForm;

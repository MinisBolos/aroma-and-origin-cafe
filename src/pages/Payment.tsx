
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CoffeeButton } from "@/components/CoffeeButton";
import { CreditCard, Coins, QrCode } from "lucide-react";
import CardPaymentForm from "@/components/CardPaymentForm";
import PixPaymentInfo from "@/components/PixPaymentInfo";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const { toast } = useToast();

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    if (value === "pix") {
      toast({
        title: "E-mail enviado",
        description: "As informações do PIX foram enviadas para seu e-mail",
      });
    }
  };

  return (
    <div className="min-h-screen bg-coffee-bg py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="font-playfair text-3xl font-bold mb-6 text-coffee-dark">Pagamento</h1>
        
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="font-playfair text-xl font-semibold mb-4 text-coffee-dark">Forma de Pagamento</h2>
            <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange} className="space-y-4">
              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-coffee-bg/10 transition-colors">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit" className="flex items-center cursor-pointer">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Cartão de Crédito
                </Label>
              </div>
              
              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-coffee-bg/10 transition-colors">
                <RadioGroupItem value="debit" id="debit" />
                <Label htmlFor="debit" className="flex items-center cursor-pointer">
                  <Coins className="mr-2 h-5 w-5" />
                  Cartão de Débito
                </Label>
              </div>
              
              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-coffee-bg/10 transition-colors">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix" className="flex items-center cursor-pointer">
                  <QrCode className="mr-2 h-5 w-5" />
                  PIX
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          {(paymentMethod === "credit" || paymentMethod === "debit") && <CardPaymentForm />}
          {paymentMethod === "pix" && <PixPaymentInfo />}
          
          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-raleway text-coffee-medium">Total a pagar:</span>
              <span className="font-playfair text-2xl font-bold text-coffee-dark">R$ 34,90</span>
            </div>
            
            <CoffeeButton className="w-full">
              Finalizar Pedido
            </CoffeeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

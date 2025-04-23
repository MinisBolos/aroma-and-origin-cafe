
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CoffeeButton } from "@/components/CoffeeButton";
import { CreditCard, Coins, QrCode, Check } from "lucide-react";
import CardPaymentForm from "@/components/CardPaymentForm";
import PixPaymentInfo from "@/components/PixPaymentInfo";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    if (value === "pix") {
      toast({
        title: "E-mail enviado",
        description: "As informações do PIX foram enviadas para seu e-mail",
      });
    }
  };

  const handlePaymentSuccess = () => {
    // Set payment as completed
    setPaymentCompleted(true);
    
    // Get delivery information from sessionStorage (saved during checkout)
    const deliveryInfo = {
      receiver: sessionStorage.getItem('receiver') || '',
      email: sessionStorage.getItem('email') || '',
      address: sessionStorage.getItem('address') || '',
      cep: sessionStorage.getItem('cep') || '',
      reference: sessionStorage.getItem('reference') || '',
    };
    
    // Send WhatsApp message with delivery information
    const phoneNumber = "5521971550633";
    const message = `Nova compra!\n
Nome: ${deliveryInfo.receiver}\n
Email: ${deliveryInfo.email}\n
CEP: ${deliveryInfo.cep}\n
Endereço: ${deliveryInfo.address}\n
Ponto de referência: ${deliveryInfo.reference}\n
Método de pagamento: ${paymentMethod === 'credit' ? 'Cartão de Crédito' : 
  paymentMethod === 'debit' ? 'Cartão de Débito' : 'PIX'}\n
Valor: R$ 34,90`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Also show confirmation to the user
    toast({
      title: "Pedido confirmado!",
      description: "As informações do pedido foram enviadas para o vendedor.",
    });
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  if (paymentCompleted) {
    return (
      <div className="min-h-screen bg-coffee-bg py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="font-playfair text-3xl font-bold text-coffee-dark">Pagamento Concluído!</h1>
            <p className="text-coffee-medium max-w-md mx-auto">
              Seu pedido foi confirmado e será processado em breve. 
              Um resumo do pedido foi enviado para seu e-mail.
            </p>
            <CoffeeButton onClick={handleReturnHome} className="mt-6">
              Voltar para a Página Inicial
            </CoffeeButton>
          </div>
        </div>
      </div>
    );
  }

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
          
          {(paymentMethod === "credit" || paymentMethod === "debit") && 
            <CardPaymentForm onPaymentSuccess={handlePaymentSuccess} />}
          {paymentMethod === "pix" && 
            <PixPaymentInfo onPaymentSuccess={handlePaymentSuccess} />}
          
          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-raleway text-coffee-medium">Total a pagar:</span>
              <span className="font-playfair text-2xl font-bold text-coffee-dark">R$ 34,90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

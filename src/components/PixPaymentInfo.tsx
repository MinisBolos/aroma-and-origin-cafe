
import React from 'react';
import { QrCode } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { CoffeeButton } from "@/components/CoffeeButton";

interface PixPaymentInfoProps {
  onPaymentSuccess: () => void;
}

const PixPaymentInfo: React.FC<PixPaymentInfoProps> = ({ onPaymentSuccess }) => {
  const pixKey = "cafe.grind.especial@email.com";
  
  const handleConfirmPayment = () => {
    // Since we can't verify PIX payments in real-time here,
    // we'll just simulate a successful payment
    onPaymentSuccess();
  };
  
  return (
    <div className="space-y-6 mt-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <QrCode className="w-32 h-32" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Escaneie o QR Code ou copie a chave PIX abaixo
              </p>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm font-mono select-all">{pixKey}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Uma cópia da chave PIX foi enviada para seu e-mail
              </p>
              
              <CoffeeButton 
                className="mt-6" 
                onClick={handleConfirmPayment}
              >
                Confirmar Pagamento
              </CoffeeButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PixPaymentInfo;

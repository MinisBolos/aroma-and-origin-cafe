
import React from 'react';
import { QrCode } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PixPaymentInfo = () => {
  const pixKey = "cafe.grind.especial@email.com";
  
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
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PixPaymentInfo;

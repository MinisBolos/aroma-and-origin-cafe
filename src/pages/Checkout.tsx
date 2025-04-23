
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CoffeeButton } from "@/components/CoffeeButton";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const receiver = formData.get('receiver') as string;
    const email = formData.get('email') as string;
    const cep = formData.get('cep') as string;
    const address = formData.get('address') as string;
    const reference = formData.get('reference') as string;
    
    // Save form data in sessionStorage for later use
    sessionStorage.setItem('receiver', receiver);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('cep', cep);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('reference', reference || '');
    
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-coffee-bg py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="font-playfair text-3xl font-bold mb-6 text-coffee-dark">Finalizar Compra</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-playfair text-xl font-semibold mb-4 text-coffee-dark">Resumo do Pedido</h2>
            <div className="bg-coffee-bg p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-raleway text-coffee-medium">Café Grind Especial - 250g</span>
                <span className="font-playfair font-bold text-coffee-dark">R$ 34,90</span>
              </div>
              <div className="border-t border-coffee-cream pt-2 mt-2 flex justify-between">
                <strong className="font-raleway">Total</strong>
                <strong className="font-playfair text-xl text-coffee-dark">R$ 34,90</strong>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-playfair text-xl font-semibold mb-4 text-coffee-dark">Informações de Entrega</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="receiver" className="block font-raleway text-coffee-medium mb-2">Nome de quem vai receber</label>
                <Input 
                  type="text" 
                  id="receiver"
                  name="receiver"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-raleway text-coffee-medium mb-2">E-mail</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="cep" className="block font-raleway text-coffee-medium mb-2">CEP</label>
                <Input 
                  type="text" 
                  id="cep" 
                  name="cep"
                  className="w-full"
                  required
                  maxLength={9}
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-raleway text-coffee-medium mb-2">Endereço de Entrega</label>
                <Input 
                  type="text" 
                  id="address" 
                  name="address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="reference" className="block font-raleway text-coffee-medium mb-2">Ponto de Referência</label>
                <Input 
                  type="text" 
                  id="reference" 
                  name="reference"
                  className="w-full"
                />
              </div>
              <CoffeeButton type="submit" className="w-full mt-4">
                Ir para Pagamento
              </CoffeeButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


import React from 'react';
import { CoffeeButton } from "@/components/CoffeeButton";
import { DollarSign } from "lucide-react";

const Checkout = () => {
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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-raleway text-coffee-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-coffee-cream rounded-md focus:outline-coffee-dark"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-raleway text-coffee-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-coffee-cream rounded-md focus:outline-coffee-dark"
                />
              </div>
              <CoffeeButton type="submit" className="w-full mt-4">
                Finalizar Compra
              </CoffeeButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


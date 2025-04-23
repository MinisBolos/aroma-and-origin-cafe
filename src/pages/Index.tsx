import { Coffee, Leaf, Star, Check, DollarSign, ShoppingCart } from "lucide-react";
import { CoffeeButton } from "@/components/CoffeeButton";
import { BenefitCard } from "@/components/BenefitCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Este café é simplesmente excepcional. As notas de chocolate amargo com toques de frutas vermelhas criam uma experiência sensorial única que me faz querer voltar sempre.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Ana Meireles",
    text: "Desde que descobri este café especial, não consigo mais apreciar cafés comuns. O aroma é envolvente, o sabor é complexo e a acidez perfeitamente equilibrada. Vale cada centavo!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Rodrigo Mendes",
    text: "Como barista profissional, sou extremamente exigente com os cafés que consumo. Este café especial supera todas as expectativas - corpo médio, acidez perfeita e um final limpo e duradouro.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  }
];

const benefits = [
  {
    title: "100% Arábica",
    description: "Grãos selecionados da espécie superior, cultivados em altitudes ideais.",
    icon: <Coffee size={32} />
  },
  {
    title: "Origem Controlada",
    description: "Rastreabilidade completa desde a fazenda até sua xícara.",
    icon: <Leaf size={32} />
  },
  {
    title: "Torra Artesanal",
    description: "Processo de torra minuciosamente monitorado por mestres de torra.",
    icon: <Star size={32} />
  },
  {
    title: "Produção Sustentável",
    description: "Respeito ao meio ambiente e às comunidades produtoras.",
    icon: <Check size={32} />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-bg">
      {/* Header / Navbar */}
      <header className="py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center sticky top-0 bg-coffee-bg bg-opacity-95 backdrop-blur-sm z-10">
        <div className="flex items-center">
          <div className="h-12 w-12 bg-coffee-dark rounded-full flex items-center justify-center">
            <span className="font-playfair text-white text-xl font-bold">G</span>
          </div>
          <h1 className="font-playfair text-xl md:text-2xl font-bold ml-3 text-coffee-dark">Café Grind Especial</h1>
        </div>
        <nav className="hidden md:flex gap-8 font-raleway">
          <a href="#about" className="text-coffee-medium hover:text-coffee-dark transition-colors">Sobre</a>
          <a href="#benefits" className="text-coffee-medium hover:text-coffee-dark transition-colors">Benefícios</a>
          <a href="#buy" className="text-coffee-medium hover:text-coffee-dark transition-colors">Comprar</a>
        </nav>
        <CoffeeButton>Comprar agora</CoffeeButton>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coffee-dark">
              <span className="block">Café Especial</span>
              <span className="text-coffee-medium">Café Grind Especial</span>
            </h1>
            <p className="font-raleway text-lg mb-8 text-coffee-medium max-w-xl">
              Um café especial com pontuação de 82 pontos na escala da SCA, 
              vendido exclusivamente torrado. Cultivado em altitudes elevadas, 
              com perfil sensorial que lembra notas de chocolate amargo e frutas 
              vermelhas. Corpo médio, acidez equilibrada e finalização limpa.
            </p>
            <div className="flex flex-wrap gap-4">
              <CoffeeButton size="large">
                Experimentar agora
              </CoffeeButton>
              <CoffeeButton variant="secondary" size="large">
                Saiba mais
              </CoffeeButton>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Café especial em grãos" 
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
                <span className="font-playfair font-bold">82 pontos SCA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-coffee-cream bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-16 text-center text-coffee-dark">
            Um Café com <span className="text-coffee-medium">História e Personalidade</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Plantação de café" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Café sendo preparado" 
                className="rounded-lg shadow-md h-64 mt-8 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Grãos de café" 
                className="rounded-lg shadow-md h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Xícara de café" 
                className="rounded-lg shadow-md h-64 -mt-8 object-cover"
              />
            </div>

            <div>
              <p className="font-raleway text-lg mb-6 text-coffee-medium">
                Nosso café é cultivado em fazendas localizadas em altitudes ideais, 
                entre 1.200 e 1.600 metros acima do nível do mar, em solos vulcânicos 
                ricos em nutrientes.
              </p>
              <p className="font-raleway text-lg mb-6 text-coffee-medium">
                Cada etapa do processo, desde o cultivo até a torra, é 
                cuidadosamente controlada para garantir um produto final excepcional.
              </p>
              <p className="font-raleway text-lg mb-8 text-coffee-medium">
                O resultado é um café com personalidade única, que expressa toda 
                a riqueza de seu terroir e o compromisso dos produtores com a excelência.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-playfair font-semibold text-coffee-dark mb-2">Processo</h4>
                  <p className="font-raleway text-coffee-medium">Natural, com secagem ao sol</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-playfair font-semibold text-coffee-dark mb-2">Altitude</h4>
                  <p className="font-raleway text-coffee-medium">1.400m acima do nível do mar</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-playfair font-semibold text-coffee-dark mb-2">Variedade</h4>
                  <p className="font-raleway text-coffee-medium">100% Arábica</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-playfair font-semibold text-coffee-dark mb-2">Torra</h4>
                  <p className="font-raleway text-coffee-medium">Média, artesanal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-center text-coffee-dark">
            Benefícios Exclusivos
          </h2>
          <p className="font-raleway text-lg text-center text-coffee-medium mb-16 max-w-2xl mx-auto">
            Nosso compromisso com a qualidade se reflete em cada aspecto do nosso café especial.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-coffee-bg to-coffee-cream bg-opacity-30">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pacote de café especial" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:col-span-3">
              <span className="bg-coffee-accent text-coffee-dark text-xs uppercase font-bold rounded-full px-3 py-1 mb-4 inline-block">Edição Especial</span>
              <h3 className="font-playfair text-3xl font-bold mb-4 text-coffee-dark">Café Grind Especial</h3>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <span className="text-sm font-raleway ml-2 text-coffee-medium">5.0 (87 avaliações)</span>
              </div>
              
              <p className="font-raleway text-coffee-medium mb-6">
                Pacote de 250g de café em grãos ou moído na hora conforme sua preferência.
                Torra fresca realizada em pequenos lotes para garantir máxima qualidade.
              </p>
              
              <div className="mb-6">
                <h4 className="font-playfair font-semibold mb-2 text-coffee-dark">Perfil Sensorial:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-coffee-bg text-coffee-medium rounded-full px-3 py-1 text-sm">Chocolate Amargo</span>
                  <span className="bg-coffee-bg text-coffee-medium rounded-full px-3 py-1 text-sm">Frutas Vermelhas</span>
                  <span className="bg-coffee-bg text-coffee-medium rounded-full px-3 py-1 text-sm">Corpo Médio</span>
                  <span className="bg-coffee-bg text-coffee-medium rounded-full px-3 py-1 text-sm">Acidez Equilibrada</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <DollarSign className="text-coffee-dark" size={24} />
                  <span className="font-playfair text-4xl font-bold text-coffee-dark">34,90</span>
                </div>
                <div className="text-right">
                  <span className="font-raleway text-coffee-medium block">Pacote de 250g</span>
                  <span className="font-raleway text-sm text-coffee-accent font-medium">Frete grátis acima de R$ 100</span>
                </div>
              </div>
              
              <Link to="/checkout" className="block">
                <CoffeeButton className="w-full text-center py-4">
                  <ShoppingCart className="mr-2" /> Quero meu Café
                </CoffeeButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-center text-coffee-dark">
            O que Nossos Clientes Dizem
          </h2>
          <p className="font-raleway text-lg text-center text-coffee-medium mb-16 max-w-2xl mx-auto">
            Descubra por que nosso café especial tem conquistado apreciadores em todo o Brasil.
          </p>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <span className="font-playfair text-coffee-dark text-lg font-bold">G</span>
                </div>
                <h3 className="font-playfair text-xl font-bold ml-3">Café Grind Especial</h3>
              </div>
              <p className="font-raleway text-sm text-gray-300">
                Café especial cuidadosamente selecionado para proporcionar uma experiência sensorial única.
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 font-raleway">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre o Café</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#buy" className="text-gray-300 hover:text-white transition-colors">Como Comprar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-bold mb-4">Contato</h4>
              <ul className="space-y-2 font-raleway">
                <li className="text-gray-300">contato@aromaeorigem.com.br</li>
                <li className="text-gray-300">(11) 9999-9999</li>
                <li className="text-gray-300">São Paulo, SP</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="font-raleway text-sm text-center text-gray-400">
              © 2024 Aroma & Origem Café Especial. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

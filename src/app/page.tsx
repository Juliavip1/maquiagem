'use client'

import { useState } from 'react'
import { Check, Star, Shield, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react'
import Script from 'next/script'

export default function MakeupCourseLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handlePurchase = () => {
    window.open('https://pay.risepay.com.br/Pay/47354c8d9c73427cbf73db7b5ab8eb57', '_blank')
  }

  const benefits = [
    "Resistente à água - sua maquiagem não sai nem na piscina",
    "À prova de suor - mantenha-se impecável durante exercícios",
    "Controla oleosidade - pele sequinha o dia todo",
    "Resistente ao atrito - não sai nem com máscara",
    "À prova de lágrimas - chore de emoção sem borrar nada"
  ]

  const testimonials = [
    {
      name: "Marina Silva",
      text: "Minha maquiagem durava apenas 2 horas. Agora dura o dia inteiro! Mudou minha vida completamente.",
      rating: 5
    },
    {
      name: "Carla Santos",
      text: "Finalmente posso ir à academia de manhã e trabalhar à tarde sem refazer a make. Incrível!",
      rating: 5
    },
    {
      name: "Ana Paula",
      text: "O curso é muito didático e as técnicas realmente funcionam. Valeu cada centavo!",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Funciona para todos os tipos de pele?",
      answer: "Sim! O método funciona para pele oleosa, seca, mista e sensível. Ensino adaptações específicas para cada tipo."
    },
    {
      question: "Preciso comprar produtos caros?",
      answer: "Não! Ensino técnicas que funcionam com produtos nacionais e acessíveis. O segredo está na aplicação, não no preço."
    },
    {
      question: "Quanto tempo tenho acesso ao curso?",
      answer: "Acesso vitalício! Você pode assistir quantas vezes quiser, quando quiser, para sempre."
    },
    {
      question: "E se eu não gostar do curso?",
      answer: "Garantia de 30 dias! Se não ficar satisfeita, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Sou iniciante, conseguirei acompanhar?",
      answer: "Claro! O curso é pensado para iniciantes. Explico tudo do básico ao avançado, passo a passo."
    }
  ]

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1548262176041402');
fbq('track', 'PageView');`
        }}
      />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1548262176041402&ev=PageView&noscript=1"
        />
      </noscript>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-pink-100 py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-pink-100/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Maquiagem que Dura 24 Horas
                <span className="block text-rose-600">Mesmo na Chuva!</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Aprenda as técnicas profissionais que fazem sua maquiagem resistir a água, suor, atrito e lágrimas.
                Sem precisar refazer durante o dia!
              </p>

              {/* CTA Button */}
              <div className="mb-12">
                <button
                  onClick={handlePurchase}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  QUERO APRENDER AGORA
                </button>
                <p className="text-sm text-gray-500 mt-2">Acesso imediato • Suporte vitalício • Garantia de 30 dias</p>
              </div>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ANTES do Curso</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Maquiagem sai em 2-3 horas
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Precisa refazer várias vezes ao dia
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Não resiste à água ou suor
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Borrada e oleosa ao final do dia
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-6 border-2 border-rose-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">DEPOIS do Curso</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Maquiagem dura 24 horas
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Não precisa refazer durante o dia
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Resiste à água, suor e atrito
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      Impecável até o final do dia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Por Que Minha Técnica Funciona?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descobri segredos profissionais que nenhuma marca revela
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-rose-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                O Que Minhas Alunas Dizem
              </h2>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-600">Avaliação média: 5.0 estrelas</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                OFERTA ESPECIAL POR TEMPO LIMITADO
              </h2>
              <div className="text-6xl sm:text-7xl font-bold mb-2">
                <span className="line-through text-white/70 text-4xl mr-4">R$ 497</span>
                R$ 47
              </div>
              <p className="text-xl mb-6">90% de desconto! Apenas hoje</p>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  <span>Garantia de 30 dias</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  <span>Suporte vitalício</span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="bg-white text-rose-600 font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                GARANTIR MINHA VAGA AGORA
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto Para Transformar Sua Vida?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Junte-se a milhares de mulheres que já descobriram o segredo da maquiagem duradoura
            </p>
            <button
              onClick={handlePurchase}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO
            </button>
            <p className="text-sm text-gray-400 mt-4">
              ✅ Acesso imediato • ✅ Sem risco • ✅ Suporte completo
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Curso de Maquiagem Duradoura. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Garantia de 30 dias • Suporte ao cliente 24/7
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
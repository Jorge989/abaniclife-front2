import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

const Product = () => {
  const [selectedIngredient, setSelectedIngredient] = useState('acido-hialuronico');

  const ingredients = {
    'acido-hialuronico': {
      title: 'Ácido Hialurônico',
      description: 'Com benefícios de retenção de água que ajudam a manter a pele hidratada e com aparência jovem.',
      image: '/api/placeholder/300/400',
      color: 'bg-amber-900'
    },
    'retinol': {
      title: 'Retinol',
      description: 'Ingrediente anti-idade que ajuda a renovar a pele e reduzir sinais de envelhecimento.',
      image: '/api/placeholder/300/400',
      color: 'bg-gray-600'
    },
    'cafeina': {
      title: 'Cafeína',
      description: 'Estimula a circulação e ajuda a reduzir o inchaço e a aparência de olheiras.',
      image: '/api/placeholder/300/400',
      color: 'bg-slate-800'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-gray-100 rounded-2xl p-8 relative overflow-hidden">
                {/* Decorative leaves */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
                    <path d="M20,50 Q30,20 50,30 Q70,20 80,50 Q70,80 50,70 Q30,80 20,50 Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
                    <path d="M20,50 Q30,20 50,30 Q70,20 80,50 Q70,80 50,70 Q30,80 20,50 Z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Product tubes */}
                <div className="relative z-10 flex justify-center items-center space-x-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 transform -rotate-12">
                    <div className="w-16 h-32 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg relative">
                      <div className="absolute top-2 left-2 right-2 h-20 bg-white rounded border border-gray-200 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-800 transform rotate-90">HIDRATANTE</span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 h-8 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                    <div className="w-16 h-32 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg relative">
                      <div className="absolute top-2 left-2 right-2 h-20 bg-white rounded border border-gray-200 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-800 transform rotate-90">FPS50</span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 h-8 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Hidratante com FPS50
                </h1>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  R$90,00
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Hidratação de longa duração</Badge>
                  <Badge variant="secondary">Proteção hidratante</Badge>
                  <Badge variant="secondary">Antioxidante</Badge>
                  <Badge variant="secondary">Vegano</Badge>
                  <Badge variant="secondary">Cruelty Free</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  100% natural, cruelty free, sem parabenos.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ingredientes: ácido hialurônico, peptídeos bioativos, 
                  ceramidas, niacinamida, vitamina E, extrato de chá verde, 
                  ácido hialurônico, peptídeos, ceramidas, niacinamida, 
                  vitamina E, extrato de chá verde, ácido hialurônico, 
                  peptídeos, ceramidas, niacinamida, vitamina E, extrato 
                  de chá verde.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantidade
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>1 unidade</option>
                    <option>2 unidades</option>
                    <option>3 unidades</option>
                  </select>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
                  Adicionar ao carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Ingredients Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Princípios ativos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Ingredient Image */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className={`${ingredients[selectedIngredient].color} h-80 relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {ingredients[selectedIngredient].title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {ingredients[selectedIngredient].description}
                    </p>
                  </div>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"></div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Ingredient Selector */}
            <div className="space-y-4">
              {Object.entries(ingredients).map(([key, ingredient]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedIngredient === key 
                      ? 'ring-2 ring-orange-500 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedIngredient(key)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${ingredient.color} rounded-lg flex-shrink-0`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {ingredient.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {ingredient.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hidratação Profunda
                </h3>
                <p className="text-gray-600">
                  Fórmula avançada que proporciona hidratação duradoura por até 24 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proteção Solar FPS50
                </h3>
                <p className="text-gray-600">
                  Proteção eficaz contra raios UVA e UVB, prevenindo o envelhecimento precoce.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cuidado Natural
                </h3>
                <p className="text-gray-600">
                  100% vegano, livre de crueldade animal e com ingredientes naturais selecionados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;


import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    { id: 1, name: 'Premium Kitchen Knives Set', price: '$89.99', image: '🔪', category: 'Kitchen' },
    { id: 2, name: 'Stainless Steel Cookware', price: '$149.99', image: '🍳', category: 'Kitchen' },
    { id: 3, name: 'Soft Egyptian Cotton Bedding', price: '$129.99', image: '🛏️', category: 'Bedroom' },
    { id: 4, name: 'LED Smart Bulbs (4-pack)', price: '$39.99', image: '💡', category: 'Lighting' },
    { id: 5, name: 'Stainless Steel Vacuum Flask', price: '$34.99', image: '🎒', category: 'Kitchen' },
    { id: 6, name: 'Bamboo Storage Organizer', price: '$59.99', image: '📦', category: 'Storage' },
  ]

  return (
    <>
      <Head>
        <title>Haven - Premium Household Items Store</title>
        <meta name="description" content="Shop for quality household items at Haven - Your trusted home shopping destination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="🏠" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-3xl">🏠</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Haven</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
                <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition">Shop</Link>
                <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                  Cart (0)
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl"
              >
                ☰
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <Link href="/" className="block text-gray-700 hover:text-blue-600 py-2">Home</Link>
                <Link href="/products" className="block text-gray-700 hover:text-blue-600 py-2">Shop</Link>
                <Link href="#features" className="block text-gray-700 hover:text-blue-600 py-2">Features</Link>
                <Link href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🏠</div>
            <div className="absolute bottom-10 right-10 text-6xl">🛋️</div>
            <div className="absolute top-1/2 right-1/4 text-5xl">🍽️</div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Welcome to <span className="text-yellow-300">Haven</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Your trusted destination for premium household items. Quality products, unbeatable prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products"
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 inline-block text-center"
                  >
                    🛍️ Start Shopping
                  </Link>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="text-center text-6xl md:text-8xl animate-bounce">
                🏠
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Discover our handpicked collection of premium household items
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 border border-gray-200"
                >
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products"
                className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition inline-block"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Why Choose Haven?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚚', title: 'Fast Delivery', desc: 'Get items delivered within 3-5 business days' },
                { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing on all products' },
                { icon: '✅', title: 'Quality Guaranteed', desc: 'All products tested and verified' },
                { icon: '🔒', title: 'Secure Shopping', desc: '100% secure payment processing' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Shop by Category
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🍳', name: 'Kitchen' },
                { icon: '🛏️', name: 'Bedroom' },
                { icon: '🪑', name: 'Furniture' },
                { icon: '💡', name: 'Lighting' },
              ].map((cat, idx) => (
                <button 
                  key={idx}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 font-bold text-lg"
                >
                  <div className="text-5xl mb-3">{cat.icon}</div>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get 20% Off Your First Order</h2>
            <p className="text-xl mb-8 text-blue-100">Subscribe to our newsletter and get exclusive deals</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-lg text-gray-900 flex-1 max-w-md font-semibold"
              />
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Haven</h3>
                <p className="text-gray-400">Your trusted online store for premium household items since 2024.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
                  <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white transition">Help Center</Link></li>
                  <li><Link href="/" className="hover:text-white transition">Contact Us</Link></li>
                  <li><Link href="/" className="hover:text-white transition">Track Order</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400 mb-2">📧 support@haven.local</p>
                <p className="text-gray-400 mb-2">📞 1-800-HAVEN-01</p>
                <p className="text-gray-400">🕐 Available 24/7</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">&copy; 2024 Haven. All rights reserved. 🏠</p>
                <div className="flex space-x-6 text-gray-400">
                  <span className="hover:text-white transition cursor-pointer">Facebook</span>
                  <span className="hover:text-white transition cursor-pointer">Twitter</span>
                  <span className="hover:text-white transition cursor-pointer">Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
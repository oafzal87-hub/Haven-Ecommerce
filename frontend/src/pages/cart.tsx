import Link from 'next/link'
import Head from 'next/head'

export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'Premium Kitchen Knives Set', price: 89.99, quantity: 1, image: '🔪' },
    { id: 2, name: 'Stainless Steel Cookware', price: 149.99, quantity: 1, image: '🍳' },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = 15
  const total = subtotal + tax + shipping

  return (
    <>
      <Head>
        <title>Shopping Cart - Haven</title>
        <meta name="description" content="Shopping cart at Haven" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold">🛒 Shopping Cart</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow p-6 flex gap-6">
                  <div className="text-6xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">−</button>
                      <span className="font-bold">{item.quantity}</span>
                      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                      <button className="ml-auto text-red-600 hover:text-red-700 font-bold">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold">${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition text-lg mb-3">
                💳 Proceed to Checkout
              </button>
              <Link href="/products" className="block w-full text-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
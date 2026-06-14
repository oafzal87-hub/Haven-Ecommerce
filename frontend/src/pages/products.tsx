import Link from 'next/link'
import Head from 'next/head'

export default function ProductsPage() {
  const allProducts = [
    { id: 1, name: 'Premium Kitchen Knives Set', price: '$89.99', image: '🔪', category: 'Kitchen', rating: 5 },
    { id: 2, name: 'Stainless Steel Cookware', price: '$149.99', image: '🍳', category: 'Kitchen', rating: 5 },
    { id: 3, name: 'Soft Egyptian Cotton Bedding', price: '$129.99', image: '🛏️', category: 'Bedroom', rating: 5 },
    { id: 4, name: 'LED Smart Bulbs (4-pack)', price: '$39.99', image: '💡', category: 'Lighting', rating: 4 },
    { id: 5, name: 'Stainless Steel Vacuum Flask', price: '$34.99', image: '🎒', category: 'Kitchen', rating: 5 },
    { id: 6, name: 'Bamboo Storage Organizer', price: '$59.99', image: '📦', category: 'Storage', rating: 4 },
    { id: 7, name: 'Luxury Throw Pillow Set', price: '$49.99', image: '🛋️', category: 'Bedroom', rating: 5 },
    { id: 8, name: 'Stainless Steel Utensil Set', price: '$44.99', image: '🥄', category: 'Kitchen', rating: 4 },
    { id: 9, name: 'Wooden Cutting Board Set', price: '$32.99', image: '🪵', category: 'Kitchen', rating: 5 },
    { id: 10, name: 'Night Stand Lamp', price: '$55.99', image: '💡', category: 'Lighting', rating: 4 },
    { id: 11, name: 'Storage Cabinet', price: '$199.99', image: '🚪', category: 'Storage', rating: 5 },
    { id: 12, name: 'Dining Table Set', price: '$399.99', image: '🪑', category: 'Furniture', rating: 5 },
  ]

  return (
    <>
      <Head>
        <title>Products - Haven</title>
        <meta name="description" content="Browse all products at Haven" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">All Products</h1>
            <p className="text-xl text-blue-100">Browse our complete collection of household items</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 text-center h-40 flex items-center justify-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <div className="text-yellow-400 text-sm">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                      🛒 Add to Cart
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
                      ♡ Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
import Link from 'next/link'
import Head from 'next/head'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Sales', value: '$24,582', change: '+12.5%', icon: '💰' },
    { label: 'Orders', value: '1,234', change: '+8.2%', icon: '📦' },
    { label: 'Customers', value: '892', change: '+5.1%', icon: '👥' },
    { label: 'Products', value: '156', change: '+2.3%', icon: '🛍️' },
  ]

  const recentOrders = [
    { id: '#1001', customer: 'John Doe', amount: '$89.99', status: 'Delivered', date: '2024-01-14' },
    { id: '#1002', customer: 'Jane Smith', amount: '$149.99', status: 'Processing', date: '2024-01-13' },
    { id: '#1003', customer: 'Bob Wilson', amount: '$59.99', status: 'Shipped', date: '2024-01-12' },
  ]

  return (
    <>
      <Head>
        <title>Admin Dashboard - Haven</title>
        <meta name="description" content="Haven admin dashboard" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900">📊 Admin Dashboard</h1>
            <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
              ← Back Home
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <p className="text-green-600 text-sm font-bold">{stat.change} from last month</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-700">Order ID</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-700">Customer</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-700">Amount</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-700">Status</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-900 font-bold">{order.id}</td>
                      <td className="py-4 px-4 text-gray-600">{order.customer}</td>
                      <td className="py-4 px-4 text-gray-900 font-bold">{order.amount}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-3">➕</div>
              <p className="font-bold text-lg">Add New Product</p>
            </button>
            <button className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-3">👥</div>
              <p className="font-bold text-lg">Manage Customers</p>
            </button>
            <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-3">📈</div>
              <p className="font-bold text-lg">View Analytics</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const data = [
    { name: 'Mon', Tuition: 4000, Meals: 2400, Events: 2400 },
    { name: 'Tue', Tuition: 3000, Meals: 1398, Events: 2210 },
    { name: 'Wed', Tuition: 2000, Meals: 9800, Events: 2290 },
    { name: 'Thu', Tuition: 2780, Meals: 3908, Events: 2000 },
    { name: 'Fri', Tuition: 1890, Meals: 4800, Events: 2181 },
    { name: 'Sat', Tuition: 2390, Meals: 3800, Events: 2500 },
    { name: 'Sun', Tuition: 3490, Meals: 4300, Events: 2100 },
];

export default function PaymentAnalysis() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Payment Analytics</h3>
            <div className="flex items-center justify-between mb-4">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <ChevronLeft size={20} />
                </button>
                <h3 className="text-sm font-semibold text-gray-600">
                    Week of January 15-21, 2025
                </h3>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <ChevronRight size={20} />
                </button>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                    <span className="text-blue-500">-○-</span>
                    <span className="text-sm text-gray-600">Tuition</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-green-500">-○-</span>
                    <span className="text-sm text-gray-600">Meals</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-orange-500">-○-</span>
                    <span className="text-sm text-gray-600">Events</span>
                </div>
            </div>
            <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="Tuition" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5 }} /> {/* Blue line */}
                        <Line type="monotone" dataKey="Meals" stroke="#10b981" strokeWidth={2} dot={{ r: 5 }} /> {/* Green line */}
                        <Line type="monotone" dataKey="Events" stroke="#f59e0b" strokeWidth={2} dot={{ r: 5 }} /> {/* Orange line */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
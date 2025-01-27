import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const data = [
    { name: 'Mon', attendance: 96 },
    { name: 'Tue', attendance: 92 },
    { name: 'Wed', attendance: 90 },
    { name: 'Thu', attendance: 93 },
    { name: 'Fri', attendance: 95 },
];

const colors = ['#3b82f6', '#0ea5e9'];

export default function AttendantsTrends() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Attendance Trends</h3>
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
            <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#000" />
                        <YAxis
                            domain={[84, 99]}
                            ticks={[84, 87, 90, 93, 96, 99]}
                            stroke="#000"
                        />
                        <Tooltip />
                        <Bar dataKey="attendance">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 2]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}


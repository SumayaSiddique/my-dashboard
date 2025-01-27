export default function MetricCard({ title, amount, percentage, percentageColor = "text-green-500", icon: Icon }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full">
                    {Icon && <Icon className="text-sky-500" size={32} />}
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
                    <div className="flex items-center space-x-2">
                        <p className="text-2xl font-bold text-gray-900">{amount}</p>
                        <p className={`text-sm ${percentageColor}`}>{percentage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

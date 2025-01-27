export default function ActivityItem({ userName, action, amount, icon: Icon, time }) {
    return (
        <div className="flex items-start space-x-4 py-4 relative">
            <div className="relative">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {Icon && <Icon className="text-gray-600" size={20} />}
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-full bg-gray-300"></div>
            </div>
            <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                    {userName}
                </p>
                <div className="flex justify-between items-start">
                    <p className="text-[10px] text-gray-800">
                        {action}
                    </p>
                    {time && <p className="text-[10px] text-gray-500">{time}</p>}
                </div>
                {amount && <p className="text-xs text-gray-600">Amount: ${amount}</p>}
            </div>
        </div>
    );
}

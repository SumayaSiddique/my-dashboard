export default function EventCard({ eventName, status, dateRange, spotsFilled, totalSpots }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-black">{eventName}</h3>
                <span className={`text-sm font-medium ${status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {status}
                </span>
            </div>
            <p className="text-sm text-gray-600">{dateRange}</p>
            <div className="mt-2">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                        {spotsFilled}/{totalSpots} spots filled
                    </p>
                    <p className="text-sm text-blue-500 font-medium">
                        {(spotsFilled / totalSpots) * 100}%
                    </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(spotsFilled / totalSpots) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
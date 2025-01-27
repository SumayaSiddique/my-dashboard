export default function ActionCard({ icon: Icon, title }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4">
                <Icon className="text-black" size={20} />
                <div>
                    <h4 className="text-md font-semibold text-gray-600">{title}</h4>
                </div>
            </div>
        </div>
    );
}
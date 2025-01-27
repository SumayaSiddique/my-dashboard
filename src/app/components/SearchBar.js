import { Search } from 'lucide-react';

export default function SearchBar({ placeholder, width = "500px" }) {
    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black" // Added text-black
                    style={{ width }}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                </div>
            </div>
        </div>
    );
}
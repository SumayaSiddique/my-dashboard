import { Home } from 'lucide-react';

export default function Sidebar({ isOpen }) {
    return (
        <div className={`${isOpen ? 'block' : 'hidden'} bg-white text-white w-64 space-y-6 py-7 px-2`}>
            <div className="text-2xl font-semibold text-black px-4">Dashboard</div>
            <nav>
                <a
                    href="/"
                    className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 bg-blue-200 text-black"
                >
                    <Home className="mr-2" size={20} />
                    Home
                </a>
            </nav>
        </div>
    );
}
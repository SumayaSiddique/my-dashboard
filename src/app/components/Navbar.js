import { Menu, Bell, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Navbar({ toggleSidebar }) {
    return (
        <div className="bg-white text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="p-2">
                        <Menu size={24} />
                    </button>
                    <div className="text-xl font-semibold">Dashboard</div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <Bell size={24} className="cursor-pointer" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="border border-gray-400 rounded-md p-2">
                        <div className="relative flex items-center space-x-2">
                            <div className="relative">
                                <Mail size={24} className="cursor-pointer" />
                                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <div className="py-1 text-md">
                                Message
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="text-sm">
                            <div>Emily Brooks</div>
                            <div className="text-gray-400">School Admin</div>
                        </div>
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src="/female-avatar.jpg"
                            alt="Emily Brooks"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
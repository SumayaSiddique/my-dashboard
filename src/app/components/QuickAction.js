import ActionCard from './ActionCard';
import { Calendar, UserPlus, FileText, User } from 'lucide-react';

export default function QuickAction() {
    const actions = [
        {
            icon: Calendar,
            title: 'Create new event',
        },
        {
            icon: UserPlus,
            title: 'Invite new parent',
        },
        {
            icon: FileText,
            title: 'Generate Report',
        },
        {
            icon: User,
            title: 'Add New Student',
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Quick Actions</h3>
            <div className="mt-4 space-y-4">
                {actions.map((action, index) => (
                    <ActionCard
                        key={index}
                        icon={action.icon}
                        title={action.title}
                        description={action.description}
                    />
                ))}
            </div>
        </div>
    );
}
import ActivityItem from './ActivityItem';
import { User, CreditCard } from 'lucide-react';

export default function RecentActivity() {
    const activities = [
        {
            userName: 'Sarah Wilson',
            action: 'Processed payment for Winter Tech Camp',
            amount: '250.00',
            icon: CreditCard,
            time: '3.25 PM',
        },
        {
            userName: 'John Smith',
            action: 'Added new student registration',
            studentName: 'Dis Johnson',
            icon: User,
            time: '2.45 PM',
        },
        {
            userName: 'Sarah Wilson',
            action: 'Processed payment for Winter Tech Camp',
            amount: '250.00',
            icon: CreditCard,
            time: '1.15 PM',
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600">Recent Activity</h3>
            <div className="mt-4">
                {activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        userName={activity.userName}
                        action={activity.action}
                        amount={activity.amount}
                        icon={activity.icon}
                        time={activity.time}
                    />
                ))}
            </div>
        </div>
    );
}
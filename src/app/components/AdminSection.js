import SearchBar from './SearchBar';
import MetricCard from './MetricCard';
import PaymentAnalysis from './PaymentAnalysis';
import RecentActivity from './RecentActivity';
import AttendantsTrends from './AttendantsTrends';
import QuickAction from './QuickAction';
import UpcomingEvents from './UpcomingEvents';
import { CreditCard, Calendar, Users, Utensils } from 'lucide-react';

export default function AdminSection() {
    return (
        <div className="mb-6">
            <SearchBar placeholder="Search to look up students, parents, events, payments, etc." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <MetricCard
                    title="Total Payments"
                    amount="$ 25,890"
                    percentage="+12.5%"
                    icon={CreditCard}
                />
                <MetricCard
                    title="Active Events"
                    amount="8"
                    percentage="+4.2%"
                    icon={Calendar}
                />
                <MetricCard
                    title="Attendance Rate"
                    amount="95.8%"
                    percentage="-1.2%"
                    percentageColor="text-red-500"
                    icon={Users}
                />
                <MetricCard
                    title="Meal Orders"
                    amount="342"
                    percentage="+8%"
                    icon={Utensils}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div>
                    <PaymentAnalysis />
                    <div className="mt-4">
                        <RecentActivity />
                    </div>
                </div>
                <div>
                    <AttendantsTrends />
                    <div className="mt-4">
                        <QuickAction />
                    </div>
                </div>
                <div>
                    <UpcomingEvents />
                </div>
            </div>
        </div>
    );
}
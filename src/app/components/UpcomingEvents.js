import EventCard from './EventCard';

export default function UpcomingEvents() {
    const events = [
        {
            eventName: 'Winter Tech Camp',
            status: 'Active',
            dateRange: 'Jan 25 - Feb 05',
            spotsFilled: 80,
            totalSpots: 100,
        },
        {
            eventName: 'White Tech Camp',
            status: 'Pending',
            dateRange: 'Feb 10 - Feb 15',
            spotsFilled: 45,
            totalSpots: 120,
        },
        {
            eventName: 'AI Coding Bootcamp',
            status: 'Active',
            dateRange: 'Mar 01 - Mar 10',
            spotsFilled: 60,
            totalSpots: 80,
        },
        {
            eventName: 'Cloud Computing Workshop',
            status: 'Pending',
            dateRange: 'Mar 15 - Mar 20',
            spotsFilled: 30,
            totalSpots: 50,
        },
        {
            eventName: 'Cybersecurity Basics',
            status: 'Active',
            dateRange: 'Apr 01 - Apr 10',
            spotsFilled: 20,
            totalSpots: 100,
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Upcoming Events</h3>
            <div>
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        eventName={event.eventName}
                        status={event.status}
                        dateRange={event.dateRange}
                        spotsFilled={event.spotsFilled}
                        totalSpots={event.totalSpots}
                    />
                ))}
            </div>
        </div>
    );
}
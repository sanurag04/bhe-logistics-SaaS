const UpcomingPickups: React.FC = () => {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        ⏱
                    </span>
                    Upcoming Pickups
                </div>

                <button
                    type="button"
                    className="text-xs font-semibold text-indigo-600 hover:underline md:text-sm"
                >
                    + Create New Pickup
                </button>
            </div>

            <div className="text-center text-sm text-slate-500">
                <p className="font-medium text-slate-700">No upcoming pickups</p>
                <p className="mt-1 text-xs">
                    Your upcoming pickup requests appear here
                </p>
            </div>
        </div>
    );
};

export default UpcomingPickups;
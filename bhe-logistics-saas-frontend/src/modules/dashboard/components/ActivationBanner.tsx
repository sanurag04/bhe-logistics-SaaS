const ActivationBanner: React.FC = () => {
    return (
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 px-8 py-6 text-white shadow-sm">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold md:text-2xl">
                    Congrats, your account has been activated
                </h2>
                <p className="text-xs opacity-90 md:text-sm">
                    Go ahead and create your shipment now to start shipping
                </p>

                <button
                    type="button"
                    className="mt-4 rounded-md bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-slate-50 md:text-sm"
                >
                    Create your first shipment
                </button>
            </div>

            <img
                src="/box-illustration.png"
                alt="Shipment illustration"
                className="hidden h-28 md:block"
            />
        </div>
    );
};

export default ActivationBanner;
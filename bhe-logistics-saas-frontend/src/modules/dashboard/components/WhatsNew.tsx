interface WhatsNewItem {
    title: string;
    description: string;
    badge?: string;
}

const whatsNewItems: WhatsNewItem[] = [
    {
        title: 'Direct Intracity Shipping',
        description: 'Hire bikes or trucks to deliver goods',
    },
    {
        title: 'Secure with Delhivery Protect',
        description: 'Get cover up to ₹30,000 per shipment',
        badge: 'New',
    },
    {
        title: 'Auto-topup using Remittances',
        description: 'Topup your wallet automatically',
    },
    {
        title: 'Proactive Shipment Communication',
        description: 'Get real time shipment updates',
    },
    {
        title: 'Refer & Earn',
        description: 'Refer Delhivery with others & earn cashback',
    },
];

const WhatsNew: React.FC = () => {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
                What’s New
            </h3>

            <div className="space-y-4">
                {whatsNewItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600">
                            •
                        </span>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-medium text-slate-800">
                                    {item.title}
                                </p>
                                {item.badge ? (
                                    <span className="rounded bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
                                        {item.badge}
                                    </span>
                                ) : null}
                            </div>
                            <p className="text-xs text-slate-500">
                                {item.description}
                            </p>
                        </div>

                        <span className="text-slate-300">{'›'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatsNew;
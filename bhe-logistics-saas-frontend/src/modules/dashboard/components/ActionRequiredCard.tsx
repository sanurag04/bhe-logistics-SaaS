interface ActionItem {
    label: string;
    value: number;
}

const actionItems: ActionItem[] = [
    { label: 'High Risk Orders', value: 0 },
    { label: 'Bad Addresses', value: 0 },
    { label: 'To Be Shipped', value: 0 },
    { label: 'Exceptions and NDR', value: 0 },
];

const ActionRequiredCard: React.FC = () => {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-yellow-100 text-[10px] font-bold text-yellow-700">
                    !
                </span>
                Action Required
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {actionItems.map((item) => (
                    <div key={item.label} className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                            {item.value}
                        </p>
                        <p className="text-[11px] text-slate-500">{item.label}</p>
                        <button
                            type="button"
                            className="text-[11px] font-medium text-indigo-600 hover:underline"
                        >
                            Act now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActionRequiredCard;
const QuickLinks: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border bg-white p-5 text-center shadow-sm hover:bg-slate-50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    📘
                </span>
                <p className="text-xs font-semibold text-slate-900 md:text-sm">
                    Knowledge Base
                </p>
            </div>

            <div className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border bg-white p-5 text-center shadow-sm hover:bg-slate-50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    🧮
                </span>
                <p className="text-xs font-semibold text-slate-900 md:text-sm">
                    Rate Calculator
                </p>
            </div>
        </div>
    );
};

export default QuickLinks;
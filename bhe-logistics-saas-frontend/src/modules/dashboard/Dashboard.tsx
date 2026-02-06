/** @format */

import ActivationBanner from './components/ActivationBanner';
import ActionRequiredCard from './components/ActionRequiredCard';
import UpcomingPickups from './components/UpcomingPickups';
import WhatsNew from './components/WhatsNew';
import QuickLinks from './components/QuickLinks';

const Dashboard: React.FC = () => {
	return (
		<div className="mx-auto max-w-7xl px-6 py-6">
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
				{/* LEFT */}
				<div className="space-y-6 lg:col-span-9">
					<ActivationBanner />
					<ActionRequiredCard />
					<UpcomingPickups />
				</div>

				{/* RIGHT */}
				<div className="space-y-6 lg:col-span-3">
					<WhatsNew />
					<QuickLinks />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

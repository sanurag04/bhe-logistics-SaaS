/** @format */

import { Grid, Box } from '@mui/material';
import UploadDropZone from './components/UploadDropZone';
import InstructionsCard from './components/InstructionsCard';
import GlossaryTable from './components/GlossaryTable';
import type { GlossaryItem } from './components/types';

const glossaryData: GlossaryItem[] = [
	{
		title: 'Waybill',
		mandatory: true,
		description: 'Tracking ID of the shipment',
		sample: '17837910002505',
	},
	{
		title: 'Reference No',
		mandatory: true,
		description: "It's a unique number given for easy shipment identification.",
		sample: 'SO1191',
	},
	{
		title: 'Packaging Type',
		mandatory: false,
		description: 'Mention the packaging in which the product will be shipped',
		sample: 'box/flyer',
	},
	{
		title: 'Consignee Name',
		mandatory: true,
		description: 'Full name of the Consignee.',
		sample: 'James Albert',
	},
	{
		title: 'City',
		mandatory: false,
		description: 'City of the Consignee',
		sample: 'Kochi',
	},
];

const BulkUploadShipment = () => {
	const handleFileSelect = (file: File) => {
		console.log('Uploaded file:', file);
	};

	return (
		<Box p={2} width={'920px'} mx="auto">
			<Grid container spacing={1} >
				<Grid size={{ xs: 8 }} >
					<Box >
						<UploadDropZone onFileSelect={handleFileSelect} />
					</Box>
				</Grid>

				<Grid size={{ xs: 4 }} >
					<Box >
						<InstructionsCard />
					</Box>
				</Grid>


				<Grid size={{ xs: 12 }}>
					<Box>
						<GlossaryTable data={glossaryData} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BulkUploadShipment;

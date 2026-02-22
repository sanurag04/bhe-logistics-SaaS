/** @format */
import { useState } from 'react';
import { Grid, TextField, Checkbox, FormControlLabel } from '@mui/material';
import AppDialog from '../../../../components/common/AppDialog/AppDialog';
import StickyFooter from '../../../../components/common/StickyFooter';

interface AddSellerDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit?: (data: {
		sellerName: string;
		gst: string;
		addressLine1: string;
		addressLine2: string;
		pincode: string;
	}) => void;
}

const AddSellerDialog = ({ open, onClose, onSubmit }: AddSellerDialogProps) => {
	const [formData, setFormData] = useState({
		sellerName: '',
		gst: '',
		addressLine1: '',
		addressLine2: '',
		pincode: '',
	});

	const handleSubmit = () => {
		onSubmit?.(formData);
	};

	const handleChange = (field: keyof typeof formData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<AppDialog
			open={open}
			title="Add Seller Details"
			subtitle="Add seller and address details"
			onClose={onClose}
			maxWidth="md">
			<Grid container spacing={2}>
				{/* Seller Name */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Seller Name"
						fullWidth
						size="small"
						value={formData.sellerName}
						onChange={(e) => handleChange('sellerName', e.target.value)}
					/>
				</Grid>

				{/* GST */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="GST Number"
						placeholder="Enter GST"
						fullWidth
						size="small"
						value={formData.gst}
						onChange={(e) => handleChange('gst', e.target.value)}
					/>
				</Grid>

				{/* Checkbox */}
				<Grid size={{ xs: 12 }}>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Add seller address"
					/>
				</Grid>

				{/* Address Line 1 */}
				<Grid size={{ xs: 12 }}>
					<TextField
						label="Address Line 1"
						fullWidth
						size="small"
						value={formData.addressLine1}
						onChange={(e) => handleChange('addressLine1', e.target.value)}
					/>
				</Grid>

				{/* Address Line 2 */}
				<Grid size={{ xs: 12 }}>
					<TextField
						label="Address Line 2"
						placeholder="Optional"
						fullWidth
						size="small"
						value={formData.addressLine2}
						onChange={(e) => handleChange('addressLine2', e.target.value)}
					/>
				</Grid>

				{/* Country */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Country"
						value="India"
						disabled
						fullWidth
						size="small"
					/>
				</Grid>

				{/* Pincode */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Pincode"
						error
						helperText="Please enter a valid pincode"
						fullWidth
						size="small"
						value={formData.pincode}
						onChange={(e) => handleChange('pincode', e.target.value)}
					/>
				</Grid>

				{/* State */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="State"
						value="Uttar Pradesh"
						disabled
						fullWidth
						size="small"
					/>
				</Grid>

				{/* City */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="City"
						value="Varanasi"
						disabled
						fullWidth
						size="small"
					/>
				</Grid>

				{/* Footer buttons */}
				<Grid size={{ xs: 12 }}>
					<StickyFooter
						primaryLabel="Add Pickup Address"
						secondaryLabel="Cancel"
						onSecondaryClick={onClose}
						onPrimaryClick={handleSubmit}
					/>
				</Grid>
			</Grid>
		</AppDialog>
	);
};

export default AddSellerDialog;

/** @format */
import { Grid, TextField, InputAdornment, Typography } from '@mui/material';
import AppDialog from '../../../../components/common/AppDialog/AppDialog';
import StickyFooter from '../../../../components/common/StickyFooter';
import { useState } from 'react';

interface AddCustomerDialogProps {
	open: boolean;
	onClose: () => void;
}

const AddCustomerDialog = ({ open, onClose }: AddCustomerDialogProps) => {
	const [formData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		addressLine1: '',
		addressLine2: '',
		pincode: '',
		state: '',
		city: '',
	});

	const handleSubmit = (onSubmit: (data: typeof formData) => void) => {
		return () => {
			onSubmit(formData);
		};
	};

	const onSubmit = (data: typeof formData) => {
		console.log('Customer data:', data);
		onClose();
	};

	return (
		<AppDialog
			open={open}
			title="Add Customer"
			subtitle="Add customer and address details"
			onClose={onClose}
			maxWidth="md">
			<Grid container spacing={2}>
				{/* First Name */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="First Name"
						placeholder="Enter first name"
						fullWidth
						size="small"
					/>
				</Grid>

				{/* Last Name */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Last Name"
						placeholder="Enter last name"
						fullWidth
						size="small"
					/>
				</Grid>

				{/* Email */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Email"
						placeholder="Enter email ID"
						fullWidth
						size="small"
					/>
				</Grid>

				{/* Phone Number */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="Phone Number"
						placeholder="Enter mobile number"
						fullWidth
						size="small"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">+91</InputAdornment>
							),
						}}
					/>
				</Grid>

				{/* Shipping Address Line 1 */}
				<Grid size={{ xs: 12 }}>
					<TextField
						label="Shipping Address Line 1"
						placeholder="Address Line 1"
						fullWidth
						size="small"
					/>
					<Typography variant="caption" color="text.secondary">
						This will be used in the invoices that you will print
					</Typography>
				</Grid>

				{/* Shipping Address Line 2 */}
				<Grid size={{ xs: 12 }}>
					<TextField
						label="Shipping Address Line 2"
						placeholder="Address Line 2"
						fullWidth
						size="small"
					/>
					<Typography variant="caption" color="text.secondary">
						This will be used in the invoices that you will print
					</Typography>
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
						placeholder="Enter pincode"
						fullWidth
						size="small"
					/>
				</Grid>

				{/* State */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="State"
						placeholder="Enter state"
						error
						fullWidth
						size="small"
					/>
				</Grid>

				{/* City */}
				<Grid size={{ xs: 6 }}>
					<TextField
						label="City"
						placeholder="Enter city"
						error
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid size={{ xs: 12 }}>
					<StickyFooter
						primaryLabel="Add Customer"
						secondaryLabel="Cancel"
						onSecondaryClick={onClose}
						onPrimaryClick={handleSubmit(onSubmit)}
					/>
				</Grid>
			</Grid>
		</AppDialog>
	);
};

export default AddCustomerDialog;

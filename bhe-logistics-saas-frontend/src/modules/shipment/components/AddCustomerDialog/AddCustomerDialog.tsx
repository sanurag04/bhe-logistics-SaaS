/** @format */
import {
	Grid,
	TextField,
	Button,
	InputAdornment,
	Typography,
} from '@mui/material';
import AppDialog from '../../../../components/common/AppDialog/AppDialog';

interface AddCustomerDialogProps {
	open: boolean;
	onClose: () => void;
}

const AddCustomerDialog = ({ open, onClose }: AddCustomerDialogProps) => {
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

				{/* Footer Actions */}
				<Grid
					size={{ xs: 12 }}
					display="flex"
					justifyContent="flex-end"
					gap={2}
					mt={2}>
					<Button variant="outlined" onClick={onClose}>
						Cancel
					</Button>
					<Button variant="contained">Add Customer</Button>
				</Grid>
			</Grid>
		</AppDialog>
	);
};

export default AddCustomerDialog;

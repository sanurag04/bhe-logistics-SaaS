/** @format */
import {
	Box,
	Grid,
	Card,
	CardContent,
	Typography,
	FormControl,
	TextField,
	Select,
	MenuItem,
	Button,
	IconButton,
	Radio,
	RadioGroup,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import '../forward-shipment/create-forward-shipment.css';
import AddSellerDialog from '../components/AddSellerDialog/AddSellerDialog';
import AddCustomerDialog from '../components/AddCustomerDialog/AddCustomerDialog';
import VerticalStepIndicator from '../../../components/common/VerticalStepIndicator/VerticalStepIndicator';

const CreateReverseShipment = () => {
	const [openSeller, setOpenSeller] = useState(false);
	const [openCustomer, setOpenCustomer] = useState(false);
	const [returnReason, setReturnReason] = useState('DAMAGED_PRODUCT');

	// const [boxOption, setBoxOption] = useState<number | 'more' | null>(null);
	const [customBoxCount, setCustomBoxCount] = useState<number | ''>('');

	// 	-------Use this logic when submitting the form--------
	// 	const finalBoxCount =
	//   boxOption === 'more' ? customBoxCount : boxOption;

	const returnreasonOptions = [
		{ value: 'DAMAGED_PRODUCT', label: 'Damaged Product' },
		{ value: 'WRONG_ITEM', label: 'Wrong Item' },
		{ value: 'OTHER', label: 'Other' },
	];

	return (
		<Box
			className="cfs-root"
			sx={{
				pb: '0 !important',
			}}>
			<Grid
				container
				spacing={3}
				alignItems="flex-start"
				justifyContent="center"
				marginBottom={3}>
				{/* LEFT SECTION */}
				<Grid
					size={{ xs: 10, md: 5 }}
					className="cfs-left-col"
					sx={{ display: 'grid', gap: 3 }}>
					{/* Order Details */}
					<Card className="cfs-card">
						<CardContent>
							<div className="cfs-card-header">
								<ShoppingBasketOutlinedIcon className="cfs-card-icon" />
								<Typography className="cfs-title">Order Details</Typography>
							</div>
							<TextField
								fullWidth
								label="Order ID / Reference Number"
								placeholder="Enter Order ID / Reference Number"
								size="small"
								InputLabelProps={{
									sx: {
										fontSize: '12px',
										lineHeight: '16px',
										fontWeight: 500,
										fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui',
									},
								}}
							/>
							<Typography
								sx={{ color: 'black', fontSize: '12px' }}
								className="cfs-helper-text">
								Enter Order ID same as that from the source channel or Enter a
								new Order ID
							</Typography>
						</CardContent>
					</Card>

					{/* Shipment Details */}
					<Card className="cfs-card">
						<CardContent>
							{/* Header */}
							<div className="cfs-card-header">
								<ShoppingBasketOutlinedIcon className="cfs-card-icon" />
								<Typography className="cfs-title">Shipment Details</Typography>
							</div>

							<Grid container spacing={2}>
								{/* Shipment Description */}
								<Grid size={{ xs: 8 }} sx={{ pt: 3 }}>
									<TextField
										fullWidth
										label="Shipment Description"
										placeholder="Enter a description of the item"
										size="small"
										InputLabelProps={{
											sx: {
												fontSize: '12px',
												lineHeight: '16px',
												fontWeight: 500,
												fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui',
											},
										}}
									/>
								</Grid>

								{/* Item Count */}
								<Grid size={{ xs: 4 }}>
									<Typography className="cfs-field-label cfs-title">
										Item Count
									</Typography>
									<Box className="cfs-counter-input">
										<IconButton size="small">
											<RemoveIcon />
										</IconButton>
										<Typography
											className="cfs-counter-value"
											sx={{ color: 'black' }}>
											0
										</Typography>
										<IconButton size="small">
											<AddIcon />
										</IconButton>
									</Box>
								</Grid>

								{/* HSN Code */}
								<Grid size={{ xs: 6 }}>
									<TextField
										fullWidth
										label="HSN Code (Optional)"
										placeholder="Enter HSN Code"
										size="small"
										InputLabelProps={{
											sx: {
												fontSize: '12px',
												lineHeight: '16px',
												fontWeight: 500,
												fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui',
											},
										}}
									/>
								</Grid>

								{/* Package Value */}
								<Grid size={{ xs: 6 }}>
									<TextField
										fullWidth
										label="Package Value"
										placeholder="Enter Package Value"
										size="small"
										InputLabelProps={{
											sx: {
												fontSize: '12px',
												lineHeight: '16px',
												fontWeight: 500,
												fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui',
											},
										}}
									/>
									<div className="cfs-value-row-bottom">
										<Typography
											sx={{ color: 'black', fontSize: '12px' }}
											className="cfs-helper-text">
											Total package value (Including tax)
										</Typography>
									</div>
								</Grid>

								{/* Shipment / Tax / Total row */}
								<Grid size={{ xs: 12 }}>
									<Grid size={{ xs: 12 }}>
										<FormControlLabel
											control={<Checkbox size="small" />}
											label="My package contains fragile items"
											sx={{
												fontSize: 12,
												color: '#000',
												'& .MuiFormControlLabel-label': {
													color: '#000',
													fontSize: 12,
												},
											}}
										/>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>

					{/* Other Details */}
					<Card className="cfs-card">
						<CardContent>
							{/* Header */}
							<Box display="flex" alignItems="center" gap={1.5} mb={3}>
								<DescriptionOutlinedIcon className="cfs-card-icon" />
								<Typography className="cfs-title" sx={{ py: 2 }}>
									Other Details
								</Typography>{' '}
							</Box>

							<Grid container spacing={2}>
								<Grid size={{ xs: 6 }}>
									<label htmlFor="reason-for-return">Reason for return</label>
									<Select
										fullWidth
										size="small"
										value={returnReason}
										onChange={(e) => setReturnReason(e.target.value)}
										sx={{
											height: '2.3rem',
											'& .MuiSelect-select': {
												fontSize: '12px !important',
												fontWeight: 500,
												fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui',
											},
										}}>
										{returnreasonOptions.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</Select>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>

				{/* RIGHT SECTION */}
				<Grid
					size={{ xs: 12, md: 4 }}
					className="cfs-right-col"
					sx={{ display: 'grid', gap: 3 }}>
					{/* Delivery Details */}
					<Card className="cfs-card">
						<CardContent>
							{/* Header */}
							<Box display="flex" alignItems="center" gap={1.5} mb={2}>
								<LocationOnOutlinedIcon className="cfs-card-icon" />
								<Typography className="cfs-title">Delivery Details</Typography>
								<InfoOutlinedIcon fontSize="small" sx={{ color: '#9ca3af' }} />
							</Box>

							{/* Timeline + Content */}
							<Box display="flex" gap={2}>
								{/* Timeline */}
								<Box className="cfs-timeline">
									<VerticalStepIndicator activeStep="seller" />
								</Box>

								{/* Content */}
								<Box flex={1}>
									{/* Customer */}
									<Box className="cfs-customer-row">
										<Button
											onClick={() => setOpenCustomer(true)}
											fullWidth
											variant="text"
											startIcon={<PersonAddAltOutlinedIcon />}
											className="cfs-link-btn">
											Add Customer Details
										</Button>
									</Box>

									<AddCustomerDialog
										open={openCustomer}
										onClose={() => setOpenCustomer(false)}
									/>

									{/* Facility */}
									<FormControl fullWidth size="small" sx={{ mb: 2 }}>
										{/* <InputLabel shrink>Select Facility</InputLabel> */}
										<Select
											value="Select Facility"
											size="small"
											sx={{
												height: '2.3rem',
												'& .MuiSelect-select': {
													fontSize: '12px !important',
													fontWeight: 500,
													fontFamily:
														'"IBM Plex Sans", ui-sans-serif, system-ui',
												},
											}}>
											<MenuItem value="Select Facility">
												Select Facility
											</MenuItem>
											<MenuItem value="BHE1">BHE1</MenuItem>
											<MenuItem value="BHE2">BHE2</MenuItem>
										</Select>
									</FormControl>

									{/* Seller */}
									<Box className="cfs-seller-row">
										<Button
											sx={{ paddingLeft: '2rem' }}
											onClick={() => setOpenSeller(true)}
											fullWidth
											variant="text"
											startIcon={<EditOutlinedIcon />}
											className="cfs-link-btn">
											Add Seller Details
										</Button>
									</Box>

									{/* Popup */}
									<AddSellerDialog
										open={openSeller}
										onClose={() => setOpenSeller(false)}
									/>
								</Box>
							</Box>
						</CardContent>
					</Card>

					<Card className="cfs-card">
						<CardContent>
							<Box display="flex" alignItems="center" gap={1.5} mb={2}>
								<Inventory2OutlinedIcon className="cfs-card-icon" />
								<Typography className="cfs-title">Box Details</Typography>
							</Box>
							<Typography
								className="cfs-label"
								sx={{
									fontSize: 14,
									'& .MuiFormControlLabel-label': {
										fontSize: 12,
									},
								}}>
								How many boxes will you ship?
							</Typography>

							<Box display="flex" alignItems="center" gap={1} width="100%">
								{/* Radios (fixed width) */}
								<RadioGroup row sx={{ flexShrink: 0 }}>
									{[1, 2, 3, 4, 5].map((v) => (
										<FormControlLabel
											key={v}
											value={v}
											label={v}
											control={<Radio />}
											sx={{
												mr: 1,
												'& .MuiFormControlLabel-label': {
													color: '#000',
													fontWeight: 500,
												},
											}}
										/>
									))}
								</RadioGroup>

								{/* Auto-expanding input */}
								<TextField
									type="number"
									size="small"
									placeholder="6+"
									value={customBoxCount}
									onChange={(e) => setCustomBoxCount(Number(e.target.value))}
									inputProps={{ min: 6 }}
									sx={{
										flex: 1,
										minWidth: 0,
										backgroundColor: '#fff',
										borderRadius: '6px',
										'& .MuiInputBase-input': {
											textAlign: 'center',
											fontWeight: 500,
											padding: '6px 8px',
										},
									}}
								/>
							</Box>

							{/* <RadioGroup
								row
								value={boxOption}
								onChange={(e) =>
									setBoxOption(
										e.target.value === 'more' ? 'more' : Number(e.target.value),
									)
								}
								sx={{ alignItems: 'center', gap: 1 }}>
								{[1, 2, 3, 4, 5].map((v) => (
									<FormControlLabel
										key={v}
										value={v}
										label={v}
										control={
											<Radio
												sx={{
													color: '#000',
													'&.Mui-checked': { color: '#000' },
												}}
											/>
										}
										sx={{
											'& .MuiFormControlLabel-label': {
												color: '#000',
												fontWeight: 500,
											},
										}}
									/>
								))}

 								<FormControlLabel
									value="more"
									control={
										<Radio
											sx={{
												color: '#000',
												'&.Mui-checked': { color: '#000' },
											}}
										/> 
									}
									sx={{
											'& .MuiFormControlLabel-label': {
												color: '#000',
												fontWeight: 500,
												fontSize: 12,
											},
										}}
									label="more than 5"
								/>

 								{boxOption === 'more' && (
									<TextField
										type="number"
										size="small"
										value={customBoxCount} 
										onChange={(e) => setCustomBoxCount(Number(e.target.value))}
										inputProps={{
											min: 6,
											style: { textAlign: 'center' },
										}}
										sx={{
											width: 80,
											color: '#000',
											'& .MuiInputBase-input': {
												padding: '3px 0',
											},
											ml: 1,
											'& input': {
												fontWeight: 500,
											},
										}}
									/>
								)}
							</RadioGroup> */}
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			{/* FOOTER ACTIONS */}
			<Box className="cfs-footer">
				<Button variant="contained">Cancel</Button>
				<Button variant="contained">Create Reverse Shipment</Button>
			</Box>
		</Box>
	);
};

export default CreateReverseShipment;

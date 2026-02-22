/** @format */

import {
	Box,
	Grid,
	TextField,
	Typography,
	InputAdornment,
	Select,
	MenuItem,
	Chip,
	Checkbox,
	FormControlLabel,
	Divider,
	Paper,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPickupSchema } from '../../validation/addPickup.schema';
import {
	WorkingDayEnum,
	type AddPickupPayload,
} from '../../types/pickup.types';
import { fetchPincodeDetails } from '../../services/pincode.service';
import { useEffect } from 'react';
import AppDialog from '../../../../../components/common/AppDialog/AppDialog';
import StickyFooter from '../../../../../components/common/StickyFooter';

interface Props {
	open: boolean;
	onClose: () => void;
}

const workingDaysMap = [
	{ label: 'Monday', value: WorkingDayEnum.MONDAY },
	{ label: 'Tuesday', value: WorkingDayEnum.TUESDAY },
	{ label: 'Wednesday', value: WorkingDayEnum.WEDNESDAY },
	{ label: 'Thursday', value: WorkingDayEnum.THURSDAY },
	{ label: 'Friday', value: WorkingDayEnum.FRIDAY },
	{ label: 'Saturday', value: WorkingDayEnum.SATURDAY },
	{ label: 'Sunday', value: WorkingDayEnum.SUNDAY },
];
const AddPickupDialog = ({ open, onClose }: Props) => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<AddPickupPayload>({
		resolver: yupResolver(addPickupSchema),
		defaultValues: {
			contactPersonName: '',
			workingDays: Object.values(WorkingDayEnum),
			returnSameAddress: true,
		},
	});

	const pincode = useWatch({ control, name: 'pincode' });

	// Auto fetch city/state
	useEffect(() => {
		if (pincode?.length === 6) {
			const timeout = setTimeout(async () => {
				try {
					const data = await fetchPincodeDetails(pincode);
					setValue('city', data.city);
					setValue('state', data.state);
				} catch {
					setValue('city', '');
					setValue('state', '');
				}
			}, 500);

			return () => clearTimeout(timeout);
		}
	}, [pincode, setValue]);

	const onSubmit = (data: AddPickupPayload) => {
		console.log('FINAL PAYLOAD →', data);
	};

	return (
		<AppDialog
			open={open}
			title="Add Pickup Address"
			onClose={onClose}
			maxWidth="md">
			<Box
				display="flex"
				flexDirection="column"
				height="75vh"
				paddingBottom={'8px'}>
				{/* SCROLLABLE BODY */}
				<Box flex={1} overflow="auto" pr={1}>
					{/* Address Header */}
					<Box display="flex" alignItems="center" gap={1} mb={2}>
						<LocationOnOutlinedIcon fontSize="small" />
						<Typography fontWeight={600} color="text.primary">
							Address Details
						</Typography>
					</Box>

					<Grid container spacing={2}>
						{/* Facility Name */}
						<Grid size={{ xs: 6 }}>
							<Controller
								name="facilityName"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="Facility Name"
										fullWidth
										size="small"
										error={!!errors.facilityName}
										helperText={
											errors.facilityName?.message ||
											'Please note that facility name cannot be edited after saving'
										}
									/>
								)}
							/>
						</Grid>

						{/* Mobile */}
						<Grid size={{ xs: 6 }}>
							<Controller
								name="mobile"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="Pickup Location Contact"
										fullWidth
										size="small"
										error={!!errors.mobile}
										helperText={errors.mobile?.message}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">+91</InputAdornment>
											),
										}}
									/>
								)}
							/>
						</Grid>

						{/* Address */}
						<Grid size={{ xs: 12 }}>
							<Controller
								name="addressLine"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="Address Line"
										fullWidth
										size="small"
										error={!!errors.addressLine}
										helperText={
											errors.addressLine?.message ||
											'This will be used in invoices'
										}
									/>
								)}
							/>
						</Grid>

						{/* Pincode */}
						<Grid size={{ xs: 6 }}>
							<Controller
								name="pincode"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="Pincode"
										fullWidth
										size="small"
										error={!!errors.pincode}
										helperText={errors.pincode?.message}
									/>
								)}
							/>
						</Grid>

						{/* City */}
						<Grid size={{ xs: 6 }}>
							<Controller
								name="city"
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label="City"
										disabled
										fullWidth
										size="small"
									/>
								)}
							/>
						</Grid>
					</Grid>

					{/* Pickup Slot */}
					<Box mt={3}>
						<Paper variant="outlined" sx={{ p: 2 }}>
							<Box display="flex" gap={1} mb={1}>
								<CalendarMonthOutlinedIcon fontSize="small" />
								<Typography fontWeight={600} color="text.primary">
									Default Pickup Slot
								</Typography>
							</Box>

							<Controller
								name="defaultSlot"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										fullWidth
										size="small"
										error={!!errors.defaultSlot}>
										<MenuItem value="">Select Slot</MenuItem>
										<MenuItem value="9-12">09:00 AM - 12:00 PM</MenuItem>
									</Select>
								)}
							/>
						</Paper>
					</Box>

					<Divider sx={{ my: 3 }} />

					{/* Working Days */}
					<Typography fontWeight={600} color="text.primary" mb={1}>
						Working Days
					</Typography>

					<Controller
						name="workingDays"
						control={control}
						render={({ field }) => (
							<Box display="flex" flexWrap="wrap" gap={1}>
								{workingDaysMap.map((day) => {
									const selected = field.value?.includes(day.value);
									return (
										<Chip
											key={day.value}
											label={day.label}
											clickable
											variant={selected ? 'filled' : 'outlined'}
											onClick={() => {
												const updated = selected
													? (field.value ?? []).filter(
															(d: WorkingDayEnum) => d !== day.value,
														)
													: [...(field.value ?? []), day.value];

												field.onChange(updated);
											}}
											sx={{
												backgroundColor: selected ? '#0d2868' : 'transparent',
												color: selected ? '#fff' : 'text.primary',
												borderColor: selected ? '#0d2868' : undefined,
												'&:hover': {
													backgroundColor: selected
														? '#0a1f52'
														: 'rgba(13,40,104,0.08)',
												},
											}}
										/>
									);
								})}
							</Box>
						)}
					/>

					<Divider sx={{ my: 3 }} />

					<FormControlLabel
						control={
							<Controller
								name="returnSameAddress"
								control={control}
								render={({ field }) => (
									<Checkbox
										{...field}
										checked={field.value}
										color="primary"
									/>
								)}
							/>
						}
						label={
							<Typography fontSize="12px" color="text.secondary">
								Return address is the same as pickup address
							</Typography>
						}
					/>
				</Box>

				{/* STICKY FOOTER */}
				<StickyFooter
					primaryLabel="Add Pickup Address"
					secondaryLabel="Cancel"
					onSecondaryClick={onClose}
					onPrimaryClick={handleSubmit(onSubmit)}
				/>
			</Box>
		</AppDialog>
	);
};

export default AddPickupDialog;

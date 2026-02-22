/** @format */

import * as yup from 'yup';
import { WorkingDayEnum, type AddPickupPayload } from '../types/pickup.types';

export const addPickupSchema: yup.ObjectSchema<AddPickupPayload> = yup.object({
	facilityName: yup.string().required('Facility name is required'),
	contactPersonName: yup.string().optional(),
	mobile: yup
		.string()
		.matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit mobile number')
		.required('Mobile number is required'),
	email: yup.string().email('Enter valid email').optional(),
	addressLine: yup.string().required('Address is required'),
	pincode: yup
		.string()
		.matches(/^\d{6}$/, 'Enter valid 6-digit pincode')
		.required('Pincode is required'),
	city: yup.string().required(),
	state: yup.string().required(),
	defaultSlot: yup.string().required('Select pickup slot'),
	workingDays: yup
		.array(
			yup
				.mixed<WorkingDayEnum>()
				.oneOf(Object.values(WorkingDayEnum) as WorkingDayEnum[])
				.defined(),
		)
		.min(1, 'Select at least one working day')
		.required(),
	returnSameAddress: yup.boolean().required(),
});

export const WorkingDayEnum = {
	MONDAY: 'MONDAY',
	TUESDAY: 'TUESDAY',
	WEDNESDAY: 'WEDNESDAY',
	THURSDAY: 'THURSDAY',
	FRIDAY: 'FRIDAY',
	SATURDAY: 'SATURDAY',
	SUNDAY: 'SUNDAY',
} as const;

export type WorkingDayEnum = typeof WorkingDayEnum[keyof typeof WorkingDayEnum];

export interface AddPickupPayload {
	facilityName: string;
	contactPersonName?: string;
	mobile: string;
	email?: string;
	addressLine: string;
	pincode: string;
	city: string;
	state: string;
	defaultSlot: string;
	workingDays: Array<typeof WorkingDayEnum[keyof typeof WorkingDayEnum]>;
	returnSameAddress: boolean;
}
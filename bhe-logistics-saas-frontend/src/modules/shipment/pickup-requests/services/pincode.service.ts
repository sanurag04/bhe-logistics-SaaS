import axios from 'axios';

export const fetchPincodeDetails = async (pincode: string) => {
	const { data } = await axios.get(
		`https://api.postalpincode.in/pincode/${pincode}`
	);

	if (data[0].Status !== 'Success') {
		throw new Error('Invalid Pincode');
	}

	const postOffice = data[0].PostOffice[0];

	return {
		city: postOffice.District,
		state: postOffice.State,
	};
};
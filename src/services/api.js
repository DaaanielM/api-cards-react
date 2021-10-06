import axios from 'axios';

const api = 'https://run.mocky.io/v3/c25cf492-dae5-419d-a73c-dacadccf1d04';

export const responseApi = async () => {
	try {
		const response = await axios.get(api);
		return response;
	} catch (error) {
		console.log(error);
	}
};

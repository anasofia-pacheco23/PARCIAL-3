import { Screens } from '../types/navigation';
import { getDiscos} from '../utils/firebase';

export const navigate = (screen: Screens) => {
	return {
		type: 'NAVIGATE',
		payload: screen,
	};
};

export const getDiscosAction = async () => {
	const disco = await getDiscos();
	return {
		type: 'GETDISCOS',
		payload: disco,
	};
};
import { Observer } from '../types/store';
import { Screens } from '../types/navigation';
import { reducer } from './reducer';
import { navigate } from './actions';
import { DiscoData } from '../types/discoData';

type DiscoDataType = DiscoData[];

const emptyState = {
	screen: Screens.HOME,
	disco: [] as DiscoDataType,
};

export let appState = emptyState;
let observers: Observer[] = [];
export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};
export const reducer = (action: any, preventState: any) => {
	switch (action.type) {
		case 'GETDISCOS':
			preventState.post = action.payload;
			break;
	}
	return preventState;
};
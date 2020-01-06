interface InitialStateType {
	test: string;
}

const initState = {
	test: ''
};

interface ActionType {
	type: string;
	payload: string;
}

const ReducerTest = (state: InitialStateType = initState, action: ActionType) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ReducerTest;

// add code snippets from README
let state = {count:0};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            function dispatch(action){
             state = reducer(state, action);
            }
            return {count:state.count + 1}
        // default
            // return state
    }
}

reducer({count: 10}, {type: 'INCREASE_COUNT'});
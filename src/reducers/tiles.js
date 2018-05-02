import {combineReducers} from 'redux';
import tilesContainer from './../tiles/tiles';
import * as actions from './../actions/actions';

function tiles(state = tilesContainer, action){
    console.log(state);
    switch (action.type) {
        case 'TOGGLE_TILE':
            var prevValue, currValue, i=0;
            if(i>=2){
                state.map((value) => {
                    if(value.opened === true){
                        currValue = value;
                        if(!prevValue){
                            prevValue = value;
                        }
                        console.log('prevValue: '+prevValue+' currValue'+currValue);
                        if(prevValue && currValue && prevValue.name == currValue.name){
                            return [ 
                                Object.assign({}, prevValue, {
                                    disapeared: true
                                }),
                                Object.assign({}, currValue, {
                                    disapeared: true
                                })
                            ];
                        }else{
                            return [
                                Object.assign({}, prevValue, {
                                    opened: false
                                }),
                                Object.assign({}, currValue, {
                                    opened: false
                                })
                            ];
                        }
                        prevValue = currValue;
                    }
                });
            }else{
                state.map((value) => {
                    if(value.opened === "true"){
                        i++;
                    }
                    return Object.assign({}, value, {
                        opened: !value.opened
                    });
                });
            }
            break;
        default:
            return state;
    }
}

const reducers = combineReducers({
    tiles
});

export default reducers;
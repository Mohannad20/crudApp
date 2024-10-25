import { configuretore } from 'redux';
import reducer from './reducer';

const store = configuretore({
    reducer : {
        users : reducer
    }
});

export default store;
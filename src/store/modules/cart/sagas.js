import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
    const productExists = yield select(state => state.cart.find(p => p.id === id));
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;
    
    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    }else {
        const response = yield call(api.get, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));

        history.push('/cart');
    }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
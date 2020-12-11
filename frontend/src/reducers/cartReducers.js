import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_RESET, CART_SAVE_CHECKOUT_BUTTON_SELECTED } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: { address: '', city: '', postalCode: '', country: '' }, paymentMethod: '', checkoutButtonSelected: false }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const existItem = state.cartItems.find(
				(x) => x.product === item.product
			);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(x) => x.product !== action.payload
				),
			};
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload
			};
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload
			};
		case CART_SAVE_CHECKOUT_BUTTON_SELECTED:
			return {
				...state,
				checkoutButtonSelected: true
			};
		case CART_RESET:
			localStorage.removeItem('cartItems')
			localStorage.removeItem('shippingAddress')
			localStorage.removeItem('paymentMethod')
			localStorage.removeItem('checkoutButtonSelected')
			return {
				...state,
				cartItems: [],
				shippingAddress: { address: '', city: '', postalCode: '', country: '' },
				paymentMethod: '',
				checkoutButtonSelected: false
			}
		default:
			return state;
	}
};

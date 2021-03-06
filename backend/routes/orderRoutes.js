const express = require('express');
const router = express.Router();

const {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getMyOrders,
	getOrders,
	updateOrderToDelivered,
} = require('../controllers/orderController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/delivered').put(protect, admin, updateOrderToDelivered);

// export default Router;
module.exports = router;

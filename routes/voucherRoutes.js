import express from 'express';
import { addVoucher, getVouchers, getVoucherByCode, deleteVoucher, redeemVoucher, updateVoucher } from '../controllers/voucherController.js';

const router = express.Router();
router.post('/api/vouchers', addVoucher);
router.get('/api/vouchers', getVouchers);
router.get('/api/vouchers/code/:voucherCode', getVoucherByCode);
router.delete('/api/vouchers/:id', deleteVoucher);
router.post('/api/vouchers/redeem/:voucherCode', redeemVoucher);
router.put('/api/vouchers/:id', updateVoucher);

export default router;

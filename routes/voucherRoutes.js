import express from 'express';
import { addVoucher, getVouchers, getVoucherByCode, deleteVoucher, redeemVoucher, updateVoucher } from '../controllers/voucherController.js';

const voucherRouter = express.Router();
voucherRouter.post('/api/vouchers', addVoucher);
voucherRouter.get('/api/vouchers', getVouchers);
voucherRouter.get('/api/vouchers/code/:voucherCode', getVoucherByCode);
voucherRouter.delete('/api/vouchers/:id', deleteVoucher);
voucherRouter.post('/api/vouchers/redeem/:voucherCode', redeemVoucher);
voucherRouter.put('/api/vouchers/:id', updateVoucher);

export default voucherRouter;

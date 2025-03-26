import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String , required: true },
    items: { type: Array, required: true },
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: Object, required: true },
    orderStatus: { type: String, default: "Pcessing" }, 
    orderDate: { type: Date, default: Date.now },
    PaymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: "Pending" },
});

const orderModel = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default orderModel;

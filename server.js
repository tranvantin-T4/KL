import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import 'dotenv/config'
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRoute from "./routes/ordersRoutes.js";
import reviewspRouter from "./routes/reviewspRoutes.js";
// import voucherRoutes from './routes/VoucherRoutes.js';

const app = express();
const port = 4000;


// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




connectDB();

app.use('/api/product',productRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRoute)
app.use('/reviewsp', reviewspRouter);
// app.use('/', voucherRoutes);

app.get("/",(req,res)=>{
    res.send("api")
});
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
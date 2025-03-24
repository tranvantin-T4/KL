import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";

import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
// import cartRouter from "./routes/cartRoute.js";
// import orderRoute from "./routes/orderRoute.js";
// import reviewRouter from "./routes/reviewRoute.js";
// import voucherRoutes from './routes/VoucherRoutes.js';

const app = express();
const port = 4000;


// Middleware
app.use(express.json());
app.use(cors());

app.use(express.json())
app.use(cors())

connectDB();

app.use('/api/product',productRouter)
// app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRoute)
// app.use('/reviews', reviewRouter);
// app.use('/', voucherRoutes);

app.get("/",(req,res)=>{
    res.send("api")
});
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
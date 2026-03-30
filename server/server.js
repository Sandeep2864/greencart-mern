import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import "dotenv/config";

const app = express();
const PORT = 4000;

await connectDB();

// Allow multiple origins  
const allowedOrigins = ['http://localhost:5173']

//middleware configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:allowedOrigins,credentials:true}))

app.get('/',(req,res) => res.send('Api is Working'))

app.listen(PORT, () => {
   console.log(`Server is running on http://locahost:${PORT}`)
})


const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors = require('cors');
const userRoutes=require("./models-routes/models/routes/user");
//const vehicleRoutes=require('./models-routes/models/routes/vehicle');
mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://localhost:27017/issues',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const connection = mongoose.connection;



mongoose.connect('mongodb+srv://avvarijyothi:Jyothi$21@cluster0.wpbtj.mongodb.net/Parking_lot?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
 });


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use('/user',userRoutes);
//app.use('/shop',vehicleRoutes);
app.listen(3500,() =>{
console.log("server is running at 3500");
})
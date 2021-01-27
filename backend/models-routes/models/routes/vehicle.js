// const express=require('express');
// const router=express.Router();
// const Vehicle=require('../model/vehicle');
//const multer=require('multer');
//const {getDistance,convertDistance}=require('geolib');


//const mongoose=require('mongoose')





// const storage = multer.diskStorage({
  
//   destination: function(req, file,cb) {
//       cb(null, './uploads/');
//   },
//   filename: function(req, file, cb) {
//       cb(null, file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) =>{
//   if(file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
//       cb(null, true);
//   }
//   else {
//   cb(new Error('message'), false);
//   }
// }
// const upload = multer({ 
//   storage:storage,
  
// });













// router.post('/registration',(req,res,next)=>{
//   Vehicle.find({name:req.body.name})
//   .exec()
//   .then(issue=>{
//     if(issue.length>=1){
//       return res.status(409).json({
//             message:'shop exists' 
//       });
//     }
//   else{
//     const vehicle=new Vehicle({
//          _id:new mongoose.Types.ObjectId(),
//          name:req.body.name,
//          latitude:req.body.latitude,
//          longitude:req.body.longitude,
//          description:req.body.description,
//          avgrating:req.body.avgrating,
         
//     });
//     vehicle
//     .save()
//     .then(result=>{
//              console.log(result);
//              res.status(201).json({
//                 message: "Created shop successfully",
//                 createdshop: {
//                     name:result.name,
//                     latitude:result.latitude,
//                     longitude:result.longitude,
//                     description:result.description,
//                     avgrating:result.avgrating,
                   
//                     _id: result._id,
                    
//                 }
//               });
              
//     })
//     .catch(err => {
//           console.log(err);
//           res.status(500).json({
//             error: err
//           });
//         });
//       }
//      });
//     });
//  router.get("/byId/:shopId", (req, res, next) => {
//     const id = req.params.shopId;
//      Vehicle.findById(id)
//       .exec()
//       .then(doc => {
//         console.log("From database", doc);
//         if (doc) {
//             res.status(200).json({
//                 user: doc,
               
//               });
//             } else {
//               res
//                 .status(404)
//                 .json({ message: "No valid entry found for provided ID" });
//             }
//           })
//           .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err });
//           });
//       });
                  
//   router.get("/getshops",(req,res,next)=>{
//     Vehicle.find()
//     .exec()
//     .then(doc=>{
//       res.json(doc);
//     });
//   });
//   router.post('/getshop', (req, res, next)  => {
//     Vehicle.find({ name: req.body.name})
//     .exec()
//     .then(issue => {
//             if(issue.length < 1)
//             {
//                 return res.status(401).json({
//                     message : "shop not found"
//                 });
//             }
//             else{
//              return res.status(200).json(issue);
//             }            
//             });
//         });
// router.post("/getnearby",(req,res,next)=>{
  
//   var arr=[];  
//   Shop.find()
//     .exec()
//     .then(doc=>{   
//       const l=doc.length;
//       for( i=0;i<l;i++){
//       let distance=getDistance({latitude:req.body.lat,longitude:req.body.lng},{latitude:doc[i].latitude,longitude:doc[i].longitude},1000);
//       if(convertDistance(distance,'km')<15000){
//            arr.push(doc[i]) ;}}
//            res.json(arr);
//     });
//   });

module.exports = router;
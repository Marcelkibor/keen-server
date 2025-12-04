const { CreateBooking } = require("../services/Booking/CreateBooking");

const router = require("express").Router();

router.post("/register", async(req, res) => {
    res.send({message:"User registered successfully",status:200,data:req.body});
}
);
router.post("/create-booking", async(req, res) => {
    let status = await CreateBooking(req.body);
    if(status){
        res.send({message:"Booking created successfully",status:200,data:req.body});
        return;
    }
});

module.exports = router;
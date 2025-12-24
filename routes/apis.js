const { CreateBooking } = require("../services/Booking/CreateBooking");
const { GetBooking } = require("../services/Booking/GetBooking");
const { UpdateBooking } = require("../services/Booking/UpdateBooking");

const router = require("express").Router();

router.post("/register-admin", async(req, res) => {
    let status = await RegisterAdmin(req.body);
    if(status){
        res.send({message:"Admin registered successfully",status:200,data:req.body});
        return;
    } else {
        res.send({message:"Admin registration failed",status:400});
        return;
    }
}
);
router.post("/create-booking", async(req, res) => {
    let status = await CreateBooking(req.body);
    if(status){
        res.send({message:"Booking created successfully",status:200,data:req.body});
        return;
    }
    else{
        res.send({message:"Booking creation failed",status:status});
        return;
    }
});
router.get("/get-booking", async(req, res) => {
    let bookings = await GetBooking();
    if(bookings){
        res.send({message:"Bookings retrieved successfully",status:200,data:bookings});
        return;
    }
    else{
        res.send({message:"No bookings found",status:404});
        return;
    }
})
router.put("/update-booking/:id", async(req, res) => {
    let status = await UpdateBooking(req.params.id, req.body);
    if(status){
        res.send({message:"Booking updated successfully",status:200,data:req.body});
        return;
    }
    else{
        res.send({message:"Booking update failed",status:400});
        return;
    }
});
module.exports = router;
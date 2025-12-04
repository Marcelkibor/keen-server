const Booking = require('../../models/Booking').default;
const GetBooking = async () => {
    //just retreive all bookings in the database, no filters for now
    const booking = await Booking.findAll();
    return booking;
}
module.exports = { GetBooking };
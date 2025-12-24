const  Booking  = require("../../models/Booking");

const UpdateBooking = async (bookingId) => {
  try {
    const [updated] = await Booking.update(
      { status: "Confirmed" },
      { where: { id: bookingId } }
    );

    if (updated === 0) return null;

    // Optional: return fresh data
    return await Booking.findByPk(bookingId);
  } catch (error) {
    throw new Error("Failed to confirm booking: " + error.message);
  }
};

module.exports = { UpdateBooking };
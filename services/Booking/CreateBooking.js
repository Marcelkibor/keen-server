const Booking = require('../../models/Booking');
export const CreateBooking = async (data) => {
    try {
        const firstname = data.firstname;
        const lastname = data.lastname;
        const email = data.email;
        const phone = data.phone;
        const status = data.status;
        const details = data.details;
        const date = data.date;
        const time = data.time;
        const location = data.location;
        const service = data.service;
        const teamMember = data.teamMember;
       const newBooking = await Booking.create({
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            status: status,
            details: details,
            date: date,
            time: time,
            location: location,
            service: service,
            teamMember: teamMember,
        });
        return newBooking;
    }
    catch (error) {
        throw new Error("Error creating booking: " + error.message);
    }
}
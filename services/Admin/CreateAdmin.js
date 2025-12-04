const AdminModel = require('../../models/Admin');
const bcrypt = require('bcryptjs');
export const CreateAdmin = async (data) => {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(data.password, salt);
        const newAdmin = await AdminModel.create({
            username: data.username,
            password: password,
        });
        return newAdmin;

};
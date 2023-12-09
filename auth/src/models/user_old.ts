import mongoose from "mongoose";

// We can't do effective type checking using mongoose in typescript, so we need a workaround i.e., buildUser
// An interface that describes the properties that are required to create a new User_old

interface UserAttrs {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User_old = mongoose.model('User_old', userSchema);

const buildUser = (attrs: UserAttrs) => {
    return new User_old(attrs);
}

buildUser({
    email: 'test@test.com',
    password: 'qweqwe'
})

export { User_old, buildUser };
import mongoose from "mongoose";
import { Password } from "../helper/password";

// We can't do effective type checking using mongoose in typescript, so we need a workaround i.e., buildUser
// An interface that describes the properties that are required to create a new User_old

interface UserAttrs {
    email: string;
    password: string;
}

// An interface that describes the properties that a user model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// an interface that describes the properties that a User document has
interface UserDoc extends mongoose.Document {
    email: String;
    password: String;
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
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id
            delete ret.password;
            delete ret.__v
        }
    }
});
// middleware cant user arrow function because this value will be overridden
userSchema.pre('save', async function (done){
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'))
        this.set('password', hashed)
    }
    done();
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const user = User.build({
//     email: 'test@test.com',
//     password: 'qweqwe'
// })

export { User };
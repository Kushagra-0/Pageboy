import { User } from "../db/models/user.model";
import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken"

class UserService {
    public findUserByEmail = async(email: String): Promise<User | null> => {
        const user = await User.findOne({where: {email}})
        return user;
    };

    public createUser = async (email: string, password: string) => {
        const salt = await genSalt();
        const hashedPassword = await hash(password, salt);
        const verificationToken = jwt.sign({ email }, "verify_email");
        const user = await User.create({
            email: email,
            password: hashedPassword,
            verificationToken: verificationToken,
        });

        
    }
}

const userService = new UserService();

export {userService};
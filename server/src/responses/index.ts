const userNotFound: Array<ResponseMessage> = [
    {
        msg: "Your email or password is incorrect",
    },
];

const emailNorVerified: Array<ResponseMessage> = [
    {
        msg: "Please verify your email before loggin in",
    },
];

const resetPassword: Array<ResponseMessage> = [
    {
        msg: "If a user with that email exists, you will receive an email with instructions to reset your password",
    },
];

export { userNotFound, emailNorVerified, resetPassword };
export class UserDto {
    public _id: String | undefined;
    public name: String | undefined;
    public emailId: String | undefined;
    public phoneNo: Number | undefined;
    public occupation: String | undefined;
}

export class loginDto {
    public token: String | undefined;
    public user: UserDto | undefined;
}

export class signIn {
    public emailId: String | undefined;
    public password: String | undefined;
}

export class signInDto {
    public emailId: String | undefined;
    public password: String | undefined;
    public name: String | undefined;
    public phoneNo: Number | undefined;
    public occupation: String | undefined;
}


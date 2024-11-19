export class User {
    firstName: string;
    lastName: string;
    phoneNumb: string;
    birthDate: number | Date | any;
    email: string;
    street: string;
    zipCode: number;
    city: string;
    id: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.phoneNumb = obj ? obj.phoneNumb : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.email = obj ? obj.email : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : 0;  // Set default as 0
        this.city = obj ? obj.city : '';
        this.id = obj ? obj.id : '';
    }
}

console.log("Welcome to AddressBook program using JavaScript")

//Importing the neccessary module
let prompt = require('prompt-sync')();

//Created contact class
class Contact {
    //Declaring the properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\tAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\tZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\tEmail-Id: ${this.emailId}\n`;
    }
}

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    return contact;
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        let firstName = prompt('Enter Your FirstName : ');
        let lastName = prompt('Enter Your LastName : ');
        let address = prompt('Enter Your Address : ');
        let city = prompt('Enter Your City Name: ');
        let state = prompt('Enter Your State Name : ');
        let zipCode = parseInt(prompt('Enter Your Zip Code : '));
        let phoneNumber = parseInt(prompt('Enter Your Phone Number : '));
        let emailId = prompt('Enter Your Email Id : ');
        let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("\nDetails Of Contacts");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}

//Calling the function
getContactDetails();
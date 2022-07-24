"use strict";
//21
function printFullName(fName, lName) {
    !lName ? console.log(fName) : console.log(`${fName} ${lName}`);
}
// printFullName("or")
//22
function printUserDetails(fullName, email) {
    !email
        ? console.log(`Name: ${fullName}`)
        : console.log(`Name: ${fullName}, Email:${email}`);
}
// printUserDetails("or gadamo","brber223@sada.com")
//23
function printCatDetails(catAge, catType, catName) {
    !catName
        ? console.log(`Cat Type:${catType}, Cat Age:${catAge}`)
        : console.log(`Cat Name:${catName}, Type:${catType}, Age:${catAge}`);
}
// printCatDetails(12,"Asian","Sprite")
//24
function printMessageByArg(text, bool = true) {
    return `${bool ? "Hello" : "Welcome"} ${text}`;
}
// console.log(printMessageByArg("or",false));
//25
function printFullString(fName, lName, title = "miss") {
    return `${title} ${fName} ${lName}`;
}
// console.log(printFullString("or","gadamo","Senpai"))
// function printTextByArgNum (txt:string,num:number=1,txt2?:string):void{
//     if(!txt2) for(let i =0;i<num;i++) console.log(txt)
//     else for(let i =0;i<num;i++) console.log(  `${txt} ${txt2}`)
// }
//26
function printTextByArgNum(txt, num = 1, txt2) {
    if (num > 0) {
        !txt2 ? console.log(txt) : console.log(`${txt} ${txt2}`);
        if (num > 1)
            printTextByArgNum(txt, --num, txt2);
    }
    else
        console.log("Function does not accept negative number");
}
// printTextByArgNum("Oni",11,"chan")
//27
function getSortedCharArrayByAlphabet(...charArray) {
    return charArray ? charArray.sort() : [];
}
// console.log(getSortedCharArrayByAlphabet('a','f','q','b','x','h','l'));
//28
function getSortedNumArrayUp(...numbersArray) {
    return numbersArray
        ? numbersArray.sort((a, b) => a - b)
        : [];
}
// console.log(getSortedNumArrayUp(1,2,1,3,56,12,32432,123,1233,112,2,21,2))
//29
function getSortedNumArrayDown(...numbersArray) {
    return numbersArray
        ? numbersArray.sort((a, b) => b - a)
        : [];
}
// console.log(getSortedNumArrayDown(1,2,1,3,56,12,32432,123,1233,112,2,21,2))
//30
function getStringOfSortNameArray(...nameArray) {
    return nameArray ? nameArray.sort().toString() : "no name";
}
// console.log(getStringOfSortNameArray("or","john","dan","batel","lior"));
//31
function getTextArray(endTxt = "end", ...txtArray) {
    if (txtArray) {
        txtArray.push(endTxt);
        return txtArray;
    }
    return [endTxt];
}
// console.log(getTextArray('hello',"hi",'hola','shalom'))
//32
function getStudentDetailsString(studentName, endGrade = "pass", classNum, ...gradeArray) {
    return `Name: ${studentName}, Final Grade: ${endGrade},${gradeArray
        ? `Grade:${gradeArray.sort((a, b) => a - b)} Avrage:${gradeArray.reduce((a, b) => a + b, 0) /
            gradeArray.length}`
        : ``} ${classNum ? `,class:${classNum}` : ``}`;
}
// console.log(getStudentDetailsString("or gadamo","fail","1",1,23,123,23))
//33
function getProductDetailsString(productName, color = "Black", discount, ...sizeArray) {
    return `Product: ${productName}, Color: ${color},${sizeArray
        ? `Sizes:${sizeArray.sort((a, b) => a - b)}`
        : ``}, ${discount ? ` ${discount} Sale` : ``}`;
}
// console.log(getProductDetailsString("shirt","red","50%",30,32,38,40,42))
//34
class Car {
    constructor(companyName, carModel, carColor) {
        this.company = companyName;
        this.model = carModel;
        this.color = carColor;
    }
}
//35
class Elephant {
    constructor(elaphantHeight, elephantType, age, orgin) {
        this.height = elaphantHeight;
        this.species = elephantType;
        this.age = age;
        this.orgin = orgin;
    }
    getDetails() {
        return `Type:${this.species} Orgin:${this.orgin} Age:${this.age} Height:${this.height}`;
    }
}
//36
class Pants {
    constructor(pantsSize, pantsColor, pantsFabric, available) {
        this.size = pantsSize;
        this.color = pantsColor;
        this.fabric = pantsFabric;
        this.inStock = available;
    }
    details() {
        return `Size:${this.size} Color:${this.color} Fabric:${this.fabric} In Stock:${this.inStock}`;
    }
    get getDetails() {
        return this.details();
    }
}
// let zara = new Pants(32,"black","cotton",true);
// console.log(zara.getDetails);
//37
class Athlete {
    constructor(fullName, dateOfBirth, field, gender) {
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.field = field;
        this.gender = gender;
    }
    details() {
        return `Full Name:${this.fullName} Date Of Birth:${this.dateOfBirth} Field:${this.field} ${this.gender ? `Gender:${this.gender}` : ""}`;
    }
    get getDetails() {
        return this.details();
    }
}
// let or = new Athlete("or gadamo","1.2.332","soccer","male");
// console.log(or.getDetails)
//38
class FootballPlayer extends Athlete {
    constructor(fullName, dateOfBirth, field, inNationalTeam, team, gender) {
        super(fullName, dateOfBirth, field, gender);
        this.team = team;
        this.inNationalTeam = inNationalTeam;
    }
    getPlayerDetails() {
        return `${super.getDetails} Team:${this.team} In National Team:${this.inNationalTeam}`;
    }
}
//39
class User {
    constructor(fullName, age, password) {
        this._connected = false;
        this.age = age;
        this.fullName = fullName;
        this.password = password;
    }
    get getConnected() {
        return this._connected;
    }
    set setConnected(bool) {
        this._connected = bool;
    }
    static getUserByAge(sortBY, ...users) {
        if (users) {
            switch (sortBY) {
                case "old":
                    return users.sort((a, b) => b.age - a.age)[0];
                case "young":
                    return users.sort((a, b) => a.age - b.age)[0];
            }
        }
        return;
    }
}
// let ori = new User("or gadamo",23,"or1111")
// let ori2 = new User("or gadamo",21,"or1111")
// console.log(User.getUserByAge("old",ori,ori2))
//40
class Student extends User {
    constructor(fName, lName, dateOfBirth, email, age, password) {
        super(`${fName} ${lName}`, age, password);
        this.fName = fName;
        this.lNAME = lName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }
    getIsConnected() {
        return this.getConnected ? "green" : "red";
    }
}
// let foo = new Student("or","gadamo","1.2.31","email",23,"yyref12");
let lior = new Student("lior", "David", "1.1.1", "safdasd", 26, "asfdasd");
lior.setConnected = false;
//41
class Room {
    constructor(width, height) {
        this.isWindows = false;
        this.height = height;
        this.width = width;
        this.area = height * width;
    }
    getDetails() {
        return `Width:${this.width} Height:${this.height} Area:${this.area} Are There Windows:${this.isWindow}`;
    }
    get getIsWindows() {
        return this.isWindows;
    }
    set setIsWindows(bool) {
        this.isWindows = bool;
    }
    static getRoomByArea(sortBy, ...rooms) {
        if (rooms) {
            switch (sortBy) {
                case "min":
                    return rooms.sort((a, b) => a.area - b.area)[0];
                case "max":
                    return rooms.sort((a, b) => b.area - a.area)[0];
            }
        }
        return;
    }
}
//42
class Kitchen extends Room {
    constructor(width, height, closetsNum) {
        super(width, height);
        this.closetsNum = closetsNum;
    }
    getKitchenDetails() {
        return `${this.getDetails()} Closets Number:${this.closetsNum}`;
    }
    getMessageByIsWindow() {
        return this.getIsWindows ? "have Windows" : "close Room";
    }
}
//43
class LivingRoom extends Room {
    constructor(width, height, seatsNum, airDirection) {
        super(width, height);
        this.seatsNum = seatsNum;
        this.airDirection = airDirection;
    }
    printLivingRoomDetails() {
        console.log(`${super.getDetails} Number Of Seats:${this.seatsNum} Air Direction:${this.airDirection}`);
    }
    getMessageByIsWindow() {
        return this.getIsWindows
            ? `have Windows Air Direction:${this.airDirection}`
            : `close Room`;
    }
}
//44
class Product {
    constructor(width, height, weight, price) {
        this.isOrdered = false;
        this.width = width;
        this.height = height;
        this.weight = weight;
        this.price = price;
    }
    get getIsOrdered() {
        return this.isOrdered;
    }
    set setIsOrdered(bool) {
        this.isOrdered = bool;
    }
    static getProductByPrice(sortBy = "high", ...products) {
        if (products) {
            switch (sortBy) {
                case "low":
                    return products.sort((a, b) => a.price - b.price)[0];
                case "high":
                    return products.sort((a, b) => b.price - a.price)[0];
            }
        }
        return;
    }
    getProductDetails() {
        return `width:${this.width} height:${this.height} weight:${this.weight} price:${this.price}`;
    }
}
//45
class Computer extends Product {
    constructor(width, height, weight, price, output) {
        super(width, height, weight, price);
        this.output = output;
    }
    getComputerDetails() {
        return `${this.getProductDetails()} output:${this.output}`;
    }
    getMessageByIsOrdered() {
        return this.getIsOrdered ? "ordered" : "need to order";
    }
}
//46
class ComputerScreen extends Product {
    constructor(width, height, weight, price, orderNum, resulotion) {
        super(width, height, weight, price);
        this.orderNum = orderNum;
        this.resulotion = resulotion;
    }
    getComputerScreenDetails() {
        return `${this.getProductDetails()} resulotion:${this.resulotion} number of orders:${this.orderNum}`;
    }
    getMessageByIsOrdered() {
        return this.getIsOrdered
            ? `${this.orderNum} have been ordered`
            : "need to order";
    }
}
//47
class Factory {
    constructor(factoryName, city, numOfEmployee, isApproved) {
        this.isAutomation = true;
        this.factoryName = factoryName;
        this.city = city;
        this.numOfEmployee = numOfEmployee;
        this.isApproved = isApproved;
    }
    getFactoryDetails() {
        return `Name: ${this.factoryName} City: ${this.city} Number Of Employees: ${this.numOfEmployee} Is Approved: ${this.isApproved}`;
    }
    get getIsAutomation() {
        return this.isAutomation;
    }
    set setIsAuotomation(bool) {
        this.isAutomation = bool;
    }
    static getFactoryMaxMinEmployee(str = "up", ...employeeArr) {
        if (employeeArr) {
            if (str == "down")
                return employeeArr.sort((a, b) => a.numOfEmployee - b.numOfEmployee)[0];
            if (str == "up")
                return employeeArr.sort((a, b) => b.numOfEmployee - a.numOfEmployee)[0];
        }
        return "Error";
    }
}
//48
class TvWarehouse extends Factory {
    constructor(factoryName, city, numOfEmployee, isApproved, numOfTv) {
        super(factoryName, city, numOfEmployee, isApproved);
        this.numOfTv = numOfTv;
    }
    getTvWarehouseDetails() {
        return `${this.getFactoryDetails} Number Of Tvs: ${this.numOfTv}`;
    }
    getMessageByIsApproved() {
        return this.isApproved ? "Approved" : "Request sent";
    }
}
//49
class SandwichFactory extends Factory {
    constructor(factoryName, city, numOfEmployee, isApproved, isKosher) {
        super(factoryName, city, numOfEmployee, isApproved);
        this.isKosher = isKosher;
    }
    getSandwichFactoryDetails() {
        return `${this.getFactoryDetails} Is Kosher: ${this.isKosher}`;
    }
    getMessageByIsAutomation() {
        return this.getIsAutomation ? "Is Automated" : "No Automation";
    }
}
class Human {
    constructor(_height, _country, _user) {
        this.height = _height;
        this.country = _country;
        this.user = _user;
    }
}
let or = new Human(1.73, "Israel", {
    f_name: "Or",
    l_name: "Gadamo",
    date_of_birth: "16/11/1998",
});
// console.log(or);

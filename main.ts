//21
function printFullName(fName: string, lName?: string): void {
  !lName ? console.log(fName) : console.log(`${fName} ${lName}`);
}
// printFullName("or")
//22
function printUserDetails(fullName: string, email?: string): void {
  !email
    ? console.log(`Name: ${fullName}`)
    : console.log(`Name: ${fullName}, Email:${email}`);
}
// printUserDetails("or gadamo","brber223@sada.com")
//23
function printCatDetails(
  catAge: number,
  catType: string,
  catName?: string
): void {
  !catName
    ? console.log(`Cat Type:${catType}, Cat Age:${catAge}`)
    : console.log(`Cat Name:${catName}, Type:${catType}, Age:${catAge}`);
}
// printCatDetails(12,"Asian","Sprite")
//24
function printMessageByArg(text: string, bool: boolean = true): string {
  return `${bool ? "Hello" : "Welcome"} ${text}`;
}
// console.log(printMessageByArg("or",false));
//25
function printFullString(
  fName: string,
  lName: string,
  title: string = "miss"
): string {
  return `${title} ${fName} ${lName}`;
}
// console.log(printFullString("or","gadamo","Senpai"))
// function printTextByArgNum (txt:string,num:number=1,txt2?:string):void{
//     if(!txt2) for(let i =0;i<num;i++) console.log(txt)
//     else for(let i =0;i<num;i++) console.log(  `${txt} ${txt2}`)
// }
//26
function printTextByArgNum(txt: string, num: number = 1, txt2?: string): void {
  if (num > 0) {
    !txt2 ? console.log(txt) : console.log(`${txt} ${txt2}`);
    if (num > 1) printTextByArgNum(txt, --num, txt2);
  } else console.log("Function does not accept negative number");
}
// printTextByArgNum("Oni",11,"chan")
//27
function getSortedCharArrayByAlphabet(...charArray: string[]): string[] {
  return charArray ? charArray.sort() : [];
}
// console.log(getSortedCharArrayByAlphabet('a','f','q','b','x','h','l'));
//28
function getSortedNumArrayUp(...numbersArray: number[]): number[] {
  return numbersArray
    ? numbersArray.sort((a: number, b: number): number => a - b)
    : [];
}
// console.log(getSortedNumArrayUp(1,2,1,3,56,12,32432,123,1233,112,2,21,2))
//29
function getSortedNumArrayDown(...numbersArray: number[]): number[] {
  return numbersArray
    ? numbersArray.sort((a: number, b: number): number => b - a)
    : [];
}
// console.log(getSortedNumArrayDown(1,2,1,3,56,12,32432,123,1233,112,2,21,2))
//30
function getStringOfSortNameArray(...nameArray: string[]): string {
  return nameArray ? nameArray.sort().toString() : "no name";
}
// console.log(getStringOfSortNameArray("or","john","dan","batel","lior"));
//31
function getTextArray(endTxt: string = "end", ...txtArray: string[]): string[] {
  if (txtArray) {
    txtArray.push(endTxt);
    return txtArray;
  }
  return [endTxt];
}
// console.log(getTextArray('hello',"hi",'hola','shalom'))
//32
function getStudentDetailsString(
  studentName: string,
  endGrade: string = "pass",
  classNum: string,
  ...gradeArray: number[]
): string {
  return `Name: ${studentName}, Final Grade: ${endGrade},${
    gradeArray
      ? `Grade:${gradeArray.sort(
          (a: number, b: number): number => a - b
        )} Avrage:${
          gradeArray.reduce((a: number, b: number) => a + b, 0) /
          gradeArray.length
        }`
      : ``
  } ${classNum ? `,class:${classNum}` : ``}`;
}
// console.log(getStudentDetailsString("or gadamo","fail","1",1,23,123,23))
//33
function getProductDetailsString(
  productName: string,
  color: string = "Black",
  discount?: string,
  ...sizeArray: number[]
): string {
  return `Product: ${productName}, Color: ${color},${
    sizeArray
      ? `Sizes:${sizeArray.sort((a: number, b: number): number => a - b)}`
      : ``
  }, ${discount ? ` ${discount} Sale` : ``}`;
}
// console.log(getProductDetailsString("shirt","red","50%",30,32,38,40,42))
//34
class Car {
  company: string;
  model: string;
  color: string;
  constructor(companyName: string, carModel: string, carColor: string) {
    this.company = companyName;
    this.model = carModel;
    this.color = carColor;
  }
}
//35
class Elephant {
  height: number;
  species: string;
  age: number;
  orgin: string;
  constructor(
    elaphantHeight: number,
    elephantType: string,
    age: number,
    orgin: string
  ) {
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
  size: number;
  color: string;
  fabric: string;
  inStock: boolean;
  constructor(
    pantsSize: number,
    pantsColor: string,
    pantsFabric: string,
    available: boolean
  ) {
    this.size = pantsSize;
    this.color = pantsColor;
    this.fabric = pantsFabric;
    this.inStock = available;
  }
  private details(): string {
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
  fullName: string;
  dateOfBirth: string;
  field: string;
  gender?: string;
  constructor(
    fullName: string,
    dateOfBirth: string,
    field: string,
    gender?: string
  ) {
    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
    this.field = field;
    this.gender = gender;
  }
  protected details(): string {
    return `Full Name:${this.fullName} Date Of Birth:${
      this.dateOfBirth
    } Field:${this.field} ${this.gender ? `Gender:${this.gender}` : ""}`;
  }
  get getDetails() {
    return this.details();
  }
}
// let or = new Athlete("or gadamo","1.2.332","soccer","male");
// console.log(or.getDetails)
//38
class FootballPlayer extends Athlete {
  inNationalTeam: boolean;
  team: string;
  constructor(
    fullName: string,
    dateOfBirth: string,
    field: string,
    inNationalTeam: boolean,
    team: string,
    gender?: string
  ) {
    super(fullName, dateOfBirth, field, gender);
    this.team = team;
    this.inNationalTeam = inNationalTeam;
  }
  getPlayerDetails(): string {
    return `${super.getDetails} Team:${this.team} In National Team:${
      this.inNationalTeam
    }`;
  }
}
//39
class User {
  fullName: string;
  age: number;
  password: string;
  private _connected: boolean = false;
  constructor(fullName: string, age: number, password: string) {
    this.age = age;
    this.fullName = fullName;
    this.password = password;
  }
  get getConnected(): boolean {
    return this._connected;
  }
  set setConnected(bool: boolean) {
    this._connected = bool;
  }
  static getUserByAge(sortBY: string, ...users: User[]) {
    if (users) {
      switch (sortBY) {
        case "old":
          return users.sort((a: User, b: User) => b.age - a.age)[0];
        case "young":
          return users.sort((a: User, b: User) => a.age - b.age)[0];
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
  fName: string;
  lNAME: string;
  dateOfBirth: string;
  email: string;
  constructor(
    fName: string,
    lName: string,
    dateOfBirth: string,
    email: string,
    age: number,
    password: string
  ) {
    super(`${fName} ${lName}`, age, password);
    this.fName = fName;
    this.lNAME = lName;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }
  getIsConnected(): string {
    return this.getConnected ? "green" : "red";
  }
}
// let foo = new Student("or","gadamo","1.2.31","email",23,"yyref12");
let lior = new Student("lior", "David", "1.1.1", "safdasd", 26, "asfdasd");
lior.setConnected = false;
//41
class Room {
  width: number;
  height: number;
  area: number;
  private isWindows: boolean = false;
  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
    this.area = height * width;
  }
  getDetails(): string {
    return `Width:${this.width} Height:${this.height} Area:${this.area} Are There Windows:${this.isWindow}`;
  }
  get getIsWindows(): boolean {
    return this.isWindows;
  }
  set setIsWindows(bool: boolean) {
    this.isWindows = bool;
  }
  static getRoomByArea(sortBy: string, ...rooms: Room[]) {
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
  closetsNum: number;
  constructor(width: number, height: number, closetsNum: number) {
    super(width, height);
    this.closetsNum = closetsNum;
  }
  getKitchenDetails(): string {
    return `${this.getDetails()} Closets Number:${this.closetsNum}`;
  }
  getMessageByIsWindow(): string {
    return this.getIsWindows ? "have Windows" : "close Room";
  }
}
//43
class LivingRoom extends Room {
  seatsNum: number;
  airDirection: string;
  constructor(
    width: number,
    height: number,
    seatsNum: number,
    airDirection: string
  ) {
    super(width, height);
    this.seatsNum = seatsNum;
    this.airDirection = airDirection;
  }
  printLivingRoomDetails() {
    console.log(
      `${super.getDetails} Number Of Seats:${this.seatsNum} Air Direction:${
        this.airDirection
      }`
    );
  }
  getMessageByIsWindow(): string {
    return this.getIsWindows
      ? `have Windows Air Direction:${this.airDirection}`
      : `close Room`;
  }
}
//44
class Product {
  width: number;
  height: number;
  weight: number;
  price: number;
  private isOrdered: boolean = false;
  constructor(width: number, height: number, weight: number, price: number) {
    this.width = width;
    this.height = height;
    this.weight = weight;
    this.price = price;
  }
  get getIsOrdered(): boolean {
    return this.isOrdered;
  }
  set setIsOrdered(bool: boolean) {
    this.isOrdered = bool;
  }
  static getProductByPrice(sortBy = "high", ...products: Product[]) {
    if (products) {
      switch (sortBy) {
        case "low":
          return products.sort(
            (a: Product, b: Product) => a.price - b.price
          )[0];
        case "high":
          return products.sort(
            (a: Product, b: Product) => b.price - a.price
          )[0];
      }
    }
    return;
  }
  getProductDetails(): string {
    return `width:${this.width} height:${this.height} weight:${this.weight} price:${this.price}`;
  }
}
//45
class Computer extends Product {
  output: number;
  constructor(
    width: number,
    height: number,
    weight: number,
    price: number,
    output: number
  ) {
    super(width, height, weight, price);
    this.output = output;
  }
  getComputerDetails(): string {
    return `${this.getProductDetails()} output:${this.output}`;
  }
  getMessageByIsOrdered() {
    return this.getIsOrdered ? "ordered" : "need to order";
  }
}
//46
class ComputerScreen extends Product {
  orderNum: number;
  resulotion: string;
  constructor(
    width: number,
    height: number,
    weight: number,
    price: number,
    orderNum: number,
    resulotion: string
  ) {
    super(width, height, weight, price);
    this.orderNum = orderNum;
    this.resulotion = resulotion;
  }
  getComputerScreenDetails(): string {
    return `${this.getProductDetails()} resulotion:${
      this.resulotion
    } number of orders:${this.orderNum}`;
  }
  getMessageByIsOrdered() {
    return this.getIsOrdered
      ? `${this.orderNum} have been ordered`
      : "need to order";
  }
}
//47
class Factory {
  factoryName: string;
  city: string;
  numOfEmployee: number;
  isApproved: boolean;
  private isAutomation: boolean = true;
  constructor(
    factoryName: string,
    city: string,
    numOfEmployee: number,
    isApproved: boolean
  ) {
    this.factoryName = factoryName;
    this.city = city;
    this.numOfEmployee = numOfEmployee;
    this.isApproved = isApproved;
  }
  getFactoryDetails(): string {
    return `Name: ${this.factoryName} City: ${this.city} Number Of Employees: ${this.numOfEmployee} Is Approved: ${this.isApproved}`;
  }
  get getIsAutomation(): boolean {
    return this.isAutomation;
  }
  set setIsAuotomation(bool: boolean) {
    this.isAutomation = bool;
  }
  static getFactoryMaxMinEmployee(
    str: string = "up",
    ...employeeArr: Factory[]
  ) {
    if (employeeArr) {
      if (str == "down")
        return employeeArr.sort(
          (a: Factory, b: Factory) => a.numOfEmployee - b.numOfEmployee
        )[0];
      if (str == "up")
        return employeeArr.sort(
          (a: Factory, b: Factory) => b.numOfEmployee - a.numOfEmployee
        )[0];
    }
    return "Error";
  }
}
//48
class TvWarehouse extends Factory {
  numOfTv: number;
  constructor(
    factoryName: string,
    city: string,
    numOfEmployee: number,
    isApproved: boolean,
    numOfTv: number
  ) {
    super(factoryName, city, numOfEmployee, isApproved);
    this.numOfTv = numOfTv;
  }
  getTvWarehouseDetails(): string {
    return `${this.getFactoryDetails} Number Of Tvs: ${this.numOfTv}`;
  }
  getMessageByIsApproved(): string {
    return this.isApproved ? "Approved" : "Request sent";
  }
}
//49
class SandwichFactory extends Factory {
  isKosher: boolean;
  constructor(
    factoryName: string,
    city: string,
    numOfEmployee: number,
    isApproved: boolean,
    isKosher: boolean
  ) {
    super(factoryName, city, numOfEmployee, isApproved);
    this.isKosher = isKosher;
  }
  getSandwichFactoryDetails(): string {
    return `${this.getFactoryDetails} Is Kosher: ${this.isKosher}`;
  }
  getMessageByIsAutomation(): string {
    return this.getIsAutomation ? "Is Automated" : "No Automation";
  }
}

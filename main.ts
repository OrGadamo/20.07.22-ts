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

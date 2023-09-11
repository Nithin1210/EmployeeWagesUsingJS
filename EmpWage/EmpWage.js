const IS_AbBSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const Full_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_A_MONTH = 160;


let empcheck = Math.floor(Math.random() * 10) % 2;  //UC-1
if (empcheck == IS_AbBSENT) {
    console.log("Employee is absent");
}
else {
    console.log("Employee is Present");
}


let emphrs = 0;                                   //UC-2
empcheck = Math.floor(Math.random() * 10) % 3;
switch (empcheck) {
    case IS_PART_TIME: emphrs = PART_TIME_HR;
        break;
    case IS_FULL_TIME: emphrs = Full_TIME_HR;
        break;
    case IS_AbBSENT: emphrs = IS_AbBSENT
}
let empwage = emphrs * WAGE_PER_HR;
console.log("EmpWage is " + empwage);


function getworkinghrs()                        //UC-3
{
    switch (empcheck) {
        case IS_PART_TIME:
            return PART_TIME_HR;
            break;
        case IS_FULL_TIME: return Full_TIME_HR;
            break;
        case IS_AbBSENT: return IS_AbBSENT
    }
}
let totalemphrs = 0;
empcheck = Math.floor(Math.random() * 10) % 3;
totalemphrs = getworkinghrs(empcheck);
let totalempwage = emphrs * WAGE_PER_HR;
console.log("working hrs of totalEmpWages is " + totalempwage);


let hrs = 0;                                     //UC-4
for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    empcheck = Math.floor(Math.random() * 10) % 3;
    hrs += getworkinghrs(empcheck);
}
totalempwage = hrs * WAGE_PER_HR;
console.log("Wage for a month is " + totalempwage);


let totalemphr = 0;                               //UC-5
let totalWorkingDays = 0;
while (totalemphr < MAX_HRS_IN_A_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    totalemphr += getworkinghrs(empcheck);
}
let empwage1 = totalemphr * WAGE_PER_HR;
console.log("Total Days: " + totalWorkingDays + "," + "Total hours: " + totalemphr + "," + "Emp Wage: " + empwage1);


function CalculateDailyWage(Hrs)                //UC-6
{
    return Hrs * WAGE_PER_HR;
}
let totalEmpHours = 0;
let TotalEmphrs = 0;
let totalWorkingDay = 0;
const DailyWageArray = new Array();
while (totalEmpHours < MAX_HRS_IN_A_MONTH && totalWorkingDay < NUM_OF_WORKING_DAYS) {
    totalWorkingDay++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    TotalEmphrs += getworkinghrs(empCheck);
    DailyWageArray.push(CalculateDailyWage(TotalEmphrs));
}
let empWage1 = CalculateDailyWage(TotalEmphrs);
console.log("Total working days is :" + totalWorkingDay + " Total Hours : " + TotalEmphrs + " Emp Wages " + empWage1);
console.log(DailyWageArray)

//UC7                                           //UC7
//A
totalempwage = 0;
function sum(dailyWage) {
    totalempwage += dailyWage;
}
DailyWageArray.forEach(sum);
console.log(totalempwage);
//B
let dayCount = 0;
function mapDayWithWage(dailyWage) {
    dayCount++;
    return dayCount + "  " + dailyWage;
}
let mapWithDayArray = DailyWageArray.map(mapDayWithWage);
console.log(DailyWageArray);
//C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullTimeWageArr = mapWithDayArray.filter(fullTimeWage);
console.log(fullTimeWageArr);
//D
console.log(mapWithDayArray.find(fullTimeWage));
//E
console.log(fullTimeWageArr.every(fullTimeWage));
//f
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log(mapWithDayArray.some(partTimeWage));
//G
function totolDayWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        numOfDays++;
    }
    return numOfDays;
}
console.log(DailyWageArray.reduce(totolDayWorked, 0));

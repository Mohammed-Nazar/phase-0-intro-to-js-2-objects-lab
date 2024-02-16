// Write your solution in this file!
let employee = {
    name: "Mohammed",
    streetAddress: "Iraq"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let employeeObj = {...employee};
    employeeObj[key] = value;
    return employeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key ,value){
     employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newobj = {...employee};
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
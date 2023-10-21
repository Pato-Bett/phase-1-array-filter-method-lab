// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
    const result = drivers.filter((driverName)=>driverName.toUpperCase()===name.toUpperCase())
    return result
}

function fuzzyMatch(drivers,providedName){
    const result = drivers.filter((driverName)=>{
        const driver = driverName.toLowerCase()
        const provided = providedName.toLowerCase()
        //startsWith() method is used to
        // check if a string starts with a specified substring/letters
        if (driver.startsWith(provided)) {
            return true
        }
    })
    return result
}

function matchName(drivers,providedName){
    return drivers.filter((driverName)=>providedName === driverName.name)
}
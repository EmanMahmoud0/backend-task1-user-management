const fs = require("fs")
//Function to ADD user
const addUser = (id, firstName, lastName, age, city) => {
const allData = loadInfo();
const duplicatedData = allData.filter((obj)=>{
    return obj.id == id
})
console.log(duplicatedData.length , allData.length)
if (duplicatedData.length == 0 && allData.length == 9){
    allData.push({
    id : id,
    firstName : firstName,
    lastName : lastName,
    age : age ,
    city : city
    })
    saveData(allData)
    }
else {
    console.log("Id is a unique value and you must not duplicate your data and you only allowed to add 10 users")
}
}
//Read Data
const loadInfo = ()=>{
    try {
        const datajson = fs.readFileSync("./usersDB.json").toString()
        return JSON.parse(datajson)
    } catch {
        return [];
    }
}
//Save Data
const saveData = (allData)=> {
    fs.writeFileSync("./usersDB.json" , JSON.stringify(allData))
}
//view specific user
const viewUser = (id) => {
    const allData = loadInfo ();
    const neededItem = allData.find((obj) => {
        return obj.id == id
    })
    console.log(neededItem);
    if (neededItem){
        console.log(neededItem)
    } else {
        console.log("User Not Found")
    }
}
//view all users
const viewAllUsers = () => {
    const allData = loadInfo ()
    if (allData == []) {
        console,log("No users found, you should add up to 10 users then you can view them")
    } else {
        console.log(allData)
    }
}
//Delete specific user
const deleteUser = (id) => {
const allData = loadInfo ();
const dataToKeep = allData.filter((obj) => {
    return obj.id != id
})
saveData(dataToKeep)
console.log(`you have already deleted the user with id ${id}`)
}
//Delete All users
const deleteAllUsers = () => {
    let allData = loadInfo ();
    allData = [];
    saveData(allData)
    console.log('All Users have been deleted');
}

// export functions
module.exports = {
    addUser,
    viewUser,
    viewAllUsers,
    deleteUser,
    deleteAllUsers
}
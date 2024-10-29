const yargs = require("yargs")
const userDataCLI =require("./userDataCLI")
//ADD Command
yargs.command({
    command : "add",
    description : "Add Your Information",
    builder : {
        id : {
            describe :"ID is a unique value that must be added",
            demandOption : true,
            type : "number"
        },
        firstName : {
            describe :"Your first name must be added",
            demandOption : true,
            type : "string"
        },
        lastName : {
            describe :"Your last name must be added",
            demandOption : true,
            type : "string"
        },
        age : {
            describe :"Your age must be added",
            demandOption : true,
            type : "number"
        },
        city : {
            describe :"Your city must be added",
            demandOption : true,
            type : "string"
        },
    },
    handler : (user) => {
        userDataCLI.addUser(user.id, user.firstName, user.lastName, user.age, user.city)
    }
});
//view specific user Command
yargs.command({
    command : "viewUser",
    description : "read the data of specific user",
    builder : {
        id : {
            describe : "needed id",
            demandOption : true,
            type : "number"
        }
    },
    handler : (user) => {
        userDataCLI.viewUser(user.id)
    }
})
//view All users Command
yargs.command({
    command : "viewAll",
    description : "read the data of all users",
    builder : {},
    handler : () => {
        userDataCLI.viewAllUsers()
    }
})
//Delete specific user Command
yargs.command({
    command : "deleteUser",
    description : "Delete the data of specific user",
    builder : {
        id : {
            describe : "needed id",
            demandOption : true,
            type : "number"
        }
    },
    handler : (user) => {
        userDataCLI.deleteUser(user.id)
    }
})
//Delete All Data Command
yargs.command({
    command : "deleteAll",
    description : "Delete the data of all users",
    builder : {},
    handler : () => {
        userDataCLI.deleteAllUsers()
    }
})
yargs.parse();
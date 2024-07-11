const { log } = require('console');
const {
    getUsers,
    addUser,
    updateUser,
    deleteUser
  } = require('./Service');

async function main() {
    try {
        //read data
        const users=await getUsers();
        log(users);
        //post data
        const User={   
            name: "xyz",
            age: 22,
            email: "xyz@gmail.com"
        }
        const status=await addUser(User);
        log(status);
        //update data
        const newUser={   
            name: "xyz",
            age: 22,
            email: "zyx@gmail.com"
        }
        const updateStatus=await updateUser("xyz@gmail.com",newUser);
        log(updateStatus);
        //delete data
        log(await deleteUser("zyx@gmail.com"));
    } catch (error) {
        console.error(error);
    }
}

main();
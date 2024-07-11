const { Client } = require('node-rest-client');

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
  };
const client = new Client();
function getUsers(){
    return new Promise((resolve,reject)=>{
    client.get('http://localhost:3000/api/users', (data, response) => {
        if(response.statusCode == 200){
            resolve(data);
        }
        else{
            reject(data);
        }
    });
    });
}
function addUser(User){
    const args = {
        data:User,
        headers:{'Content-Type': 'application/json'}
    }
    return new Promise((resolve,reject)=>{
        client.post('http://localhost:3000/api/newuser', args, (data, response) => {
            if(response.statusCode == 201){
                resolve(data);
            }
            else{
                reject(data);
            }
        });
    });
}
function updateUser(email,newData){
    const args = {
        data:newData,
        headers:{'Content-Type': 'application/json'}
    }
    const url = `http://localhost:3000/api/updateuser?email=${encodeURIComponent(email)}`;
    return new Promise((resolve,reject)=>{
        client.put(url, args, (data, response) => {
            if(response.statusCode == 201){
                resolve(data);
            }
            else{
                reject(data);
            }
        });
    });
}

function deleteUser(email){
    const url = `http://localhost:3000/api/removeuser?email=${encodeURIComponent(email)}`;
    return new Promise((resolve,reject)=>{
        client.delete(url, (data, response) => {
            if(response.statusCode == 201){
                resolve(data);
            }
            else{
                reject(data);
            }
        });
    });
}
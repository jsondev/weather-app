/* var somePromise = new Promise((resolve, reject) => {
    var myObject = {
        id: 1,
        firstName: 'James',
        lastName: 'Anderson'
    },

        setTimeout(() => {
            resolve(myObject);
            reject(myObject);
        }, 2500)

});

somePromise.then((message) => {
    console.log(`Message: ${message.firstName} ${message.lastName} my ID #${message.id}`);
},
    (errorMessage) => {
        console.log(`${errorMessage.firstName} ${errorMessage.lastName} you received an error`);
    }
); */

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguements must be numbers');
            }
        }, 1500)
    });
}

asyncAdd(4, 3).then((res) => {
    console.log('Result:', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log("Second Result: ", res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

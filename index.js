const fs = require('fs');

fs.readFile('./people1.json', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);

      fs.writeFile('peopleComplete.txt', data, function(err){
        if (err) { //check for possible errors 
            console.log(`there was a problem writing: ${err}`); //log that an error happened
            //throw the error for handling by the caller
            throw err;
            console.log('content from  been written.');
        }
    })
});

fs.readFile('./people2.json', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);

      fs.writeFile('peopleComplete.txt', data, function(err){
        if (err) { //check for possible errors 
            console.log(`there was a problem writing: ${err}`); //log that an error happened
            //throw the error for handling by the caller
            throw err;
            console.log('content from  been written.');
        }
    })
});
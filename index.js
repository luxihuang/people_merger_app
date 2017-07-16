const fs = require('fs');
// const mainFile = './peopleComplete.json';
var files = ['./people1.json', './people2.json',];

function read(file){
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);

        fs.writeFile('./peopleComplete.txt', data, function(err){
            if (err) throw err;
                var results = console.log(data + 'written data');
                results.sort();
            })
        })
};

for(var i = 0; i <files.length; i++){
    read(files[i]);
    console.log(files[i]);   
};
     


// function readAppend(mainFile, fileToBeAppended) {
//     fs.readFile(fileToBeAppended, 'utf8', function (err, data) {
//         if(err) throw err;
//         var results1 = data;
//         console.log(results);

//     fs.appendFile(mainFile, data, (err) => {
//       if (err) throw err;
//       // console.log('The "data to append" was appended to file');
//     });
//     });
// }

// // for(var i = 0; i < fileToBeAppended.length; i++){
// //     read(fileToBeAppended[i]);
// //     console.log(fileToBeAppended[i]);   
// // };


// fileToBeAppended = './people1.json';
// readAppend(mainFile, fileToBeAppended);

// fileToBeAppended = './people2.json';
// readAppend(mainFile, fileToBeAppended);


//source --> http://stevehanov.ca/blog/index.php?id=127
//source --> https://stackoverflow.com/questions/34943132/node-js-read-two-files-compare-parts-of-files-and-output-a-sorted-file
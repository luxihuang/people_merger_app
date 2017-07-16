const fs = require('fs');

fs.readFile('./people1.json', 'utf8', (err, data) => {
    if(err) throw err;
    const results1 = JSON.parse(data);
    console.log('This is the first array: ' + results1);

    fs.readFile('./people2.json', 'utf8', (err, data) => {
        if(err) throw err;
        const results2 = JSON.parse(data);
        console.log('This is the second array: ' + results2);

    let combinedResults = results1.concat(results2);
    console.log('This is the combined array: ' + combinedResults);

    let sortCombinedResults = combinedResults.sort();
    console.log('This is the sorted combined array: ' + sortCombinedResults);
    
    let stringifysortCombinedResults = JSON.stringify(sortCombinedResults);
    console.log('This is the stringify sorted combined array: ' + stringifysortCombinedResults);
    
        fs.writeFile('./peopleComplete.txt', stringifysortCombinedResults, function(err){
            if (err) throw err;
                console.log('stringify sorted combined content has been written.');

        fs.writeFile('./peopleComplete.json', stringifysortCombinedResults, function(err){
            if (err) throw err;
                console.log('stringify sorted combined content has been written to JSON file.');
        });
        });
    });
});

//source --> http://stevehanov.ca/blog/index.php?id=127
//source --> https://stackoverflow.com/questions/34943132/node-js-read-two-files-compare-parts-of-files-and-output-a-sorted-file
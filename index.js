'use strict';

var fs = require('fs');
var rp = require('request-promise');

//we treat the file as text, no csv
var data = fs.readFileSync('./data.csv', 'utf-8');

//make an array of lines of text
data = data.split('\n');

//remove all colons
var urls = data.map(function(url){
    return url.replace(/,/, '');
});


function download(url, next){
    console.log('Downloading URL: %s', url);
    rp(url).then(function(body){
        //Nasty, but oh well. Get the etherpad name
        var filename = url.split('/')[4];
        saveFile(filename, body, next);
    });
}

function saveFile(pad, body, next){
    var filename = './pads/' + pad + '.txt';
    console.log('Saving file %s', filename);
    fs.writeFileSync(filename, body);
    next();
}

function step(){
    var url = urls.pop();
    if(! url) return done();
    download(url, step);
}

function done(){
    console.log('DONE!');
}

step();
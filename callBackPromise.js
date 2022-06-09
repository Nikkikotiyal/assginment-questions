// 5. Make a promisifed function for the functioan having callback below , after the function is promisifed then call the function like you call a promise

const request = require('request');

async function handleCallback(){
    
    function getGoogleHomePage(finalCallBack){
        request('http://www.google.com', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        finalCallBack(error);
        console.log('statusCode:', response && response.statusCode); // Print the response status
        // code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        finalCallBack(null,body);
        });
        };
        console.log(getGoogleHomePage((result)=>{
        console.log("RESULT==>",result);
        }));
    };
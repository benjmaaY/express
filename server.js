const express = require('express')

const app = express()
let d = new Date();
let n = d.getHours();
if (n >= 8 && n <= 17) {

    app.use(
        express.static(__dirname + '/public')
    )
} else {
    app.use(function (req, res) {
        res.sendFile('/gmc/express-app/public/unvailble.html')
      
        
    });
    
}



app.listen(3000, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})
const fs = require('fs');

let usersjson = fs.readFileSync('users.json');
let users = JSON.parse(usersjson)


exports.login = (req,res, next) => {
    const body = {...req.body};

    let loggedIn = users.filter(el => {
       return el.username === body.username && el.password === body.password
    });

    req.user = loggedIn;
    if (loggedIn[0]) {
        res.redirect('home.html')
    
    } else{
        res.redirect('login.html')
    }

    // res.send(body)
}
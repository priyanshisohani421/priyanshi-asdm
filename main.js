let express = require('express');
let app = express();
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

let logger = (req, resp, next)=>{
    console.log(req.url);
    console.log(req.method);

    next();
}

let sayhello = (req, resp) => {
    resp.send("Hello world");
}

let saygreetings = (req, resp) => {
    resp.send("Hello");
}

app.use(logger);
app.use('/greetings', saygreetings);
app.use('/', sayhello);

app.listen(8081, () => {
    console.log('Server is started on 8081')
})

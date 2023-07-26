import express from 'express'
import config from './src/db/config.js'
import routes from './src/routes/Routers.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
//middleware --accepts data from frontend and pass it to backend
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(bodyParser.json());
//jwt middleware
app.use((req,res,next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1],config.jwt_secret,(err,decode)=>{
            if(err)req.user = undefined;
            req.user = decode;
            next();
        });
    }else{
        req.user = undefined;
        next();
    }
});

routes(app);
app.get('/',(req,res)=>{
    res.send('welcome to my task mananger system')
})
app.listen(8081,()=>{
    console.log('the server is running at port 8081')
})
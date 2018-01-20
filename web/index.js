const firebase=require('firebase');
const express=require('express');
const app=express();
const hbs=require('hbs');
const port=process.env.PORT || 3000;

var config = {
    apiKey: "AIzaSyCfjghxYB6x5312g9W-A5bfAPusD_VeMX8",
    authDomain: "quickshare-web.firebaseapp.com",
    databaseURL: "https://quickshare-web.firebaseio.com",
    projectId: "quickshare-web",
    storageBucket: "quickshare-web.appspot.com",
    messagingSenderId: "232482638684"
};
firebase.initializeApp(config);

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs');
});
app.get('/main',(req,res)=>{
    res.render('index.hbs');
});

    
app.listen(port,()=>{
    console.log(`lISTENING on port ${port}`);
});


var config = {
    apiKey: "AIzaSyCfjghxYB6x5312g9W-A5bfAPusD_VeMX8",
    authDomain: "quickshare-web.firebaseapp.com",
    databaseURL: "https://quickshare-web.firebaseio.com",
    projectId: "quickshare-web",
    storageBucket: "quickshare-web.appspot.com",
    messagingSenderId: "232482638684"
};
firebase.initializeApp(config);
var database = firebase.database();

var postListRef = database.ref().child('users/');
var enter = document.getElementById('enter');

function writeUserData() {
    console.log('this worked');
    var name = document.getElementById('names');
    var txtemails = document.getElementById('emails');
    var nameTxt = name.value;
    var emailTxt = txtemails.value;
    var err = document.getElementById('err');
    postListRef.push().set({
        Name: nameTxt,
        Email: emailTxt
            }).then(() => {
                err.innerHTML = 'succesfully set name and email';
            }).catch(e => {
                err.innerHTML = e.message;
            });
    }
enter.addEventListener('click', writeUserData);


var logOut=document.getElementById('logOut');
logOut.addEventListener('click',()=>{
      firebase.auth().signOut().then(()=>{
        err.innerHTML='Succesfully Logged Out!';
        window.location.replace('http://localhost:3000/');
      });
    });
    

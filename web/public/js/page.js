var config = {
  apiKey: "AIzaSyCfjghxYB6x5312g9W-A5bfAPusD_VeMX8",
  authDomain: "quickshare-web.firebaseapp.com",
  databaseURL: "https://quickshare-web.firebaseio.com",
  projectId: "quickshare-web",
  storageBucket: "quickshare-web.appspot.com",
  messagingSenderId: "232482638684"
};
firebase.initializeApp(config);
var uiConfig = {
  signInSuccessUrl: '/main',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};
var btn=document.querySelector('#signIn');
btn.addEventListener('click',()=>{
  window.open('/sign_in','_self');
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location.replace('/main');
  } else {
    // User is signed out.
  }
}, function (error) {
  console.log(error);
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
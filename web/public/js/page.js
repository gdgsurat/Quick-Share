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


  signInSuccessUrl: 'http://localhost:3000/main',
  signInOptions: [
    
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    
  ],
};





var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
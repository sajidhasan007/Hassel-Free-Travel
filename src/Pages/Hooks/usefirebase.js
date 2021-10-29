import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Firebase/firebase.init";
//import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const UseFirebase = () => {
    const history = useHistory();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();






    // const history = useHistory();



    //console.log(user);
    //console.log(typeof (set_newuser));

    const handleName = e => {
        setName(e.target.value);
    }

    const handleemail = (e) => {
        setEmail(e.target.value);
    }

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }

    const handlelogin = (e) => {
        setIsLogin(e.target.checked);
        //console.log('form login page toggle', e.target.checked);
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    //console.log(user);
    const handleregistration = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                updateName();
                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };
                window.location.reload();
                console.log('from login', newuser);
                setUser(newuser);
                history.push('/home');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const managelogin = (e) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };

                setUser(newuser);

                history.push('/home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));

    }








    const googleSignin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleprovider);


    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;

                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };
                //console.log('i print after history from google');
                setUser(newuser);
                // console.log(user);
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false);
        });
    }, [])



    const handlesignout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        setUser,
        googleSignin,
        handlesignout,
        isLoading,
        setIsLoading,
        handleemail,
        handlepassword,
        handlelogin,
        handleregistration,
        managelogin,
        isLogin,
        handlelogin,
        handleName
    }
}

export default UseFirebase;
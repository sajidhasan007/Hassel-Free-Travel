import React from 'react';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { setUser, googleSignin, isLoading, setIsLoading, isLogin,
        handleregistration, handleemail, handlelogin, handleName, handlepassword, managelogin } = useAuth();

    const handlegooglelogin = () => {
        googleSignin()
            .then((result) => {

                const user = result.user;

                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };
                console.log('i print after history from google');
                setUser(newuser);
                //history.push(url);
            }).catch((error) => {
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <button variant="warning" className="btn btn-warning" onClick={handlegooglelogin}>Google LogIn</button>
            </div>
        </div>
    );
};

export default Login;
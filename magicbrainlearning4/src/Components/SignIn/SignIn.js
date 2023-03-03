import React from 'react';
import './SignIn.css';

const SignIn = ({ isSignedIn, onRouteChange }) => {
    if (isSignedIn) {
        return (
            <div className='SignInalignToLeft'>
                <p onClick={() => onRouteChange('signout')} className='f3 link dm black pointer SignInMaxWidth shadow-5 ma4 br3 SignInDesign grow SignInBackground'>Sign Out!</p>
            </div>
        )
    } else {
        return (
            <div className='SignInalignToLeft'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dm black pointer SignInMaxWidth shadow-5 ma4 br3 SignInDesign grow SignInBackground'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dm black pointer SignInMaxWidth shadow-5 ma4 br3 SignInDesign grow SignInBackground'>Register</p>
            </div>
        )
    }
}

export default SignIn;
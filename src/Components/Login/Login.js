import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from "../Login/base"
import "firebase/auth";
import { userContext } from '../../App';
const Login = () => {


const [loggedInUser,setloggedInUser]=useContext(userContext)

	const [alert, setAlert] = useState({
		success: false,
		error: "",
	});

    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };


	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const newUser = {
					isLoggedIn: true,
					name: displayName,
					email: email,
				};
		
              
				const newAlert = { ...alert };
				newAlert.success = true;
				newAlert.error = "";
                setAlert(newAlert);
				setloggedInUser(newUser);
				storeToken()
                history.replace(from);
			})
			.catch((error) => {
				const newAlert = { ...alert };
				newAlert.error = error.message;
				setAlert(newAlert);
			});
	};




	const storeToken=()=>{

		firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
		.then(function(idToken) {
	console.log(idToken)
	sessionStorage.setItem("token",idToken)
		
		  }).catch(function(error) {
		
		  });

	}
    return (
        <div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register login p-md-5 p-3">
				{alert.error.length > 0 && <div className="alert alert-danger text-center">{alert.error}</div>}

				<h4 className="mb-5">Login With</h4>
				<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
					
					Continue with Google
				</button>
				
			</div>
		</div>
    );
};

export default Login;
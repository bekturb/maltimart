import React, {useState} from 'react';
import Helmet from "../../layout/Helmet";
import {Link} from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../../firebase/firebase.config'
import { ref,uploadBytesResumable,getDownloadURL } from "firebase/storage"
import {storage} from "../../firebase/firebase.config";
import {db} from "../../firebase/firebase.config";
import {setDoc, doc} from "firebase/firestore"

import {toast} from "react-toastify";

import '../../styles/login.scss'

const SignUp = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(null)

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user
            const storageRef = ref(storage, `images/${Date.now() + userName}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                (error)=>{
                    toast.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadUrl) => {

                        // update user profile
                        await updateProfile(user,{
                                displayName:userName,
                                photoURL:downloadUrl,
                            });

                        // store user data in firestore database
                        await setDoc(doc(db, "users", user.uid), {
                            uid: user.uid,
                            displayName: userName,
                            email,
                            photoUrl:downloadUrl,
                        });
                    });
                }
            );

        }catch (error){
            toast.error("Something went wrong")
        }
    }

    return (
        <Helmet title='Signup'>
            <section className="auth">
                <div className="container">
                    <div className="row">
                        <div className="col-6 auth__column">
                            <h3 className="auth__title">Signup</h3>

                            <form className="form" onSubmit={signup}>
                                <p className="form__group">
                                    <input
                                        className="form__input"
                                        type="text"
                                        placeholder="username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </p>
                                <p className="form__group">
                                    <input
                                        className="form__input"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </p>
                                <p className="form__group">
                                    <input
                                        className="form__input"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </p>
                                <p className="form__group">
                                    <input
                                        className="form__input"
                                        type="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </p>
                                <button type="submit" className="button auth__btn">Create an account</button>
                                <p className="form__create">
                                    Already have an account? <Link className="form__account" to="/login">
                                    Login
                                </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default SignUp;
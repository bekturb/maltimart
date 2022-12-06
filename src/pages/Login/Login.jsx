import React, {useState} from 'react';
import Helmet from "../../layout/Helmet";
import {Link} from "react-router-dom";

import '../../styles/login.scss'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Login'>
            <section className="auth">
                <div className="container">
                    <div className="row">
                        <div className="col-6 auth__column">
                                <h3 className="auth__title">Login</h3>

                            <form className="form" action="">
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
                                <button type="submit" className="button auth__btn">Login</button>
                                <p className="form__create">
                                    Don't have an account? <Link className="form__account" to="/signup">
                                        Create an account
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

export default Login;
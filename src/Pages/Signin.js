import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {

    return (
        <>
            <div className="my-card">
                <div className="card auth-card input-field">
                    <h2 className="auth-title">FotoStory</h2>
                    <input
                    type="text"
                    placeholder="email"
                    />
                    <input
                    type="text"
                    placeholder="password"
                    />
                    <button className="waves-effect waves-light btn red lighten-1">Signin</button>
                    <h5>
                        <Link to="signup">
                            Don't have an account?
                        </Link>
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Signin
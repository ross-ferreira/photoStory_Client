import React from 'react';

const Signin = () => {

    return (
        <>
            <div className="my-card">
                <div className="card auth-card input-field">
                    <h2 className="auth-title">Welcome</h2>
                    <input
                    type="text"
                    placeholder="email"
                    />
                    <input
                    type="text"
                    placeholder="password"
                    />
                    <button className="waves-effect waves-light btn red lighten-1">Signin</button>
                </div>
            </div>
        </>
    )
}

export default Signin
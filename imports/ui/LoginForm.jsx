import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                console.error("Login failed:", err.reason || err.message);
                alert("Login failed: " + (err.reason || err.message));
            } else {
                console.log("Login successful!");
            }
        });
    };

    return (
        <form onSubmit={submit} className="login-form">
            <div>
                <label htmlFor="username">Username</label>

                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                <button type="submit">Log In</button>
            </div>
        </form>
    );
};
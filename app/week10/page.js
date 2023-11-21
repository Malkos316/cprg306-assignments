"use client";

import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page.js";


export default function SignInSignOut() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => { await gitHubSignIn(); }
    const handleSignOut = async () => { await firebaseSignOut(); }

    return (

        <div>
            {user ? (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <p>
                        <ShoppingList />
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        You are not signed in.
                    </p>
                    <button onClick={handleSignIn}>Sign In with GitHub</button>
                </div>
            )}
        </div>


    );
}
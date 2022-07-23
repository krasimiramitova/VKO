import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import SideMenu from "../../components/Nav/SideMenu";

function LoginPage() {
    return (
        <div>
            <SideMenu/>
            <div className="page">
                <LoginForm/>
            </div>
        </div>
    );
}
export default LoginPage;
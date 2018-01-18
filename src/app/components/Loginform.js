import React from "react";
import { LoginPage } from "reactjs-admin-lte";

export class Loginform extends React.Component {
    render() {
        return (
            <LoginPage>
                <LoginPage.Logo>
                    <a href=""><b>No</b>Opinion</a>
                </LoginPage.Logo>
                <LoginPage.Body>
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>

                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label className="">
                                        <div className="icheckbox_square-blue cs1" aria-checked="false" aria-disabled="false">
                                            <input type="checkbox" className="cs2"/>
                                            <ins className="iCheck-helper cs2"></ins>
                                        </div> Remember Me
                                    </label>
                                </div>
                            </div>

                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    <a href="#">I forgot my password</a>
                    <br/>
                    <a href="register.html" className="text-center">Register a new membership</a>

                </LoginPage.Body>
            </LoginPage>
        )
    }
}
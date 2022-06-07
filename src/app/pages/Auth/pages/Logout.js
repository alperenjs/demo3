import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../_metronic/layout";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    const { hasAuthToken } = this.props;
    return hasAuthToken ? <LayoutSplashScreen /> : <Navigate to="/auth/login" />;
  }
}

export default Logout
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./custom.css"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import AuthService from "../../../base/services/authentication.service";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "berra@demo.com",
  password: "passw0rd",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
     text: Yup.string()
      .min(3, "Minimum 3 letter")
      .max(50, "Maximum 50 letter")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  const handleToggle=()=> {
    if(type==='password'){
      setIcon(eye);
      setType('text')
    }
    else{
      setIcon(eyeOff);
      setType('password')
    }
  }

  const enableLoading = () => {
    setLoading(true);
  };

  // const disableLoading = () => {
  //   setLoading(false);
  // };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      enableLoading();
      setTimeout(() => {
        // login(values.email, values.password)
        //   .then(({ data: { authToken } }) => {
        //     disableLoading();
        //     props.login(authToken);
        //   })
        //   .catch(() => {
        //     setStatus(
        //       intl.formatMessage({
        //         id: "AUTH.VALIDATION.INVALID_LOGIN",
        //       })
        //     );
        //   })
        //   .finally(() => {
        //     disableLoading();
        //     setSubmitting(false);
        //   });
      }, 1000);
    },
  });

  const login = () => {
    const testToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTQ3Nzg2MjgsImV4cCI6MTY4NjMxNDY0MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ekzfK9YAF5md5f-F89PRuQquhzItJJpGFDNStzqnp8Y";

    AuthService.setUser({ name: "alperen", roles: [1, 2, 3] });
    AuthService.setTokens(testToken, testToken);

    navigate("/");
  };

  return (
    
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="mb-10 mb-lg-20 text-center">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        <h6 className="font-size-h6">
          <FormattedMessage id="AUTH.LOGIN.TITLE2" />
        </h6>
      </div>
      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        <div className="form-group fv-plugins-icon-container">
        <label>Organization</label>
          <input
            placeholder="Organization"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "text"
            )}`}
            name="text"
            value={formik.values.organization}
            onChange={formik.handleChange}
            id="organization"
            {...formik.getFieldProps("text")}
          />
          {formik.touched.text && formik.errors.text ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.text}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <label>Email</label>
          <input
            placeholder="Email"
            id="email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
        <label>Password</label>
        <Tooltip title="Min 3 symbols">
        <Button>?</Button>
      </Tooltip>
      <div className="input-fields">
          <input
            placeholder="Password"
            type={type}
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
          <span className="eyeButton" onClick={handleToggle}><Icon className="icon" icon={icon} size={20} /></span>
          </div>
         </div>         

        <div className="d-flex justify-content-between">
        <label className="checkbox">
            
            <Link
              to="/terms"
              target="_blank"
              className="mr-1 r-btn"
              rel="noopener noreferrer"
            >
              Remember me?
            </Link>
            <input
              type="checkbox"
              name="acceptTerms"
              className="m-1"
              {...formik.getFieldProps("rememberme")}
            />
            <span />
          </label>
        <div className="d-flex">
        <Link
            to="/auth/forgot-password"
            className="font-weight-bold ml-2 password-text"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
      </div>
      </div>
        <div className="form-group d-flex flex-wrap justify-content-center align-items-center">
          
          <button
            onClick={() => login()}
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn sign-btn font-weight-bold px-25 py-4 my-3 mt-10`}
          >
            <span>SIGN IN</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
      <div className="d-flex justify-content-center">
      <span className="font-weight-bold text-dark-50">
                Don't have an account yet?
      </span>
      <Link
                to="/auth/registration"
                className="font-weight-bold ml-2 sign-up-btn"
                id="kt_login_signup"
              >
                Sign up!
              </Link>
     
        
          </div> 
          
    </div>
  );
}

export default injectIntl(Login);

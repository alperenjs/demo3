import { useFormik } from "formik";
import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./custom.css"

const initialValues = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function Registration(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    username: Yup.string()
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
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required("Confirm password is required"),
  });

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
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values) 
     
      // register(values.email, values.fullname, values.username, values.password)
      //   .then(({ data: { authToken } }) => {
      //     props.register(authToken);
      //     disableLoading();
      //     setSubmitting(false);
      //   })
      //   .catch(() => {
      //     setSubmitting(false);
      //     setStatus(
      //       intl.formatMessage({
      //         id: "AUTH.VALIDATION.INVALID_LOGIN",
      //       })
      //     );
      //     disableLoading();
      //   });
    },
  });

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h4">
          <FormattedMessage id="AUTH.REGISTER.TITLE.STEP1" />
        </h3>
      </div>

      <form
      onSubmit={formik.handleSubmit}
        id="kt_login_signin_form"
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        
      >
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

        {/* begin: Fullname */}
        <div className="form-group fv-plugins-icon-container">
        <label>Full Name</label>
          <input
            placeholder="Full name"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "fullname"
            )}`}
            name="fullname"
            id="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.fullname}</div>
            </div>
          ) : null}
        </div>
        {/* end: Fullname */}
        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
        <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            id="email"
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
        {/* end: Email */}

        {/* begin: Username */}
        <div className="form-group fv-plugins-icon-container">
        <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        {/* end: Username */}

        {/* begin: Password */}
        <div className="form-group fv-plugins-icon-container">
        <label>Confirm Password</label>
          <input
            placeholder="Confirm Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.confirmPassword}</div>
            </div>
          ) : null}
        </div>
        {/* end: Password */}
        <div className="d-flex justify-content-between">
        <label className="checkbox">
            
            <Link
              to="/terms"
              target="_blank"
              className="mr-1 r-btn"
              rel="noopener noreferrer"
            >
              I agree the Terms & Conditions
            </Link>
            <input
              type="checkbox"
              name="acceptTerms"
              required
              className="m-1"
              {...formik.getFieldProps("rememberme")}
            />
            <span />
          </label>
        
      </div>
        <div className="d-flex justify-content-around">
          {/*}<button
            type="submit"
            disabled={
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.values.acceptTerms
            }
            className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
          >
            <span>Submit</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
          */}
          <Link to="/auth/registration-step2">
            <button
              typkt_login_signin_forme="submit"
              className="btn btn-next font-weight-bold px-25 py-4 my-3 mx-4 "
            >
              Next
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default injectIntl(Registration);

import { useFormik } from "formik";
import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./custom.css"
import { Form } from "react-bootstrap";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const initialValues = {
    email: "berra@demo.com",
    password: "passw0rd",
};

function RegistrationStep2(props) {
    const { intl } = props;
    const [loading, setLoading] = useState(false);
    const LoginSchema = Yup.object().shape({
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

    return (
        <div className="login-form login-signin" id="kt_login_signin_form">
            {/* begin::Head */}
            <div className="mb-10 mb-lg-20 text-center">
                <h6 className="font-size-h6">
                    <FormattedMessage id="AUTH.REGISTER.TITLE.STEP3" />
                </h6>
                {/* <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>*/ }
            </div>
            {/* end::Head */}

            {/*begin::Form*/}
            <form
                onSubmit={formik.handleSubmit}
                className="form fv-plugins-bootstrap fv-plugins-framework"
            >
                <div className="form-group fv-plugins-icon-container">
                    <label>Is your organization registred?</label>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>yes</option>
                                <option>no</option>
                                <option>maybe</option>
                            </Form.Control>
                        </Form.Group></Form>

                </div>


<div className="d-flex flex-row ml-3">
                <div className="form-group fv-plugins-icon-container d-flex flex-column">
                <label>Upload registration document</label>
                    <Fab color="primary" aria-label="Add">
                        <AddIcon />
                    </Fab>


                </div>
                <div className="form-group fv-plugins-icon-container d-flex flex-column">
                <label>Upload additional documents </label>
                    <Fab color="primary" aria-label="Add">
                        <AddIcon />
                    </Fab>


                </div>
</div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Message</label>
                    <input
                        type="text"
                        className={`form-control form-control-solid h-auto py-20 px-6 ${getInputClasses(
                            "text"
                        )}`}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.email}
                        {...formik.getFieldProps("text")}
                    />
                    {formik.touched.email && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>

            </form>
            {/*end::Form*/}
            <div className="d-flex justify-content-center">
            <Link to="/auth/registration-step2">
                        <button
                            type="button"
                            className="btn btn-back font-weight-bold px-9 py-4 my-3 mx-4 "
                        >
                            Back
                        </button>
                    </Link>
                    <Link to="/last-page">
                        <button
                            type="button"
                            className="btn btn-next font-weight-bold px-9 py-4 my-3 mx-4 "
                        >
                            Submit
                        </button>
                    </Link>
                </div>

        </div>
    );
}

export default injectIntl(RegistrationStep2);

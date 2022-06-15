import { useFormik } from "formik";
import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./custom.css"
import { Form } from "react-bootstrap";

const initialValues = {
    fullname: "",
    email: "",
    username: "",
    password: "",
};

function RegistrationStep2(props) {
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
            text: Yup.string()
            .min(3, "Minimum 3 symbols")
            .max(50, "Maximum 50 symbols")
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
        validationSchema: RegistrationSchema,
        onSubmit: (values, { setStatus, setSubmitting }) => {
            console.log(values);
            setSubmitting(true);
            enableLoading();
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
            <div className="text-center mb-5 mb-lg-10">
                <h3 className="font-size-h4">
                    <FormattedMessage id="AUTH.REGISTER.TITLE.STEP2" />
                </h3>
                {/*   <p className="text-muted font-weight-bold">
          Enter your details to create your account
        </p>*/ }
            </div>

            <form
                id="kt_login_signin_form"
                className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                onSubmit={formik.handleSubmit}
            >
                <div className="form-group fv-plugins-icon-container">
                    <label>Organization international name</label>
                    <input
                        placeholder="International name"
                        type="text"
                        className={`form-control form-control-solid h-auto py-3 px-6 ${getInputClasses(
                            "name"
                        )}`}
                        name="intname"
                        id="intname"
                        value={formik.values.intname}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("intname")}
                    />
                    {formik.touched.text && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>
                {/* end: Fullname */}

                {/* begin: Email */}
                <div className="form-group fv-plugins-icon-container">
                    <label>Acronym</label>
                    <input
                        placeholder="Acronym"
                        type="text"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
                            "text"
                        )}`}
                        name="acronym"
                        id="acronym"
                        value={formik.values.acronym}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("text")}
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.fullname}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Organization descripiton</label>
                    <input
                        placeholder="Organization descripiton"
                        type="text"
                        className={`form-control form-control-solid h-auto py-10 px-6 ${getInputClasses(
                            "username"
                        )}`}
                        name="description"
                        id="description"
                        value={formik.values.description}
                        onChange={formik.description}
                        {...formik.getFieldProps("description")}
                    />
                    {formik.touched.text && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Foundation year</label>
                    <input
                        placeholder="Foundation year"
                        type="number"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
                            "number"
                        )}`}
                        name="year"
                        id="year"
                        value={formik.values.year}
                        onChange={formik.year}
                        {...formik.getFieldProps("year")}
                    />
                    {formik.touched.email && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Country</label>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>test</option>
                                <option>test2</option>
                                <option>test3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group></Form>
                        {formik.touched.email && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}

                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Adress</label>
                    <input
                        placeholder="Adress"
                        type="text"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
                            "text"
                        )}`}
                        name="adress"
                        value={formik.values.adress}
                        onChange={formik.adress}
                        {...formik.getFieldProps("adress")}
                    />
                    {formik.touched.text && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Sectors</label>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>0-14</option>
                                <option>15-49</option>
                                <option>test3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group></Form>
                        {formik.touched.email && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}

                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Organization Size</label>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>0-14</option>
                                <option>15-49</option>
                                <option>test3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group></Form>
                        {formik.touched.email && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}

                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Organization Type</label>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>bla   </option>
                                <option>select</option>
                                <option>test3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group></Form>
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
                        type="email"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
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
                <div className="form-group fv-plugins-icon-container">
                    <label>Organization phone number</label>
                    <input
                        placeholder="Organization phone number"
                        type="text"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
                            "text"
                        )}`}
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.phone}
                        {...formik.getFieldProps("text")}
                    />
                    {formik.touched.text && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <label>Where your organization is operating?</label>
                    <input
                        placeholder="Where your organization is operating?"
                        type="text"
                        className={`form-control form-control-solid h-auto py-3 px-4 ${getInputClasses(
                            "text"
                        )}`}
                        name="where"
                        id="where"
                        value={formik.values.where}
                        onChange={formik.where}
                        {...formik.getFieldProps("text")}
                    />
                    {formik.touched.text && formik.errors.text ? (
                        <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.text}</div>
                        </div>
                    ) : null}
                     <div className="d-flex justify-content-around mb-20">
                    <Link to="/auth/registration-step3">
                        <button
                            type="button"
                            className="btn btn-next font-weight-bold px-25 py-4 my-3 mx-4 "
                        >
                            Next
                        </button>
                    </Link>
                </div>
                </div>
            </form>
        </div>
    );
}

export default injectIntl(RegistrationStep2);

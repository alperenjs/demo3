import React from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Registration from "./Registration";
import RegistrationStep2 from "./RegistrationStep2";
import RegistrationStep3 from "./RegistrationStep3";

const Authorization = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex bgi-size-cover bgi-no-repeat p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/image-134.png")})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column align-items-center">
              {/* start:: Aside header */}
              <Link to="/" className="flex-column-auto mt-5 pt-20 pb-lg-0 pb-10">
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/logos/svgg.svg")}
                />
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content 
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 text-green">
                  Welcome to KAPorg!
                </h3>
                <p className="font-weight-lighter text-black opacity-80">
                  Discover your organization’s full potential!
                </p>
              </div>*/}
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
               {/* <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2020 Metronic
          </div>*/}
              {/*  <div className="d-flex">
                  <Link to="/terms" className="text-white">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Legal
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Contact
                  </Link>
                </div>*/ }
              </div>
         
            </div>
      
          </div>
 
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            
         
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Routes>
              <Route path="/*" element={<Navigate to="/auth/login" />} />

                <Route path="/auth/registration" element={<Registration />} />
                <Route path="/auth/registration-step2" element={<RegistrationStep2 />} />
                <Route path="/auth/registration-step3" element={<RegistrationStep3 />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authorization
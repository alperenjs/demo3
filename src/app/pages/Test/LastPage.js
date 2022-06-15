import React from 'react'
import { FormattedMessage} from "react-intl";
import { toAbsoluteUrl } from '../../../_metronic/_helpers';
import { Link } from "react-router-dom";

const LastPage = () => {
  
  return (
    <>
    <div className="mb-10 mb-lg-20 text-center">
                <h2 className="font-size-h2 mt-30">
                    <FormattedMessage id="AUTH.REGISTER.TITLE.STEP4" />
                </h2>
                <div className="">
                  <img src={toAbsoluteUrl("/media/bg/Frame.png")} />
                </div>

            </div>
            <div className="d-flex justify-content-center">
          <Link to="/auth/login">
            <button
              type="button"
              className="btn btn-last font-weight-bold px-8 py-4 my-3 mx-4 "
            >
              Sign in
            </button>
          </Link>
          
        </div> 
     </>       
  )
}

export default LastPage
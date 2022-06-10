/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";
import AuthService from "../../../../app/base/services/authentication.service";

import { Dropdown } from "react-bootstrap";

export function QuickUserToggler() {
  // const { user } = useSelector((state) => state.auth);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);
  const navigate = useNavigate();
  const logout = () => {
    AuthService.logout();
    navigate("/auth");
  };

  return (
    <>
      {layoutProps.offcanvas && (
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="quick-user-tooltip">User Actions</Tooltip>}
        >
          <Dropdown
            className="btn btn-icon btn-clean btn-lg w-40px h-40px"
            id="kt_quick_user_toggle"
            data-placement="right"
            data-container="body"
            data-boundary="window"
          >
            <Dropdown.Toggle bsPrefix="p-0" variant="" id="dropdown-basic">
              <span className="symbol symbol-30 symbol-lg-40">
                <span className="svg-icon svg-icon-lg">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/User.svg")}
                  />
                </span>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </OverlayTrigger>
      )}

      {!layoutProps.offcanvas && <UserProfileDropdown />}
    </>
  );
}

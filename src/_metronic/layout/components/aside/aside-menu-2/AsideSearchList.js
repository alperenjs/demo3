import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideSearchList({layoutProps}) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {/* <li
        className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
        aria-haspopup="true"
      >
        <NavLink className="menu-link" to="/dashboard">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
          </span>
          <span className="menu-text">Dashboard</span>
        </NavLink>
      </li> */}
        {/*end::1 Level*/}

        {/* Components */}

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/examplePage1",
            false
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu" to="/examplePage1">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">ikinci menu</span>
          </NavLink>
        </li>

        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">SECTION 23</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Material-UI */}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}

export default AsideSearchList;

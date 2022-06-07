/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ data, layoutProps }) {
  const auth = { user: { name: "alperen" }, roles: [1, 2, 3] }; //getfrom store
  const location = useLocation();

const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  const isAuthorized = (allowedRoles) => {
    if (auth?.roles?.find((role) => allowedRoles?.includes(role))) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/* module pages - submenus */}
        {data.map((menuItem) => {
          return isAuthorized(menuItem.role) ? (
            <li
              key={menuItem.id}
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                menuItem.url,
                menuItem.children?.length > 0 ? true : false
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink className="menu-link menu-toggle" to={menuItem.url}>
                <span className="svg-icon menu-icon">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}
                  />
                </span>
                <span className="menu-text">{menuItem.title}</span>
                {menuItem.children?.length > 0 ? (
                  <i className="menu-arrow" />
                ) : null}
              </NavLink>

              {menuItem.children?.length > 0
                ? menuItem.children.map((firstChild) => {
                    return isAuthorized(firstChild.role) ? (
                      <div key={firstChild.id} className="menu-submenu ">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li
                            className="menu-item  menu-item-parent"
                            aria-haspopup="true"
                          >
                            <span className="menu-link">
                              <span className="menu-text">
                                {firstChild.title}
                              </span>
                            </span>
                          </li>

                          {/* Inputs */}
                          {/*begin::2 Level*/}
                          <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive(
                              firstChild.url,
                              true
                            )}`}
                            aria-haspopup="true"
                            data-menu-toggle="hover"
                          >
                            <NavLink
                              className={`menu-link ${
                                firstChild.children?.length > 0
                                  ? "menu-toggle"
                                  : ""
                              }`}
                              to={firstChild.url}
                            >
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">
                                {firstChild.title}
                              </span>
                              {firstChild.children?.length > 0 ? (
                                <i className="menu-arrow" />
                              ) : null}
                            </NavLink>

                            {/* second level child */}
                            {firstChild.children?.length > 0 ? (
                              <div className="menu-submenu ">
                                <i className="menu-arrow" />
                                <ul className="menu-subnav">
                                  {/*begin::3 Level*/}
                                  {firstChild.children.map((secondChild) => {
                                    return isAuthorized(secondChild.role) ? (
                                      <li
                                        key={secondChild.id}
                                        className={`menu-item  ${getMenuItemActive(
                                          secondChild.url
                                        )}`}
                                        aria-haspopup="true"
                                      >
                                        <NavLink
                                          className="menu-link"
                                          to={secondChild.url}
                                        >
                                          <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                          </i>
                                          <span className="menu-text">
                                            {secondChild.title}
                                          </span>
                                        </NavLink>
                                      </li>
                                    ) : null;
                                  })}
                                  {/*end::3 Level*/}
                                </ul>
                              </div>
                            ) : null}
                          </li>
                          {/*end::2 Level*/}
                        </ul>
                      </div>
                    ) : null;
                  })
                : null}
            </li>
          ) : null;
        })}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}

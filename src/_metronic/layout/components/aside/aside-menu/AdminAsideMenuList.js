/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AdminAsideMenuList({ data, layoutProps }) {
  const location = useLocation();

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {data.length !== 0
          ? data.map((menuItem) => {
              if (menuItem.type === "divider") {
                return (
                  <li key={menuItem.id} className="menu-section ">
                    <h4 className="menu-text">{menuItem.title}</h4>
                    <i className="menu-icon flaticon-more-v2"></i>
                  </li>
                );
              } else {
                return (
                  <li
                    key={menuItem.id}
                    className={`menu-item ${menuItem.subMenus?.length > 0 &&
                      "menu-item-submenu"} ${getMenuItemActive(
                      menuItem.url,
                      menuItem.children?.length > 0 ? true : false
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className={`menu-link ${menuItem.subMenus?.length > 0 &&
                        "menu-toggle"}`}
                      to={menuItem.url}
                    >
                      <span className="svg-icon menu-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/Layers.svg"
                          )}
                        />
                      </span>
                      <span className="menu-text">{menuItem.title}</span>
                      {menuItem.subMenus?.length > 0 && (
                        <i className="menu-arrow" />
                      )}
                    </NavLink>

                    <div className="menu-submenu ">
                      <i className="menu-arrow" />
                      <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        {menuItem.subMenus.length > 0 &&
                          menuItem.subMenus.map((subMenu) => {
                            return (
                              <li
                                key={subMenu.id}
                                className={`menu-item menu-item-submenu ${getMenuItemActive(
                                  subMenu.url,
                                  subMenu.children?.length > 0 ? true : false
                                )}`}
                                aria-haspopup="true"
                                data-menu-toggle="hover"
                              >
                                <NavLink
                                  className="menu-link menu-toggle"
                                  to={subMenu.url}
                                >
                                  <i className="menu-bullet menu-bullet-dot">
                                    <span />
                                  </i>
                                  <span className="menu-text">
                                    {subMenu.title}
                                  </span>
                                  {subMenu.children?.length > 0 && (
                                    <i className="menu-arrow" />
                                  )}
                                </NavLink>
                                {subMenu.children?.length > 0 && (
                                  <div className="menu-submenu ">
                                    <i className="menu-arrow" />
                                    <ul className="menu-subnav">
                                      {/*begin::3 Level*/}
                                      {subMenu.children?.map((childItem) => {
                                        return (
                                          <li
                                            key={childItem.id}
                                            className={`menu-item  ${getMenuItemActive(
                                              childItem.url
                                            )}`}
                                            aria-haspopup="true"
                                          >
                                            <NavLink
                                              className="menu-link"
                                              to={childItem.url}
                                            >
                                              <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                              </i>
                                              <span className="menu-text">
                                                {childItem.title}
                                              </span>
                                            </NavLink>
                                          </li>
                                        );
                                      })}

                                      {/*end::3 Level*/}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        {/*end::2 Level*/}
                      </ul>
                    </div>
                  </li>
                );
              }
            })
          : null}

        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}

        {/* end:: section */}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}

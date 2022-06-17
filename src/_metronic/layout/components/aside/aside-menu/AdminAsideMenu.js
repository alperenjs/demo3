import React, { useMemo } from "react";
import { AdminAsideMenuList } from "./AdminAsideMenuList";
import { menu } from "../../../../../app/Menu";
import { useHtmlClassService } from "../../../_core/MetronicLayout";

export function AdminAsideMenu({ disableScroll }) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true),
    };
  }, [uiService]);

  return (
    <>
      {/* begin::Menu Container */}
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        className={`aside-menu my-4 ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}
      >
        <AdminAsideMenuList data={menu.adminLayout} layoutProps={layoutProps} />
      </div>
      {/* end::Menu Container */}
    </>
  );
}

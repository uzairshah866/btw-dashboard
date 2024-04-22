import * as React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { LayoutProps } from "../../interfaces";

const Layout: React.FC<LayoutProps> = ({
  selectedItem,
  onSidebarItemClick,
  children,
}) => {
  return (
    <>
      <Sidebar
        selectedItem={selectedItem}
        onSidebarItemClick={onSidebarItemClick}
      />
      <Header />
      {children}
    </>
  );
};

export default Layout;

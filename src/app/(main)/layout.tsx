import HeaderMenu from "@/components/Dashboard/Header/HeaderMenu";
import SidebarMenu from "@/components/Dashboard/SidebarMenu/SidebarMenu";
import DashboardLayout from "@/components/Dashboard/dashboard-layout";
import { PropsWithChildren } from "react";

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className="flex max-w-full min-h-svh">
      <SidebarMenu />
      <div className="flex w-full flex-col px-10 py-4 gap-5 overflow-hidden">
        <HeaderMenu />
        <div className="flex flex-col flex-grow-1 h-full">{children}</div>
      </div>
    </main>
  );
};

export default Layout;

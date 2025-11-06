"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import { getPaths } from "@/data/helpers/getPaths";
import { usePathname } from "next/navigation";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useNavigation } from "@/data/helpers/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paths = pathname ? getPaths(pathname) : [];
  const { handleNavigation } = useNavigation();

  const menu: ItemType<MenuItemType>[] = [
    {
      label: "Home",
      key: "1",
      onClick: () => handleNavigation("/home"),
    },
    {
      label: "Intenção",
      key: "2",
      children: [
        {
          label: "Criar proposta de projeto",
          key: "3",
          onClick: () => handleNavigation("/intention"),
        },
        {
          label: "Minhas propostas",
          key: "4",
          onClick: () => handleNavigation("/intention/my"),
        },
      ],
    },
  ];

  const getSelectedKey = () => {
    if (pathname === "/home") return "1";
    if (pathname === "/intention") return "3";
    if (pathname === "/intention/my") return "4";
    return "";
  };

  return (
    <Layout>
      <Layout.Header style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Typography.Title level={3} style={{ color: "#fff" }}>
          Networking Hub
        </Typography.Title>
        <Menu
          selectedKeys={[getSelectedKey()]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
          items={menu}
        />
      </Layout.Header>
      <Layout.Content
        style={{
          padding: "0 48px",
          height: "85.3vh",
        }}
      >
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={paths.map((title) => ({ title }))}
        />
        <div
          style={{
            minHeight: 280,
          }}
        >
          {children}
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Networking Hub ©{new Date().getFullYear()} Created by Aran Prado
      </Layout.Footer>
    </Layout>
  );
}

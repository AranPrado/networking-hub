"use client";

import { Geist, Geist_Mono } from "next/font/google";

import {
  Breadcrumb,
  Button,
  Card,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            padding: "1rem",
          }}
        >
          <Card
            style={{
              maxWidth: 600,
              width: "100%",
              textAlign: "center",
              padding: "2rem",
            }}
            className="border border-red-300"
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Typography.Title level={2}>
                Bem-vindo ao Networking Hub
              </Typography.Title>
              <Typography.Paragraph>
                {/* Este projeto foi desenvolvido como teste técnico para a empresa
                XYZ. Ele demonstra habilidades em Next.js, React e Ant Design. */}
              </Typography.Paragraph>
              <Space size="middle">{children}</Space>
            </Space>
          </Card>
        </div>
      </body>
    </html>
  );
}

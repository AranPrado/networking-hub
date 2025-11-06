"use client";

import { useNavigation } from "@/data/helpers/navigation";
import { FileAddOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";

export default function ButtonsHome() {
  const { handleNavigation } = useNavigation();

  return (
    <Col
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <Button
        type="primary"
        onClick={() => handleNavigation("/intention")}
        icon={<FileAddOutlined />}
        size="large"
      >
        Enviar proposta de projeto
      </Button>
      <Button
        type="default"
        onClick={() => handleNavigation("/admin")}
        icon={<UserSwitchOutlined />}
        size="large"
      >
        Área do administrador
      </Button>
    </Col>
  );
}

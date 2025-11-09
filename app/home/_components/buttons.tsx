"use client";

import ModalLogin from "@/app/_components/modalLogin";
import { useNavigation } from "@/data/helpers/navigation";
import { FileAddOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import { useState } from "react";

export default function ButtonsHome() {
  const { handleNavigation } = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          icon={<UserSwitchOutlined />}
          size="large"
        >
          Área do administrador
        </Button>
      </Col>

      <ModalLogin open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

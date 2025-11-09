"use client";

import { Button, Card, Col, Divider, Tag, Typography } from "antd";
import { IntentionInterface, IntentionStatus } from "../intention/my/_mock";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import ModalIntention from "./modalIntention";
import { useState } from "react";
import { handleIntentionAdmin } from "../admin/hook";

interface ICardsMyIntention extends IntentionInterface {
  type: "admin" | "user";
}

export default function CardsIntention(data: ICardsMyIntention) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Card
        hoverable
        style={{
          maxWidth: 500,
          maxHeight: 500,
        }}
      >
        <Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",

              alignContent: "center",
            }}
          >
            <Col>
              <Typography.Title level={3}>{data.title}</Typography.Title>
            </Col>
            <Col
              style={{
                marginTop: 10,
              }}
            >
              <Tag
                color={
                  data.status === "APROVADO"
                    ? "green"
                    : data.status === "REPROVADO"
                    ? "red"
                    : "gold"
                }
              >
                {data.status?.toUpperCase()}
              </Tag>
            </Col>
          </Col>
          <Col style={{ maxHeight: 500, height: 130, overflowY: "auto" }}>
            <Typography.Paragraph ellipsis={{ rows: 5 }}>
              {data.message}
            </Typography.Paragraph>
          </Col>
          {data.type === "admin" && (
            <>
              <Divider />
              <Col
                style={{
                  width: "100%",
                  display: "flex",
                  gap: 10,
                }}
              >
                {data.status === "PENDENTE" && (
                  <>
                    <Button
                      icon={<CloseCircleOutlined />}
                      style={{ flex: "1" }}
                      danger
                      onClick={() =>
                        handleIntentionAdmin({
                          id: data.id,
                          type: "rejected",
                        })
                      }
                    >
                      Reprovar
                    </Button>
                    <Button
                      icon={<CheckCircleOutlined />}
                      iconPosition="end"
                      style={{ flex: "1", backgroundColor: "green" }}
                      type="primary"
                      onClick={() =>
                        handleIntentionAdmin({
                          id: data.id,
                          type: "approved",
                        })
                      }
                    >
                      Aprovar
                    </Button>
                  </>
                )}
                <Button
                  style={{ flex: "1" }}
                  icon={<EyeOutlined />}
                  iconPosition="end"
                  type="primary"
                  onClick={() => setOpenModal(true)}
                >
                  Visualizar
                </Button>
              </Col>
            </>
          )}
        </Col>
      </Card>
      <ModalIntention
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={data}
      />
    </>
  );
}

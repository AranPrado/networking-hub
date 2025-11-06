"use client";

import { Badge, Card, Col, Tag, Typography } from "antd";
import { IntentionInterface, IntentionStatus } from "../_mock";

// interface ICardsMyIntention extends IntentionInterface {}

export default function CardsMyIntention(data: IntentionInterface) {
  return (
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
            {data.status === "PENDENTE" && (
              <Tag color="processing">
                <Typography.Text>
                  {IntentionStatus[data.status]}
                </Typography.Text>
              </Tag>
            )}

            {data.status === "APROVADO" && (
              <Tag color="success">
                <Typography.Text>
                  {IntentionStatus[data.status]}
                </Typography.Text>
              </Tag>
            )}

            {data.status === "REPROVADO" && (
              <Tag color="error">
                <Typography.Text>
                  {IntentionStatus[data.status]}
                </Typography.Text>
              </Tag>
            )}
          </Col>
        </Col>
        <Col style={{ maxHeight: 500, overflowY: "auto" }}>
          <Typography.Paragraph ellipsis={{ rows: 5 }}>
            {data.message}
          </Typography.Paragraph>
        </Col>
      </Col>
    </Card>
  );
}

"use client";

import { Col, Row } from "antd";
import { mockIntention } from "../_mock";
import CardsMyIntention from "./cards";
import HeaderTitle from "@/_components/headerTitle";

export default function RenderPageMyIntention() {
  return (
    <Row>
      <HeaderTitle title="Minhas propostas" />
      <Col
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {mockIntention.map((item, index) => (
          <CardsMyIntention
            key={index}
            createdAt={item.createdAt}
            email={item.email}
            message={item.message}
            name={item.name}
            phone={item.phone}
            status={item.status}
            title={item.title}
          />
        ))}
      </Col>
    </Row>
  );
}

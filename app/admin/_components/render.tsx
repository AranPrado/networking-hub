"use client";

import CardsIntention from "@/app/_components/cards";
import HeaderTitle from "@/app/_components/headerTitle";
import { mockIntention } from "@/app/intention/my/_mock";
import { Col, Row } from "antd";

export default function RenderPageAdmin() {
  return (
    <Row>
      <HeaderTitle title="Minhas propostas" />
      <Col
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gap: "1rem",
        }}
      >
        {mockIntention.map((item, index) => (
          <CardsIntention
            id={item.id}
            type="admin"
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

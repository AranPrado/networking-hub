"use client";

import { Button, Card, Col, Row } from "antd";
import { FormIntentionType } from "../_schema/index";
import FormIntention from "./formIntention";
import { useForm } from "react-hook-form";

export default function RenderPage() {
  const form = useForm<FormIntentionType>();

  const handleSubmit = (data: FormIntentionType) => console.log(data);

  return (
    <Row>
      <Col span={24}>
        <Card title="Criar proposta de projeto">
          <FormIntention form={form} />
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={form.handleSubmit(handleSubmit)} type="primary">
              Enviar proposta
            </Button>
          </Col>
        </Card>
      </Col>
    </Row>
  );
}

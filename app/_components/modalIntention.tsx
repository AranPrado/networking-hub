import {
  Button,
  Card,
  Col,
  Divider,
  Modal,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { IModalBase } from "./modalLogin";
import { IntentionInterface } from "../intention/my/_mock";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { handleIntentionAdmin } from "../admin/hook";

interface IModalIntention extends IModalBase {
  data: IntentionInterface;
}

export default function ModalIntention({
  onClose,
  open,
  data,
}: IModalIntention) {
  console.log("data", data);
  return (
    <Modal
      title={
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          Visualizar Proposta
        </Typography.Title>
      }
      open={open}
      onCancel={onClose}
      footer={
        <>
          {data.status === "PENDENTE" && (
            <Col style={{ display: "flex", gap: 10 }}>
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
            </Col>
          )}
        </>
      }
      centered
      width={600}
    >
      <Card style={{ background: "#fafafa", borderRadius: 12 }}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={5} style={{ marginBottom: 0 }}>
                {data.title}
              </Typography.Title>
              <Typography.Text type="secondary">
                Enviado em {new Date(data.createdAt).toLocaleDateString()}
              </Typography.Text>
            </Col>
            <Col>
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
          </Row>

          <Divider style={{ margin: "8px 0" }} />

          <Space direction="vertical" size="small">
            <Typography.Text>
              <UserOutlined /> {data.name}
            </Typography.Text>
            <Typography.Text>
              <MailOutlined /> {data.email}
            </Typography.Text>
            <Typography.Text>
              <PhoneOutlined /> {data.phone}
            </Typography.Text>
          </Space>

          <Divider style={{ margin: "8px 0" }} />

          <Row>
            <Col span={24} style={{ maxHeight: 150, overflowY: "auto" }}>
              <Typography.Paragraph style={{ whiteSpace: "pre-wrap" }}>
                {data.message || "Sem mensagem adicional."}
              </Typography.Paragraph>
            </Col>
          </Row>
        </Space>
      </Card>
    </Modal>
  );
}

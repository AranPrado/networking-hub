"use client";

import { useNavigation } from "@/data/helpers/navigation";
import { FormLoginSchema } from "@/data/schemas_global/login";
import { useAuthStore } from "@/data/store/auth";
import { Button, Col, Form, Input, Modal, Tooltip, Typography } from "antd";
import { Controller, useForm, UseFormReturn } from "react-hook-form";

interface IformLogin {
  form: UseFormReturn<FormLoginSchema, undefined, FormLoginSchema>;
}

const FormLogin = ({ form }: IformLogin) => {
  return (
    <Form layout="vertical">
      <Controller
        name="email"
        control={form.control}
        rules={{
          required: "Email obrigatório",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Email inválido",
          },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Email"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input {...field} placeholder="Digite seu email" />
            <Tooltip title="Email para login teste admin">
              <Typography.Text copyable>testeAdmin@email.com</Typography.Text>
            </Tooltip>
          </Form.Item>
        )}
      />

      <Controller
        name="password"
        control={form.control}
        rules={{
          required: "Senha obrigatório",
          minLength: { value: 6, message: "Mínimo de 6 caracteres" },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Senha"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input.Password {...field} placeholder="********" />
            <Tooltip title="Senha para login teste admin">
              <Typography.Text copyable>123456</Typography.Text>
            </Tooltip>
          </Form.Item>
        )}
      />
    </Form>
  );
};

interface IModalLogin {
  open: boolean;
  onClose: () => void;
}

export default function ModalLogin({ open, onClose }: IModalLogin) {
  const form = useForm<FormLoginSchema>();
  const { setToken } = useAuthStore();
  const { handleNavigation } = useNavigation();

  const handleSubmit = (data: FormLoginSchema) => {
    if (data.email === "testeAdmin@email.com" && data.password === "123456") {
      setToken();
      handleNavigation("/admin");
    } else {
      alert("Email ou senha incorretos");
    }
  };

  return (
    <Modal title="Realizar login" open={open} onCancel={onClose} footer={null}>
      <FormLogin form={form} />
      <Col style={{ width: "100%" }}>
        <Button
          onClick={form.handleSubmit(handleSubmit)}
          type="primary"
          style={{ width: "100%" }}
        >
          Login
        </Button>
      </Col>
    </Modal>
  );
}

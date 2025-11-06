"use client";

import { Form, Input } from "antd";
import { Controller, UseFormReturn } from "react-hook-form";
import { type FormIntentionType } from "../_schema/index";
import { maskPhone } from "@/data/masks/phone";

interface IFormIntention {
  form: UseFormReturn<FormIntentionType, undefined, FormIntentionType>;
}

export default function FormIntention({ form }: IFormIntention) {
  return (
    <Form layout="vertical">
      <Controller
        name="name"
        control={form.control}
        rules={{
          required: "Nome obrigatório",
          minLength: { value: 3, message: "Mínimo de 3 caracteres" },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Nome"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input {...field} placeholder="Digite seu nome" />
          </Form.Item>
        )}
      />

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
          </Form.Item>
        )}
      />

      <Controller
        name="phone"
        control={form.control}
        rules={{
          required: "Número de telefone obrigatório",
          minLength: { value: 3, message: "Mínimo de 3 caracteres" },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Telefone"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input
              {...field}
              onChange={(e) => field.onChange(maskPhone(e.target.value))}
              placeholder="Digite seu telefone"
            />
          </Form.Item>
        )}
      />

      <Controller
        name="title"
        control={form.control}
        rules={{
          required: "Titulo da proposta obrigatório",
          minLength: { value: 3, message: "Mínimo de 3 caracteres" },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Titulo da proposta"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input
              {...field}
              onChange={(e) => field.onChange(maskPhone(e.target.value))}
              placeholder="Digite o titulo da proposta"
            />
          </Form.Item>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        rules={{
          required: "Mensagem obrigatória",
          minLength: { value: 3, message: "Mínimo de 3 caracteres" },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Mensagem"
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.error?.message}
          >
            <Input.TextArea {...field} placeholder="Digite aqui sua proposta" />
          </Form.Item>
        )}
      />
    </Form>
  );
}

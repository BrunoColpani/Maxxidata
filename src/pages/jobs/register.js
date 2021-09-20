import React, { useEffect, useState } from "react";
import { Row, Col, message, Form, Input, Select, Button } from "antd";

export default function RegisterJob() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let json = require("../../mock/type.json"); // usei um mock por pasta partindo da source.

    setData(json);
  }, []);
  const onFinish = (values) => {
    message.success("Todos os campos foram preenchidos, usuário criado.");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Preencha todos os campos.");
  };
  return (
    <Row>
      <Col xs={24} xl={24}>
        {" "}
        <h1 style={{ color: "#ba69ff", fontSize: 36 }}>Adicionar Empregado</h1>
      </Col>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {" "}
        <Form.Item
          label="Nome"
          name="nome"
          rules={[
            {
              required: true,
              message: "Por favor insira o nome do usuário",
            },
          ]}
        >
          <Input placeholder="Nome do usuário" />
        </Form.Item>
        <Form.Item
          label="Telefone"
          name="telefone"
          rules={[
            {
              required: true,
              message: "Por favor insira o telefone do usuário",
            },
          ]}
        >
          <Input placeholder="Telefone do usuário" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor insira o email do usuário",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email do usuário" />
        </Form.Item>
        <Form.Item
          label="Cargo"
          name="tipo"
          rules={[
            {
              required: true,
              message: "Por favor insira a profissão do usuário",
            },
          ]}
        >
          <Select placeholder="Profissão do usuário">
            {data.map((item) => (
              <Select.Option key={item.descricao} value={item.descricao}>
                {item.descricao}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Cadastrar Empregado
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

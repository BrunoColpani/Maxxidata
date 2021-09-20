import React, { useEffect, useState } from "react";
import { Table, Row, Col } from "antd";
export default function ListJob() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let json = require("../../mock/data.json");
    setData(json);
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Telefone",
      dataIndex: "telefone",
      key: "telefone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Cargo",
      dataIndex: "tipoDeProfissional",
      key: "tipoDeProfissional",
    },
  ];
  return (
    <>
      <Row>
        <Col xs={24} xl={24} md={24}>
          <h1 style={{color: '#ba69ff', fontSize: 36}}>Lista de Empregados</h1>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey="id"
        dataSource={data}
        loading={loading}
      ></Table>
    </>
  );
}

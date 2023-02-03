import React, { useState } from "react";
import axios from "axios";
import { Button, Select, Form, Input, Table } from "antd";
import "./inputform.css";
const { Option } = Select;

const InputForm = () => {
  const [result, setResult] = useState();
  const [form] = Form.useForm();
  const setData = () => {
    console.log();
  };
  const columns = [
    {
      title: "Public Key",
      dataIndex: "pubKey",
      key: "pubKey",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
    },
  ];

  const PostData = async (params) => {
    let baseUrl = process.env.REACT_APP_ENDPOINT_KPMG;
    console.log("URL ", baseUrl);
    let endPoint = "http://20.96.181.1:9000/generateChildKey";
    console.log("Params::", params);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const body = params;
    axios
      .post(endPoint, body, config)
      .then(function (response) {
        if (response.status === 200) {
          console.log("Response :::", response);

          let customData = response.data;
          let elements = [];
          elements = customData.map((ele, idx) => {
            console.log("12 :", ele.address, ele.pubKey, ele.path);

            return {
              index: ele.index,
              address: ele.address,
              pubKey: ele.pubKey,
              path: ele.path,
            };
          });
          //   console.log("elee ", elements);
          //   //  elements.foreach((e) => console.log("---", e));
          //   elements.map((obj) => console.log("Map---", obj.Address, obj.PubKey));
          setResult(elements);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinish = (values) => {
    const params = {
      xPubKey: values.extendedpublickey,
      count: values.keyCount,
    };
    try {
      console.log("OnFinish :", params);
      PostData(params);
    } catch (error) {
      console.log("Errr", error);
    }

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onCountChange = (value) => {
    form.setFieldsValue({
      keyCount: value,
    });
  };
  return (
    <div className="mainbox">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Public Key"
          name="extendedpublickey"
          rules={[
            {
              required: true,
              message: "Please input your extended public key!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="keyCount"
          label="Count (for keys)"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onCountChange}
            allowClear
          >
            <Option disabled="true" value="---Please Select---">
              Please Select
            </Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="10">10</Option>
            <Option value="15">15</Option>
            <Option value="20">20</Option>
            <Option value="25">25</Option>
            <Option value="30">30</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {result && (
        <div className="display-table " >
          <Table dataSource={result} columns={columns} />
        </div>
      )}
    </div>
  );
};

export default InputForm;

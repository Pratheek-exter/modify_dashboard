"use client"
import React from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';
import moment from 'moment';

const { Option } = Select;

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const OnboardingForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const validateName = (_: any, value: string) => {
    if (!value || value.split(' ').length < 2) {
      return Promise.reject(new Error('Name must have at least two words'));
    }
    return Promise.resolve();
  };

  const validateMobile = (_: any, value: string) => {
    const mobileRegex = /^\d{10}$/;
    if (!value || !mobileRegex.test(value)) {
      return Promise.reject(new Error('Mobile number must be 10 digits'));
    }
    return Promise.resolve();
  };

  const validateDOB = (_: any, value: moment.Moment) => {
    if (!value || moment().diff(value, 'years') < 18) {
      return Promise.reject(new Error('You must be at least 18 years old'));
    }
    return Promise.resolve();
  };

  const validateAddress = (_: any, value: string) => {
    if (!value || value.length <= 10) {
      return Promise.reject(new Error('Address must be more than 10 characters'));
    }
    return Promise.resolve();
  };

  return (
    <Form
      name="onboarding"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true }, { validator: validateName }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="mobile"
            label="Mobile Number"
            rules={[{ required: true }, { validator: validateMobile }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }, { validator: validateDOB }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="idProofType"
            label="ID Proof Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="passport">Passport</Option>
              <Option value="drivingLicense">Driving License</Option>
              <Option value="aadhaar">Aadhaar</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }, { validator: validateAddress }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="onboardedBy"
            label="Onboarded By"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="employee1">Employee 1</Option>
              <Option value="employee2">Employee 2</Option>
              <Option value="employee3">Employee 3</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: '32px', color: 'blue' }}
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default OnboardingForm;

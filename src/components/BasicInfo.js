import React from 'react';
import { Form, InputNumber, Select, Radio, Space, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '../slices/index';

const layout = {
  labelCol: {
    span: 24,
  },
  // wrapperCol: {
  //   span: 16,
  // },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export default function BasicInfo() {
  const dispatch = useDispatch();

  const { basic } = useSelector((state) => ({
    basic: state.majors.basic,
  }));

  const onFinish = (values) => {
    // console.log(values);
  };

  const handleChange = (key) => (value) => {
    // console.log({ key, value });
    const newBasic = { ...basic };
    newBasic[key] = value;
    dispatch(setBasicInfo(newBasic));
  };

  const handleRadioChange = (key) => (event) => {
    // console.log({ key, value: event.target.value });
    const newBasic = { ...basic };
    newBasic[key] = event.target.value;
    dispatch(setBasicInfo(newBasic));
  };

  // console.log(basic);

  return (
    <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
      <Row gutter={[24, 6]} justify="center">
        <Col sm={32} md={16} lg={8}>
          <Form.Item label="Grading Scale">
            <Select
              value={basic.gradingScale}
              onChange={handleChange('gradingScale')}
            >
              <Select.Option value="4">4.0 scale</Select.Option>
              <Select.Option value="5">5.0 scale</Select.Option>
              <Select.Option value="100">100% grading scale</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="What is your most recent grade point average (GPA)?"
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                max: 100,
              },
            ]}
          >
            <InputNumber
              name="recent-gpa"
              value={basic.recentGPA}
              onChange={handleChange('recentGPA')}
            />
          </Form.Item>

          <Form.Item label="How many years of math did you take in high school?">
            <Radio.Group
              name="math-years"
              value={basic.mathYears}
              onChange={handleRadioChange('mathYears')}
            >
              <Space direction="vertical">
                <Radio value="0">0 Years</Radio>
                <Radio value="1">1 Year</Radio>
                <Radio value="2">2 Years</Radio>
                <Radio value="3">3 Years</Radio>
                <Radio value="4">4 Years</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Col>

        <Col sm={32} md={16} lg={8}>
          <Form.Item label="How many years of foreign language did you take in high school?">
            <Radio.Group
              name="fl-years"
              value={basic.flYears}
              onChange={handleRadioChange('flYears')}
            >
              <Space direction="vertical">
                <Radio value="0">0 Years</Radio>
                <Radio value="1">1 Year</Radio>
                <Radio value="2">2 Years</Radio>
                <Radio value="3">3 Years</Radio>
                <Radio value="4">4 Years</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Which achievement tests have you taken?">
            <Radio.Group
              name="achievements-tests"
              value={basic.achievementTests}
              onChange={handleRadioChange('achievementTests')}
            >
              <Space direction="vertical">
                <Radio value="ACT">ACT</Radio>
                <Radio value="SAT">SAT</Radio>
                <Radio value="Both">Both Taken</Radio>
                <Radio value="None">Neither Taken</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

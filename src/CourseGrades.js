import React from 'react';
import { Typography, Row, Col, Radio, Space, Form } from 'antd';

const { Text, Paragraph, Title } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
};

const courseGrades = [
  'Art',
  'Biology',
  'Chemistry',
  'Computer Science',
  'Earth Science / Geology',
  'English',
  'Foreign Language',
  'Mathematics',
  'Music',
  'Physical Education / Sports',
  'Physics',
  'Social Studies / Government / History',
  'Theater',
];
const electiveGrades = [
  'Business / Accounting',
  'Contemporary Issues',
  'Economics',
  'Geography',
  'Journalism',
  'Philosophy / Religious Studies',
  'Physiology / Anatomy',
  'Psychology',
  'Sociology / Anthropology',
  'Speech',
  'Visual Arts',
  'Writing',
];

export default function CourseGrades() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Paragraph>
        <span>
          <strong>Note: </strong>
        </span>
        Indicate your most recent coursework grade completed, especially if you
        completed a college-level course.
      </Paragraph>
      <Text>
        Use high school grades only if you have not completed any college-level
        courses. If you did not complete a course, select N/A.
      </Text>
      <Form {...layout} onFinish={onFinish}>
        <Row gutter={[24, 6]} justify="center" style={{ marginTop: '1rem' }}>
          <Col sm={32} md={16} lg={12}>
            <Title level={3}>Course Grades</Title>
            {courseGrades.map((course) => (
              <Form.Item name={`${course}-grade`} label={course}>
                <Radio.Group>
                  <Space direction="horizontal">
                    <Radio value="N/A">N/A</Radio>
                    <Radio value="A">A</Radio>
                    <Radio value="B">B</Radio>
                    <Radio value="C">C</Radio>
                    <Radio value="D">D</Radio>
                    <Radio value="F">F</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            ))}
          </Col>
          <Col sm={32} md={24} lg={8}>
            <Title level={3}>Elective Grades</Title>
            {electiveGrades.map((course) => (
              <Form.Item name={`${course}-grade`} label={course}>
                <Radio.Group>
                  <Space direction="horizontal">
                    <Radio value="N/A">N/A</Radio>
                    <Radio value="A">A</Radio>
                    <Radio value="B">B</Radio>
                    <Radio value="C">C</Radio>
                    <Radio value="D">D</Radio>
                    <Radio value="F">F</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            ))}
          </Col>
        </Row>
      </Form>
    </>
  );
}

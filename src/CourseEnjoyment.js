import React from 'react';
import { Typography, Row, Col, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseEnjoyment } from './slices/index';

const { Paragraph, Title } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
};

export default function CourseGrades() {
  const dispatch = useDispatch();

  const { courseEnjoyment } = useSelector((state) => ({
    courseEnjoyment: state.majors.courseEnjoyment,
  }));

  const handleChange = (key) => (value) => {
    console.log({ key, value });
    const newCourseEnjoyment = { ...courseEnjoyment };
    newCourseEnjoyment[key] = value;
    dispatch(setCourseEnjoyment(newCourseEnjoyment));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  console.log(courseEnjoyment);
  return (
    <>
      <Paragraph>
        <span>
          <strong>Note: </strong>
        </span>
        How much did you enjoy or not enjoy, the content of the following course
        areas? Do not consider your teacher's effects on your enjoyment of the
        course material. Enter the degree to which you enjoyed a course area by
        clicking to the approximate level of enjoyment you experienced.
      </Paragraph>
      <Form {...layout} onFinish={onFinish}>
        <Row gutter={[24, 6]} justify="center" style={{ marginTop: '1rem' }}>
          <Col sm={32} md={16} lg={12}>
            <Title level={3}>Course Enjoyment</Title>
            {Object.keys(courseEnjoyment).map((course) => (
              <Form.Item label={course}>
                <Select
                  value={courseEnjoyment[course]}
                  onChange={handleChange(course)}
                >
                  <Select.Option value="strongly_disliked">
                    Strongly Disliked It
                  </Select.Option>
                  <Select.Option value="somewhat_disliked">
                    Somewhat Disliked It
                  </Select.Option>
                  <Select.Option value="Neutral">Neutral</Select.Option>
                  <Select.Option value="somewhat_liked">
                    Somewhat Liked It
                  </Select.Option>
                  <Select.Option value="stongly_liked">
                    Strongly Liked It
                  </Select.Option>
                </Select>
              </Form.Item>
            ))}
          </Col>
        </Row>
      </Form>
    </>
  );
}

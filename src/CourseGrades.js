import React from 'react';
import { Typography, Row, Col, Radio, Space, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCourseGrades } from '../src/slices/index';

const { Text, Paragraph, Title } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
};

const courseGradesData = [
  { label: 'Art', name: 'art' },
  { label: 'Biology', name: 'biology' },
  { label: 'Chemistry', name: 'chemistry' },
  { label: 'Computer Science', name: 'computerScience' },
  { label: 'Earth Science / Geology', name: 'earthScience_Geology' },
  { label: 'English', name: 'english' },
  { label: 'Foreign Language', name: 'foreignLanguage' },
  { label: 'Mathematics', name: 'mathematics' },
  { label: 'Music', name: 'music' },
  { label: 'Physical Education / Sports', name: 'physicalEducation_Sports' },
  { label: 'Physics', name: 'physics' },
  {
    label: 'Social Studies / Government / History',
    name: 'socialStudies_Government_History',
  },
  { label: 'Theater', name: 'theater' },
];
const electiveGrades = [
  { label: 'Business / Accounting', name: 'businessAccounting' },
  { label: 'Contemporary Issues', name: 'contemporaryIssues' },
  { label: 'Economics', name: 'economics' },
  { label: 'Geography', name: 'geography' },
  { label: 'Journalism', name: 'journalism' },
  {
    label: 'Philosophy / Religious Studies',
    name: 'philosophy_religiousStudies',
  },
  { label: 'Physiology / Anatomy', name: 'physiology_anatomy' },
  { label: 'Psychology', name: 'psychology' },
  { label: 'Sociology / Anthropology', name: 'sociology_anthropology' },
  { label: 'Speech', name: 'speech' },
  { label: 'Visual Arts', name: 'visual_arts' },
  { label: 'Writing', name: 'writing' },
];

export default function CourseGrades() {
  const dispatch = useDispatch();

  const { courseGrades } = useSelector((state) => ({
    courseGrades: state.majors.courseGrades,
  }));

  const handleRadioChange = (key) => (event) => {
    console.log({ key, value: event.target.value });
    const newCourseGrades = { ...courseGrades };
    newCourseGrades[key] = event.target.value;
    dispatch(setCourseGrades(newCourseGrades));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  // console.log(courseGrades);
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
            {courseGradesData.map((course) => (
              <Form.Item label={course.label}>
                <Radio.Group
                  name={`${course.label}-grade`}
                  value={courseGrades[course.name]}
                  onChange={handleRadioChange(course.name)}
                >
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
              <Form.Item label={course.label}>
                <Radio.Group
                  name={`${course.label}-grade`}
                  value={courseGrades[course.name]}
                  onChange={handleRadioChange(course.name)}
                >
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

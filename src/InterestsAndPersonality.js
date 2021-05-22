import React from 'react';
import { Typography, Row, Col, Select, Form } from 'antd';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
// import { setInterestsAndPersonality } from './slices/index';

const { Paragraph } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
};

const iAndP = [
  { label: 'Working Alone', name: 'workingAlone' },
  { label: 'Helping People Solve Problems', name: 'helpSolveProblems' },
  { label: 'Working Outdoors', name: 'workingOutdoors' },
  {
    label: 'Working With Immediately Practical Things',
    name: 'immediatelyPracticalThings',
  },
  {
    label: 'Working with Organizations and Groups',
    name: 'organizations_Groups',
  },
  {
    label: 'Working with Detailed Logical Structure',
    name: 'detailedLogicalStructure',
  },
  {
    label: 'Working With Children or Young People',
    name: 'childrenYoungPeople',
  },
  {
    label: 'Study a major that has a clear connection to a career?',
    name: 'connectionToCareer',
  },
  { label: 'Exert power and authority?', name: 'powerAndAuthority?' },
  { label: 'Work on self-initiated projects?', name: 'selfInitiatedProjects?' },
  {
    label: 'Speak to and facilitate groups of people at work? ',
    name: 'facilitateGroups',
  },
  {
    label: 'Engage in high stress and, perhaps, risky undertakings?',
    name: 'riskyUndertakings',
  },
  {
    label: 'Use your manual and mechanical skills?',
    name: 'manualAndMechanicalSkills',
  },
  { label: 'Interest in military service?', name: 'militaryService?' },
  {
    label: 'Participate in sports and physically demanding activities?',
    name: 'sports',
  },
  {
    label: 'Maintain hard working, disciplined, study skills?',
    name: 'disciplinedStudySkills',
  },
  {
    label: 'Study different peoples and cultures?',
    name: 'peoplesAndCultures',
  },
  { label: 'Engage in religious activities?', name: 'religiousActivities' },
  {
    label: 'Teach children, young people or adults?',
    name: 'youngPeopleOrAdults?',
  },
  {
    label: 'Avoid working with hazardous situations or materials?',
    name: 'hazardousSituations',
  },
  { label: 'Engage in social issues and actions?', name: 'socialIssues' },
  { label: 'Stay involved in current events?', name: 'currentEvents' },
  { label: 'Rely on mental images?', name: 'mentalImages' },
];

export default function CourseGrades() {
  // const dispatch = useDispatch();

  const { interestsAndPersonality } = useSelector((state) => ({
    interestsAndPersonality: state.majors.interestsAndPersonality,
  }));

  const handleChange = (key) => (value) => {
    console.log({ key, value });
    const newinterestsAndPersonality = { ...interestsAndPersonality };
    newinterestsAndPersonality[key] = value;
    // dispatch(setInterestsAndPersonality(newinterestsAndPersonality));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  console.log(interestsAndPersonality);
  return (
    <>
      <Paragraph>
        <span>
          <strong>Note: </strong>
        </span>
        Indicate your most recent coursework grade completed, especially if you
        completed a college-level course.
      </Paragraph>

      <Form {...layout} onFinish={onFinish}>
        <Row gutter={[24, 6]} justify="center" style={{ marginTop: '1rem' }}>
          <Col sm={32} md={16} lg={12}>
            {iAndP.map((item) => (
              <Form.Item label={item.label}>
                <Select
                  value={interestsAndPersonality[item.name]}
                  onChange={handleChange(item.name)}
                >
                  <Select.Option value="strongly_disliked">
                    Strongly Dislike
                  </Select.Option>
                  <Select.Option value="somewhat_disliked">
                    Dislike
                  </Select.Option>
                  <Select.Option value="Neutral">Neutral</Select.Option>
                  <Select.Option value="somewhat_prefer">Prefer</Select.Option>
                  <Select.Option value="stongly_prefer">
                    Strongly Prefer
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
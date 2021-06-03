import React from 'react';
import { Typography, Row, Col, Select, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setInterestsAndPersonality } from '../slices/index';

const { Paragraph } = Typography;

const layout = {
  labelCol: {
    span: 24,
  },
};

const iAndP = [
  // { label: 'Working Alone', name: 'workingAlone' },
  { label: 'Helping People Solve Problems', name: 'helpSolveProblems' },
  { label: 'Working Outdoors', name: 'workingOutdoors' },
  // {
  //   label: 'Working With Immediately Practical Things',
  //   name: 'immediatelyPracticalThings',
  // },
  {
    label: 'Working with Organizations and Groups',
    name: 'organizations_Groups',
  },
  // {
  //   label: 'Working with Detailed Logical Structure',
  //   name: 'detailedLogicalStructure',
  // },
  // {
  //   label: 'Working With Children or Young People',
  //   name: 'childrenYoungPeople',
  // },
  // {
  //   label: 'Study a major that has a clear connection to a career?',
  //   name: 'connectionToCareer',
  // },
  // { label: 'Exert power and authority?', name: 'powerAndAuthority' },
  // { label: 'Work on self-initiated projects?', name: 'selfInitiatedProjects' },
  // {
  //   label: 'Speak to and facilitate groups of people at work? ',
  //   name: 'facilitateGroups',
  // },
  // {
  //   label: 'Engage in high stress and, perhaps, risky undertakings?',
  //   name: 'riskyUndertakings',
  // },
  // {
  //   label: 'Use your manual and mechanical skills?',
  //   name: 'manualAndMechanicalSkills',
  // },
  // { label: 'Interest in military service?', name: 'militaryService' },
  // {
  //   label: 'Participate in sports and physically demanding activities?',
  //   name: 'sports',
  // },
  // {
  //   label: 'Maintain hard working, disciplined, study skills?',
  //   name: 'disciplinedStudySkills',
  // },
  // {
  //   label: 'Study different peoples and cultures?',
  //   name: 'peoplesAndCultures',
  // },
  // { label: 'Engage in religious activities?', name: 'religiousActivities' },
  {
    label: 'Teach children, young people or adults?',
    name: 'teachYoungPeopleOrAdults',
  },
  // {
  //   label: 'Avoid working with hazardous situations or materials?',
  //   name: 'hazardousSituations',
  // },
  // { label: 'Engage in social issues and actions?', name: 'socialIssues' },
  // { label: 'Stay involved in current events?', name: 'currentEvents' },
  // { label: 'Rely on mental images?', name: 'mentalImages' },
  // {
  //   label: 'Engage in scientific problem solving?',
  //   name: 'scientificProblemSolving',
  // },
  // {
  //   label: 'Public dramatic or musical performance?',
  //   name: 'dramaticOrMusicalPerformance',
  // },
  // { label: 'Exercise your creativity?', name: 'exerciseCreativity' },
  // {
  //   label: 'Limit choices to careers with an above-average salary?',
  //   name: 'aboveAverageSalary',
  // },
  // {
  //   label: 'Avoid majors lasting more than 4 years?',
  //   name: 'majorsMoreThan4Years',
  // },
  // {
  //   label: 'Assist others to resolve conflict situations?',
  //   name: 'resolveConflictSituations',
  // },
  // { label: 'Wish to study abroad?', name: 'studyAbroad' },
  // { label: 'Work in a business environment?', name: 'businessEnvironment' },
  // { label: 'Combine work with learning?', name: 'workWithLearning' },
  // {
  //   label: 'Value leadership training and experiences?',
  //   name: 'leadershipTrainingExperiences',
  // },
  // {
  //   label: 'Rely on and trust in your peers, camaraderie?',
  //   name: 'camaraderie',
  // },
  // {
  //   label: 'Provide nursing and/or healthcare related services?',
  //   name: 'nursingOrHealthcare',
  // },
  {
    label: 'Tackle problems in environmental pollution of air and water?',
    name: 'environmentalProblems',
  },
  {
    label: 'Interested in Design and Computer Aided Drafting?',
    name: 'designAndComputerAidedDrafting',
  },
  {
    label: 'Ecology, Environment, and Conservation',
    name: 'ecoEnvConservation',
  },
  {
    label: 'Interested in both Technology and Business Processes?',
    name: 'techAndBusinessProcesses',
  },
  {
    label:
      'Are you interested in “why” behind the properties of different materials?',
    name: 'propertiesOfDifferentMaterials',
  },
  {
    label: 'Do you enjoy lab work?',
    name: 'enjoyLabWork',
  },
  {
    label: 'Do you enjoy a variety of science subjects?',
    name: 'enjoyScienceSubjects',
  },
  {
    label: 'Working on construction, renovation, and rebuilding projects?',
    name: 'constructRenovateRebuild',
  },
  {
    label: 'Working with both Software and Hardware of computers?',
    name: 'computerSoftwareAndHardware',
  },
  {
    label: 'Solve real world problems by building software systems?',
    name: 'solveRealWordlProblemsSoftware',
  },
  {
    label: 'Problem-solving',
    name: 'problemSolving',
  },
  {
    label: 'Design and implementation of software systems and algorithms?',
    name: 'designImplementationSoftwareAlgos',
  },
  {
    label: 'Do you enjoy Mathematics?',
    name: 'enjoysMath',
  },
  {
    label: 'Do you want to enhance your financial management skills?',
    name: 'enhanceFinancialManagementSkills',
  },
  {
    label: 'Interested in technology?',
    name: 'interestedInTech',
  },
  {
    label: 'Interested in Literature and Writing?',
    name: 'interestedInLitAndWriting',
  },
  {
    label:
      'Interested in studying World History including Culture, Social Justice, Political Ideologies etc.?',
    name: 'interestedInWorldHistory',
  },
  {
    label: 'Interested in advanced Math and Science coursework?',
    name: 'interestedInAdvMathAndScience',
  },
];

export default function CourseGrades() {
  const dispatch = useDispatch();

  const { interestsAndPersonality } = useSelector((state) => ({
    interestsAndPersonality: state.majors.interestsAndPersonality,
  }));

  const handleChange = (key) => (value) => {
    // console.log({ key, value });
    const newinterestsAndPersonality = { ...interestsAndPersonality };
    newinterestsAndPersonality[key] = value;
    dispatch(setInterestsAndPersonality(newinterestsAndPersonality));
  };

  const onFinish = (values) => {
    // console.log(values);
  };

  // console.log(interestsAndPersonality);
  return (
    <>
      <Paragraph>
        <span>
          <strong>Note: </strong>
        </span>
        Select the degree to which you dislike or prefer each question
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
                  <Select.Option value="neutral">Neutral</Select.Option>
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

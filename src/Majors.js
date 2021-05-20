import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import BasicInfo from './BasicInfo';
import CourseGrades from './CourseGrades';

const { Step } = Steps;

const steps = [
  {
    title: 'Basic Info',
    content: <BasicInfo />,
  },
  {
    title: 'Course Grades',
    content: <CourseGrades />,
  },
  {
    title: 'Course Enjoyment',
    content: 'Course Enjoyment',
  },
  {
    title: 'GPA',
    content: 'GPA',
  },
  {
    title: 'Interests and Personality',
    content: 'Interests and Personality',
  },
];

export default function Majors() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <div className="majors-stepper">
      <Steps progressDot onChange={onChange} current={current} responsive>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{ textAlign: 'center' }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

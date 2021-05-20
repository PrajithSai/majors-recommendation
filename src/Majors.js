import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import BasicInfo from './BasicInfo';

const { Step } = Steps;

const steps = [
  {
    title: 'Basic Info',
    content: <BasicInfo />,
  },
  {
    title: 'Course Grades',
    content: 'Second-content',
  },
  {
    title: 'Course Enjoyment',
    content: 'Third-content',
  },
  {
    title: 'GPA',
    content: 'Fourth-content',
  },
  {
    title: 'Interests and Personality',
    content: 'Last-content',
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

  return (
    <div className="majors-stepper">
      <Steps current={current} responsive>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
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

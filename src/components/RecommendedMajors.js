import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'antd';
import { sortBy } from 'lodash';

import { getRecommendations } from '../utils/majorsRelation';

const { Panel } = Collapse;

const N_RECOMMENDATIONS = 6;

export default function RecommendedMajors() {
  const { courseEnjoyment } = useSelector((state) => ({
    courseEnjoyment: state.majors.courseEnjoyment,
  }));
  const recommendations = sortBy(getRecommendations(courseEnjoyment), ['score'])
    .reverse()
    .slice(0, N_RECOMMENDATIONS);
  console.log({ recommendations });
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        {recommendations.map((recc, index) => (
          <Panel header={recc.major} key={index}>
            Insert more details related to {recc.major}.
          </Panel>
        ))}
      </Collapse>
    </>
  );
}

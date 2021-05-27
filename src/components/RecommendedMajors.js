import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Empty } from 'antd';
import { sortBy } from 'lodash';

import { getRecommendations } from '../utils/majorsRelation';

const { Panel } = Collapse;

const N_RECOMMENDATIONS = 5;

export default function RecommendedMajors() {
  const { fullState } = useSelector((state) => ({
    fullState: state.majors,
  }));
  const recommendations = sortBy(getRecommendations(fullState), ['score'])
    .filter((rec) => rec.score > 0)
    .reverse()
    .slice(0, N_RECOMMENDATIONS);
  const noRecsFound = recommendations.length === 0;
  return (
    <>
      {noRecsFound ? (
        <Empty description="No recommendations found! Please enter/update your course grades and interests in the previous screens to get recommendations!" />
      ) : (
        <Collapse defaultActiveKey={['1']}>
          {recommendations.map((recc, index) => (
            <Panel
              // header={recc.major}
              header={`${recc.major}, Score: ${recc.score}`}
              key={index}
            >
              Insert more details related to {recc.major}. <br />
            </Panel>
          ))}
        </Collapse>
      )}
    </>
  );
}

import React from 'react';

interface Props {
    title: string;
}

export const SubHeading = (props: Props) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__cormorant">{props.title}</p>
      <img src={require('../../assets/spoon.png')} alt="spoon" className="spoon__img"/>
  </div>
);

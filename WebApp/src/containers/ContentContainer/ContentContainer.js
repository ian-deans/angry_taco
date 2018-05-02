import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: '85%',
  width: '85%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const contentContainer = (props) => (
  <div>
    <Paper style={style} zDepth={2} children={props.children}/>
  </div>
);

export default contentContainer;
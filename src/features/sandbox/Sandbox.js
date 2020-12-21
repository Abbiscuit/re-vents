import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement, increment } from './testReducer';

export default function Sandbox() {
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(state => state.test.data);
  const { loading } = useSelector(state => state.async);

  return (
    <Fragment>
      <h1>Testing 123</h1>
      <h3>The data is: {data} </h3>
      <Button
        name="increment"
        loading={loading && target === 'increment'}
        content="Increment"
        color="green"
        onClick={e => {
          dispatch(increment(20));
          setTarget(e.target.name);
        }}
      />
      <Button
        name="decrement"
        loading={loading && target === 'decrement'}
        content="Decrement"
        color="red"
        onClick={e => {
          dispatch(decrement(10));
          setTarget(e.target.name);
        }}
      />
      <Button
        content="Open Modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </Fragment>
  );
}

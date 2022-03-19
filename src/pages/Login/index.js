import React from 'react';
import { useDispatch } from 'react-redux';

import * as exampleActions from '../../store/modules/examples/actions';
import { Title } from './styled';

function Index() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao);
  }
  return (
    <div>
      <Title>Login</Title>
      <p>para aproveitar o app</p>
      <button type="button" onClick={handleClick}>Salvar</button>
    </div>
  );
}


export default Index
//const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
//export default connect(null, mapDispatchToProps)(Index);

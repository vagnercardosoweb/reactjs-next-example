import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions } from '../store/ducks/repositories';
import withLayout from '../components/Layout';

function Index() {
  const repositories = useSelector(state => state.repositories);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      await dispatch(Actions.fetchByUser('vagnercardosoweb'));
    }

    fetch();
  }, []);

  return (
    <>
      <h1>My Repositories</h1>

      <ul>
        {repositories.loading && <li>Loadding repositories...</li>}
        {repositories.data
          .filter(({ fork }) => !fork)
          .map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
      </ul>
    </>
  );
}

export default withLayout(Index);

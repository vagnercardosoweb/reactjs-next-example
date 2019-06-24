import { withRouter } from 'next/router';

import withLayout from '../components/Layout';

export default withLayout(
  withRouter(({ router }) => <pre>{JSON.stringify(router, '\t', 2)}</pre>)
);

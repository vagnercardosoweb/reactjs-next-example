import 'isomorphic-unfetch';
import Link from 'next/link';

import withLayout from '../components/Layout';

const Index = props => (
  <>
    <h1>Marvel TV Shows</h1>

    <ul>
      {props.shows.map(({ id, name }) => (
        <li key={id}>
          <Link
            as={`/show/${id}`}
            href={{ pathname: '/show', query: { id } }}
            prefetch
            passHref
          >
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default withLayout(Index);

import 'isomorphic-unfetch';
import withLayout from '../components/Layout';

function Post({ show }) {
  return (
    <>
      <h1>
        <a href={show.url} target="_blank">
          {show.name}
        </a>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      {show.image && <img src={show.image.medium} />}
    </>
  );
}

Post.getInitialProps = async function({ query: { id } }) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default withLayout(Post);

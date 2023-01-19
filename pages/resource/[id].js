export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  const dat = await res.json();
  const data = dat.quotes;

  const paths = data.map((aut) => {
    return {
      params: { id: aut.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://dummyjson.com/quotes/" + id);
  const data = await res.json();

  return {
    props: { author: data },
  };
};

const Details = ({ author }) => {
  return (
    <>
      {/* <h1>More about this quote</h1>
      <h2>{author.author}</h2>
      <h3>{author.quote}</h3> */}
      <div className="card mx-auto mt-5 mb-5" style={{ width: "50%" }}>
        <div class="card-header text-dark">More about this quote</div>
        <div class="card-body text-dark">
          <blockquote className="blockquote mb-0">
            <p>{author.quote}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{author.author}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Details;

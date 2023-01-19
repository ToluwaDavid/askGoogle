import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  //   console.log(res);
  const data = await res.json();
  //   console.log(data);

  return {
    props: { quotes: data.quotes },
  };
};

const Quote = ({ quotes }) => {
  return (
    <>
      <div className="text-center mt-5">These are helpful quotes</div>
      <div className="text-center mt-1 mb-5">
        Click on a quote to get more info about it
      </div>
      {quotes.map((quo) => (
        <div className="card mx-auto p-4 m-2" style={{ width: "50%" }}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              <Link href={"/resource/" + quo.id} key={quo.id}>
                {quo.quote}
              </Link>
            </li>
          </ul>
        </div>
        // <div className="">
        //   <Link href={"/resource/" + quo.id} key={quo.id}>
        //     {quo.quote}
        //   </Link>
        // </div>
      ))}
    </>
  );
};

export default Quote;

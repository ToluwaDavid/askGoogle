import Head from "next/head";
import Link from "next/link";

const Resource = () => {
  return (
    <>
      <Head>
        <title>Resource</title>
        <meta name="keywords" content="ask-google"></meta>
      </Head>
      <div className="text-center">
        <h4 className="mb-5 mt-5">
          <u>Resources</u>
        </h4>
        <div className="text-center">
          <img src="/khabyLaneNo.png" width="100" />
          <Link href="https://www.google.com/" target="_blank">
            <span className="btn btn-lg btn-secondary text-danger fw-bold border-white bg-white">
              Also, check Google
            </span>
          </Link>
        </div>

        <div className="text-center">
          <img src="/khabyLaneNo.png" width="100" />
          <Link href="https://www.youtube.com/" target="_blank">
            <span className="btn btn-lg btn-secondary text-danger fw-bold border-white bg-white">
              Also, Check youtube
            </span>
          </Link>
        </div>

        <div className="text-center">
          <img src="/khabyLaneNo.png" width="100" />
          <Link href="https://stackoverflow.com/" target="_blank">
            <span className="btn btn-lg btn-secondary text-danger fw-bold border-white bg-white">
              Also, Check StackOverFlow
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resource;

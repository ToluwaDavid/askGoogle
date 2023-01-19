import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="ask-google"></meta>
      </Head>
      <div className="text-center">
        <h4 className="mb-5 mt-5">
          <u>About</u>
        </h4>
        <p>
          <u>
            <Link
              href="https://www.linkedin.com/in/tolulope-david-adetokunbo/"
              target="_blank"
            >
              Connect with me on LinkedIn - <span>Click this</span>
            </Link>
          </u>
        </p>
        <p>
          <u>
            <Link href="https://twitter.com/toluwa_david" target="_blank">
              Follow me on twitter - <span>Click this</span>
            </Link>
          </u>
        </p>
      </div>
    </>
  );
};

export default About;

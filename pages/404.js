import Link from "next/link";
const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Haaaaaa....</h1>
      <h2>This page does not exist</h2>
      <p>
        Visit the{" "}
        <Link href="/">
          <u>Homepage</u>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

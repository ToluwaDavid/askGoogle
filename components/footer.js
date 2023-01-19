import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center">
      <footer className="mt-auto text-white-50">
        <p>
          Copyright - This current year - tweet at me{" "}
          <Link
            href="https://twitter.com/toluwa_david"
            target="_blank"
            className="text-danger"
          >
            @toluwa_david
          </Link>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;

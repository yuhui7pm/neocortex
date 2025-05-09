function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-gray-200 border-t py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">© {year} John Doe</p>
        <p className="text-gray-500 mt-2 text-sm">
          Original Theme Clean Blog from Start Bootstrap
          <br />
          Adapted for React by Neocortex
        </p>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;

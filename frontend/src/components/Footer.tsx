function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">© {year} John Doe</p>
        <p className="mt-2 text-sm text-gray-500">
          Original Theme Clean Blog from Start Bootstrap
          <br />
          Adapted for React by Neocortex
        </p>
      </div>
    </footer>
  );
}

export { Footer };

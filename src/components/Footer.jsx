function Footer() {
  return (
    <footer className="bg-sky-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold">RFC Group of Company</h2>
        <p className="mt-3 text-sky-100">
          Professional Manpower Supply Solutions
        </p>
        <p className="mt-3 text-sky-100">
          Email: info@rfcgroup.com | Phone: +971 56 960 8768
        </p>
        <p className="mt-4 text-sm text-sky-200">
          © {new Date().getFullYear()} RFC Group of Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
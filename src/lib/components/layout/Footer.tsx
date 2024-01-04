const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a href="https://faldi.xyz" target="_blank" rel="noopener noreferrer">
            Naufaldi Rafif S
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

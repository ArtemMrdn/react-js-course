function Footer() {
  return (
    <footer class="page-footer pink lighten-3">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear()} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

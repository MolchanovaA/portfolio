const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light my_nav_Styles shadow">
        <div class="container-fluid">
          <a class="navbar-brand my_logo" href="index.html">
            Molchanova
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="index.html">
                Home.
              </a>
              <a class="nav-link" href="about.html">
                Certificates.
              </a>
              <a class="nav-link" href="projects.html">
                Projects.
              </a>
              <a class="nav-link" href="contacts.html">
                Contacts.
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

export default function Nav({ links }) {
  return (
    <nav
      className="navbar navbar-expand-sm bg-secondary"
      style={{ margin: "20px auto" }}
    >
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

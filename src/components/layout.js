import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({ children }) => {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  return (
    <>
      {/* <header>
        <h1>Todo Buy</h1>
        <nav>
          <ul>
            <li>
              <Link className="menuitem" to="/">
                Home
              </Link>
            </li>
            {!isLoading && isAuthenticated && (
              <li>
                <button className="menuitem" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header> */}

      <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary border-bottom border-body" data-bs-theme="dark" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">TodoBuy</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Saved</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Electronics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Fashion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Industrial Equipment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Health & Beauty</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Collectibles and Art</a>
              </li>
              {!isLoading && isAuthenticated && (
              <li class="nav-item">
                <button class="nav-link active" aria-current="page" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

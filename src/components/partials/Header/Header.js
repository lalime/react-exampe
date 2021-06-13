import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = (props) => {
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-4 shadow">
                <Link
                    to="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-orange fs-2"
                >
                    <span>LifeOpedia!</span>
                </Link>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-uppercase fw-bold menu">
                    <li className="active">
                        <Link
                            to="index.html"
                            className="nav-link px-2 link-secondary"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="nav-link px-2 link-dark">
                            AWS
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 link-dark">
                            TRAVEL
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 link-dark">
                            DESIGN
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 link-dark">
                            STYLE
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 link-dark">
                            FOOD
                        </Link>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <div className="d-inline-flex justify-content-center ">
                        <Link
                            to="/login"
                            className="nav-link px-2 link-secondary text-uppercase"
                        >
                            Login
                        </Link>{" "}
                        <span className="d-flex align-items-center justify-content-center">
                            |
                        </span>{" "}
                        <Link to="#" className="nav-link px-2 link-dark text-uppercase">
                            Register
                        </Link>
                    </div>
                    <button type="button" className="btn bg-orange search-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

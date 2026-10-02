import React from "react";

const About = () => {
  return (
    <div className="container my-4">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">About iNotebook</h1>
        <p className="lead text-muted">
          Your simple and secure cloud-based notebook for managing notes.
        </p>
      </div>

      {/* About Project */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">📝 What is iNotebook?</h3>
              <p className="card-text">
                iNotebook is a full-stack note-taking application that allows
                users to create, manage, update and delete their personal notes.
              </p>
              <p className="card-text">
                The application uses React.js for the frontend and a custom REST
                API built with Node.js and Express.js for backend operations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">🔐 Authentication</h3>
              <p className="card-text">
                iNotebook provides user authentication using JWT (JSON Web
                Token). Each user's notes are protected and can only be accessed
                after authentication.
              </p>
              <p className="card-text">
                Passwords are securely handled using bcrypt before being stored
                in the database.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="mb-4">🚀 Features</h3>

          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">🔑 User Signup & Login</li>
                <li className="list-group-item">📝 Create Notes</li>
                <li className="list-group-item">
                  📚 Fetch User-Specific Notes
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✏️ Update Notes</li>
                <li className="list-group-item">🗑️ Delete Notes</li>
                <li className="list-group-item">🔔 Application Alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="mb-4">🛠️ Technology Stack</h3>

          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="border rounded p-3">
                <h5>⚛️ React.js</h5>
                <small className="text-muted">Frontend</small>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="border rounded p-3">
                <h5>🟢 Node.js</h5>
                <small className="text-muted">Runtime</small>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="border rounded p-3">
                <h5>🚂 Express.js</h5>
                <small className="text-muted">Backend API</small>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="border rounded p-3">
                <h5>🍃 MongoDB</h5>
                <small className="text-muted">Database</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer */}
      <div className="card shadow-sm mt-4 mb-4">
        <div className="card-body text-center">
          <h3 className="fw-bold">👨‍💻 Built By: Mohd Kaish</h3>

          <p className="text-muted mb-3">
            CSE Student | Aspiring Full-Stack Web Developer | DSA Enthusiast
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://github.com/kaish10-hub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mohd-kaish10/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/kaish_n112/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

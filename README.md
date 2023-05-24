The goal of the project work is to implement a "ToDo application" with a functional CI/CD pipeline.

In short:
- An Express backend that handles ToDo tasks stored in an array via a REST API endpoint.
- A React frontend with a simple ToDo-application where initial tasks are fetched from the backend.
- GitLab pipeline for integrating and deploying the application.
- Additionally a possibility of saving and loading tasks list to/from a database (MongoDB) was added.
    NB: since server is not available anymore, database part is not functional.

- Instructions for local running:
    Run command 'docker-compose up -d', then see in the browser localhost:2000(for frontend) and localhost:4000 (for backend).
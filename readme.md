# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- Install [Docker](https://docs.docker.com/get-docker/)
  - You can verify docker is ready by running the following commands in your terminal: docker -v and docker-compose -v.
- Run `docker-compose up`
- Test that the previous command succeeded by visiting http://localhost:3000/api/ping with your browser
- Create a new user at http://localhost:3001/register
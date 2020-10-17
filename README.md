# babel-preset-react-app-defaulting-to-dev

Just re-exports `babel-preset-react-app`, except if no `BABEL_ENV` or `NODE_ENV` is set, we default to "development".

This is useful when we have certain plugins for prettier (eg. `prettier-plugin-import-sort`) trying to load babel, and choking because `babel-preset-react-app` requires these envs to be set. And there was no convenient way to set this other than to instruct each developer to set it in their environment, which is annoying and gross. 

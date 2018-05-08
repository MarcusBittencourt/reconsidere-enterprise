// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAt74MAjgFMhV7wTkZrn7ffg4SRVpXomkU",
    authDomain: "reconsidere-enterprise.firebaseapp.com",
    databaseURL: "https://reconsidere-enterprise.firebaseio.com",
    projectId: "reconsidere-enterprise",
    storageBucket: "reconsidere-enterprise.appspot.com",
    messagingSenderId: "613435247866"
  }
};

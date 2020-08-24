# spotifyApp
Displays currently playing song/album using Spotify api

Features Spotify API to display a current artist, album and song
Implements Spotify OAuth2 so users can read currently playing track from their Spotify account.

For more information on authorization scopes: https://developer.spotify.com/documentation/general/guides/scopes/#user-read-playback-state

Before we get started make sure you have npm and node installed on your machine. You will also need a Spotify account to use this app.


# Spotify Accounts Authentication Examples

This project contains basic demos showing the different OAuth 2.0 flows for [authenticating against the Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/).

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow

## Installation

Clone the repository and install its dependencies running:

    $ npm install

### Using your own credentials

**1) Create an App**

You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the examples with the ones you get from My Applications.

**2) Start Auth Server**

* Navigate to the auth-server directory 
    `$ cd auth-server`
* Install the dependencies
    `$ npm install`
* Paste in the redirect uri, client id, and client secret you copied in step 1
* Run the server
    ` node authorization_code/app.js  <CLIENT_ID> <CLIENT_SECRET`

**3) Start Client**

* Navigate to the auth-server directory
    `cd client`
* Install the dependencies `npm install`
* Run the Server
    `npm start`

**4) Use the App**

* Make sure you have a song playing (or paused) on a Spotify app
* Visit http://localhost:3000
* Click 'Log in with Spotify' and log in
* Click the 'Check Now Playing' Button
* Your currently playing song's name and album art should appear

## Running the examples
In order to run the different examples, open the folder with the name of the flow you want to try out, and run its `app.js` file. For instance, to run the Authorization Code example do:

    $ cd authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser.

![banner](https://res.cloudinary.com/do6vrwdse/image/upload/v1655549092/drop-box/screenshot-1.png)

# 💫 Hackathon BCN Inclusive Coding

Frontend project created as a solution to the challenge given in [Hackathon BCN Inclusive Coding](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-frontend) organized by [Nuwe](https://nuwe.io/), [Creu Roja Barcelona](https://www.cruzroja.es/principal/web/barcelona) and [Mobile World Capital, Barcelona](https://mobileworldcapital.com/).

## 🌟 The Challenge

Given this [Figma design](https://www.figma.com/file/0SZrgYVwjp2mz1ohVi8WSw?node-id=51:4), we have to:

1. Build a drop box app with three different views
2. Add a **Login** and **Register** view
3. Deploy the project

As extra improvements to implement:

4. Allow the user to upload files to her Google Drive, using Google API or any library implementing it
5. Responsive design

## 👀 Usage

See and experiment with a live example here: [drop-box.surge.sh/](https://drop-box.surge.sh/)

First thing we see is a login view, when clicking the button, an [Auth0](https://auth0.com) **Login Box** opens, where we can login with our Google account. As the main objective is to upload files to [Google Drive](https://drive.google.com) there is no **register** option, you just are given the option to login with a Google account.

After clicking **Continue with Google buttom** we are taken to a view with a **Drop Zone**, an **Upload** button, and a **Logout** button.

Pressing **Logout** redirects us to the previous **Login** view.

We are using [Auth0](https://auth0.com) as it allows us to implement authentication with Google (and multiple identity providers as Facebook, GitHub, etc...) as well as to call protected APIs with an Access Token.

## Components

### AuthorizationProvider

For login purposes we use **Auth Authentication API** and it's React Auth0 SDK library `auth0-react`.

Previously we had to create a new application in [Auth0 Dashboard](https://manage.auth0.com/dashboard/) and configure it accordingly, setting it's Callback and Logout URLs and allowed web origins. I did follow Auth0's [quickstart guide](https://auth0.com/docs/quickstart/spa/react/interactive) and also this short course on Egghead: [Adding Login to React with Auth0](https://egghead.io/lessons/react-adding-login-to-react-with-auth0) and [The Complete Guide to React User Authentication with AUTH0](https://auth0.com/blog/complete-guide-to-react-user-authentication/).

Please, see [Auth0ProviderOptions | @auth0/auth0-react](https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html) for a full list of the provider options.

`AuthorizationProvider` is just a **wrapper** component.

### DragAndDrop

To build the **Drop Zone** we used the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API), following along [Simple drag and drop file upload in React
](https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929) and [How To Use The HTML Drag-And-Drop API In React](https://www.smashingmagazine.com/2020/02/html-drag-drop-api-react/).

When we drop one or more files in the drop zone, they will be added to the `FileList` array in local state. Try to drop some files and check the console. Those files would be later on uploaded to Google Drive.

### UploadButton

This component would call Auth0, get an Acces Token throuhgh `getAccessTokenSilently` and the call Google API with it. I tried with two different React libraries, [React Google Picker](https://github.com/sdoomz/react-google-picker) and [React Drive Uploady](https://github.com/rpldy/drive-uploady) with no success 😢. I think I quite don't get how to pass the Access Token to Google, and haven't found no significative information about it while searching.

## 🛠 Installation

Clone this repo and install it's dependencies:

```bash
# Clone and install commands
git clone
cd repo
npm install

# Run commands
npm start
```

## Stack

- React
- Auth0

## Roadmap and visuals

BLA BLA

## Contribution

## Contact Info

## Aknowledgements

## License

MIT License

# Web Technology module. CW2
# Lecturer Name: Jakhongir Karimov
# Name: Xursand Saidov
# ID: 00017298

# Event Planning web application

### This web application allows users to read, create, update, delete events

To run this project locally you must follow the spets below:

1. Clone this reposotory 
```bash
git clone https://github.com/00017298/event_plan_app.git 
```

2. Install dependecies
```bash
cd 00017298
npm i express express-validator pug body-parser nodemon
```

3. Run the project
```bash
node app.js
```
4. Go to localhost:8888
[link to localhost:8888](https://locall.host/8888/)



### Dependencies
- express.js
- pug.js

### Link to GitHub
[link to github repository](https://github.com/00017298/event_plan_app.git)

### Link to Web app
[Event Planning Application](https://event-plan-app-00017298.onrender.com)







# Project structure
- **data**: A directory that likely contains JSON files with data for the application. There is a file named `Events.json` which may hold event data for the app.
- **public**: This directory is typically used to store static files that are publicly accessible by the client's browser, such as stylesheets, images, and client-side JavaScript. It contains a `styles.css` file, which suggests the application has some custom CSS styling.
- **views**: This directory contains Pug templates for rendering HTML. The files are `create.pug`, `Events.pug`, `home.pug`, `information.pug`, and `layout.pug`. These likely correspond to different pages or components of the web application.
- **.gitignore**: A file used by Git version control to exclude files and directories from being tracked.
- **app.js**: The main application file where the Express app is set up and configured.
- **LICENSE**: A file that specifies the license under which the project is distributed.
- **package-lock.json**: Automatically generated file for any operations where npm modifies either the `node_modules` tree or `package.json`.
- **package.json**: A file that holds various metadata relevant to the project, including dependency information.
- **README.md**: A Markdown file typically used to provide an overview of the project, how to set it up, and how to use it.


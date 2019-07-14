# Assignment
Calculator

# Host with Firebase
## Create Firebase project
[Create Firebase project in Firebase console](https://firebase.google.com/docs/web/setup) and add the project Assignment to it

# Initialize Firebase project
Make sure [node.js](https://nodejs.org/en/) is installed and then run:

```bash
$ npm install -g firebase-tools
$ firebase init    # Generate a firebase.json 
```
Select Hosting as an option when you run 
``` $ firebase init ```

Guided by Firebase, select your project, change public directory to ``` public ```,
configure as single-page app, and DO NOT overwrite ``` index.html```.

# Deploy Firebase project

```bash
$ firebase deploy
```

## Go to URL and check it looks like this:

![alt text](http://url/to/img.png)



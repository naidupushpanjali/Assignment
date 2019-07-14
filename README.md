# [Calculator](https://calculator-a7007.firebaseapp.com) 
 This is a website that helps you with a simple arithmetic calculation like ```+,-,*,/```
 
# To Run this project on your Computer
Follow the below steps

# Host with Firebase
[Create Firebase project in Firebase console](https://firebase.google.com/docs/web/setup)

# Initialize Firebase project
Make sure [node.js](https://nodejs.org/en/) is installed and then run:

```bash
$ npm install -g firebase-tools
$ firbase  login
$ firebase init    # Generate a firebase.json 
```
Select Hosting as an option when you run 
``` $ firebase init ```

Guided by Firebase, select your project, change public directory to ``` public ```,
configure as single-page app, and DO NOT overwrite ``` index.html```.

## Note!
When your public directory is created add the files from ```Calculator``` folder to ```public``` directory folder

# Deploy Firebase project

```bash
$ firebase deploy
```

## Go to URL and check it looks like this:

![Calculator](https://github.com/naidupushpanjali/Assignment/blob/master/Calculator.png)

Clear your cache before running the program or press ```Ctrl+Shift+R``` for hard cache refresh.

# Run Lighthouse

[Get Lighthouse extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) and run lighthouse tool on hosted site

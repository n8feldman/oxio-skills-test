# Project Title

Oxio Sim Tracker

## Running this program

To run this program, download the repository in a .zip file from github, unzip and cd into the new directory. Subsequently run "npm install". Finally, the command "npm start" should run this file on localhost:3000.

## Deployment
This project can be deployed on GitHub pages fairly easily because it simply involves a simple front-end client; no cloud storage, apis, etc. need to be setup. I chose not to because I'm unsure whether this would violate any copyright Oxio holds (I figured it was low risk to leave the repo public without deploying, for the time being).

## Chosen technologies
I chose to use react because React-Table offers a very useful offers a very useful library for, well, creating tables. Seeing as the table is the biggest problem in creating this project, having a solid starting point is critical.

## Present functionality
My biggest priority in building this project was as follows: make at least one successful API request (with input data a user could change), and build a table with the incoming data. I chose to focus on allowing users to change the page number through which they viewed the sample database. Other features, such as those modifying the number of results displayed, can be implemented with very similar logic.

## Missing features
This program remains incomplete, largely due to the two-hour time constraint on implementation. The most important missing feature is the "update" modal which allows the user to turn a SIM card on or off. Other missing features include the "Search" feature which would make an API request based on a given SIM number and all requested features that involve SIM card batches.

Each of these features would be fairly straightforward to implement. Give the user a form to fill out, collect the data in the form, fire off an API request with axios. There simply was not enough time.

## Acknowledgment
Special thanks goes to Param Harrison for building the shell of the table I used as a template for this project: https://github.com/learnwithparam/logrocket-smart-table
# HomeShots - A web app for home aesthetics enthusiasts to share images of beautiful homes
<img src=""><br>
<hr>

## Table of Content
 * [Introduction](#introduction)
 * [Live Site](#live-site)
   + [Backend API repository](#backend-api-repository)
 * [User Experience](#user-experience)
   + [Strategy](#strategy)
     - [Project Goal](#project-goal)
     - [Project Objectives](#project-objectives)
     - [Target Audience](#target-audience)
     - [Establish Branding and Positioning](#establish-branding-and-positioning)
     - [Content Strategy](#content-strategy)
     - [Technology and Platform Selection](#technology-and-platform-selection)
   + [Scope](#scope)
     - [User Story](#user-story)
     - [Simple and intuitive User Experience](#simple-and-intuitive-user-experience)
     - [Relevant content](#relevant-content)
     - [User Story](#user-story)
   + [Structure](#structure)
   + [Skeleton](#skeleton)
   + [Surface](#surface)
     - [Color Scheme](#color-scheme)
     - [Fonts](#fonts)
     - [Visual Effects](#visual-effects)
 * [Agile Methodology](#agile-methodology)
   + [User Story](#user-story)
   + [Sprint ](#sprint)
 * [Features](#features)
   + [Existing Features](#existing-features)


## Overview
HomeShots is a frontend React.js project that runs on Heroku. It aims to provide a platform for Home aesthetics enthusiasts to snap and share beautiful homes<br>

This app allows users to upload photo shots of homes they find interesting. Users can create, edit, add comments and add location details from the frontend once registered & logged in.<br>
**HomeShots- photo sharing website** was developed using Python (Django), HTML, CSS and JavaScript and storing the data in a PostgreSQL database.
<br><br>

## User Experience

### _Strategy_<hr>

#### Project Goal
* Create a website for home aesthetics enthusiasts.<br><br>

#### Project Objectives
* To create a website with a simple and intuitive User Experience.
* To add content that is relevant and helps create a better image of the owner of the website.
* To differentiate between users and staff member accounts.
* To implement fully functional features that will ease the staff members' tasks and upgrade users' experience with the website services.
* To make the website available and functional on every device.<br><br>

#### Target Audience
* Architect
* Engineers
* Developers
* Interior decorators
* Landscape designers and builders<br><br>

#### Establish Branding and Positioning
* To create a distinct brand identity that resonates with the target audience.
* To develop a brand strategy, including visual elements such as color schemes, typography, and imagery.
* Brand guidelines that reflect the aesthetic preferences of the target audience and establish a unique brand identity.<br><br>

#### Content Strategy
* Determine the type of content that will engage and resonate with home aesthetics enthusiasts.
* Plan content categories, formats, and distribution channels. Consider incorporating visual elements, such as high-quality images.
* Content strategy outlining the themes, topics, and formats that will appeal to the target audience.<br><br>

#### Technology and Platform Selection
* Determine the type of content that will engage and resonate with home aesthetics enthusiasts.
* Plan content categories, formats, and distribution channels. Consider incorporating visual elements, such as high-quality images.
* Content strategy outlining the themes, topics, and formats that will appeal to the target audience.<br><br>

### _Scope_

#### User Stories
* As part of the software development process, we will be referring to this User Stories throughout the project.

  |   EPIC                                |ID|                                User Story                                                   |
  | :-------------------------------------|--|:------------------------------------------------------------------------------------------- |
  |**NAVIGATION**                         |  ||
  |                                       |1A| As a user, I can see a navbar or menu so that I can easily navigate through website content |
  |                                       |1B| As a user, I can navigate through website pages quickly so that I can view content seamlessly without page refresh. |    
  |                                       |1C| As a user, I can see relevant information about the website so that I can go to the page of my interest. |
  |**USER REGISTRATION/AUTENTHICATION**   |  || 
  |                                       |2A| As a user, I can sign up for an account on the website so that I can access all the site features. |
  |                                       |2B| As a user, I can sign in so that I can interact with the content on the site. |
  |                                       |2C| As a user, I can authenticate using only email and password so that I can access all the features provided for authenticated users. |
  |                                       |2D| As a signed-in user, I can maintain my signed-in status until I choose to log out so that I ensure my user experience is not compromised. |
  |                                       |2E| As a signed-in user, I can be able to sign out so that I can exit my account and keep it safe. |
  |                                       |2F| As a signed-in user, I can tell if i am signed in or not so that I can sign in if I need to. |
  |**ALL POSTS**                          |  || 
  |                                       |3A| As a user, I can expect the website to have a nice and intuitive design so that I can have a great user experience. |
  |                                       |3B| As a user, I can view all the most recent HomeShots posts, ordered by most recently created first so that I can be up to date with the newest content.|
  |                                       |3C| As a user, I can search for HomeShots posts with keywords so that I can find the posts and user profiles I am most interested in.
  |                                       |3D| As a user, I can click on HomeShots post so that I can view the HomeShots and its details. |
  |                                       |3E| As a user, I can view the number of likes on HomeShots posts so that I can easily see posts that have more like.|
  |                                       |3F| As a user, I can view the number of comments on HomeShots posts so that I can read other users' opinions.|
  |                                       |3G| As a user, I can keep scrolling through HomeShots posts on the site, that are loaded for me automatically so that I can not click on "next page" etc.|
  |**POST**                               |  || 
  |                                       |4A| As a signed-in user, I can create a new HomeShots posts and upload an image so that I can share my shots with other users.|
  |                                       |4B| As a signed-in user, I can edit a HomeShots post, change the image or update the details so that I can improve my posts.|
  |                                       |4C| As a signed-in user, I can delete my HomeShots post so that I can control what posts are displayed in my name. |
  |                                       |4D| As a signed-in user, I can like/unlike HomeShots posts so that I can view my liked HomeShots on a single liked HomeShots page.|
  |                                       |4E| As a signed-in user, I can follow/unfollow other HomeShots so that I can view my followed HomeShots posts on a single feed page.|
  |                                       |4F| As a signed-in user, I can comment on a post so that i can give my opinion on a post and read other users' opinions.|
  |                                       |4G| As a signed-in user, I can delete or edit my previous comments so that I can have only the comments I want to be displayed.|
  |**PROFILE**                            |  || 
  |                                       |5A| As a user, I can view other users profiles so that I can see their posts and learn more about them.|
  |                                       |5B| As a user, I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them. |
  |                                       |5C| As a user, I can see a list of the most followed profiles so that I can see which profiles are popular. |
  |                                       |5D| As a signed-in user, I can follow/unfollow other HomeShots so that I can view my followed HomeShots posts on a single feed page.|
  |                                       |5E| As a signed-in user, I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them. |
  |                                       |5F| As a signed-in user, I can edit my profile so that I can change my profile picture and bio.|
  |                                       |5G| As a signed-in user, I can update my username and password so that I can change my display name and keep my profile secure.|
  |                                       |  || 


#### Simple and intuitive User Experience
* Ensure the navigation menu is visible and functional at every step.
* Ensure every page has a suggestive name that fits its content.
* Ensure the users will get visual feedback when navigating through pages.
* Create a design that matches the project theme and does not confuse the users.

#### Relevant content
* Add information about project name, location and contact data.
* Make a clear and beautiful designed presentation of the menu elements.
* Create a section with the most visited post.
* Create a section with accounts that is most visited.

**Responsiveness:**
* Create a responsive design for desktop, tablet and mobile devices<br><br>

### _Structure_<hr>
The structure of the website is divided into pages but with content depending on authentication and user/staff status <br>
-**Register/Login** pages give the user the possibility to create an account and authenticate for accessing different features.<br>
-**Logout** feature is a modal that helps user exit their current account;<br>


### _Skeleton_

### _Surface_

## Agile Methodology
### User Story


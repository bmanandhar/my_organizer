## My Organizer

<p>This web application is being created with the motivation of dfferent apps for reading news, to know weather condition and reading inspiring quotes from different famous people.</p>

<p>I had chosen this project as a requirement to complete the Web Developer Immersive programme at General Assembly, San Francisco that lasted from 10/29/2018 thru 02/05/2019</p>

### Features

<p>Basically, it consists of <u>HTML</U>, <u>CSS</u>, <u>Bootstrap library</u>, and <u>javaScript</u> on the front end part. <u>JQuery</u> library has widely been used in dealing with the data pulled from different API libraries.</p>

<p>It uses <u>NodeJS</u> as runtime and <u>ExpressJS</u> as the framework. In addition, <u>Jsonwebtoken</u>, <u>Body-parser</u>, and</u><u> bcrypt</u> modules are used on its back end.</p>

### Sources of data
<p>Mainly, three different API libraries are currently in use that provides data for:</p>

1. Current weather of the city user is curently in.<br>
[https://api.openweathermap.org]
1. Randomly generated inspiring quotes delivered by famous persons of the world.<br>
[https://forismatic.com/en/api/]
1. Current world news from US bublished by different US sources.
[https://newsapi.org/]
1. Geo location of the city where  the user recieves live internet service from. Iy includes zip code and IP address as well.<br>
[https://ipinfo.io/json] 

### User Story
__Sign-in__
<p>User is promted to a sign-in and sign-up page. A new user then can sign up by entering a valid email address and a password.</P>
<p>The returning user can log in and use the web application.</p>

__Home Page__
<p>In opening the home page, the user will be greeted with inspiring quotes with the author name. It will show up 'Anonymous' if the author name is unkonwn. The quote window has three different buttons, one to save the quote and author name in the data base, one for posting the quote direct to Face book's post-section, the third button allows user to post the same direct to Tweeter.</p>
<p>The saved data(quote) can be read in the future, or may be deleted if user wants.</p>

__Weather__
<p>Home page also provides the curent weather condition of the city. It includes current, minimum and maximum temperatures, atmosheric pressure, wind speed with direction, and local time of the city.</p>

__News__
Navigating thru the Nav-bar, user can access to the news page, named 'News Room'. This page provides the latest world news that have been published by different news media of US. 

__Log Out__
Using the logout button, user can get out of the website with the quote saved in the data base for the future.
Hayward

### Images 
<p>Here are images of web application as displayed on the screen.</p>
* [Random](public/images/quote.png)
* [Weather](public/images/weather.png)
* [News](public/images/news.png)

## Future Feature

<p>Weather app may be enhanced to get weather info of any city of the world.</p>

<p>The news API used in this application may be manipulated for displaying news on the basis of catagory and country as required.</p>


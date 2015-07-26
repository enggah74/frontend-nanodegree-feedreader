# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.

# My resources

1. https://github.com/udacity/fend-office-hours/tree/master/Javascript%20Testing/P6%20Overview
2. http://kroltech.com/2013/11/20/javascript-tdd-with-jasmine-and-karma/
3. http://jasmine.github.io/2.2/introduction.html
4. http://karma-runner.github.io/0.12/intro/how-it-works.html
6. http://karma-runner.github.io/0.12/config/configuration-file.html
7. https://developers.google.com/feed/v1/devguide
8. http://tosbourn.com/using-loops-in-jasmine/
9. http://codepen.io/jweden/pen/Irmil
10. http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html
11. https://github.com/bhaskarsai/FeedReader/blob/master/jasmine/spec/feedreader.js
12. https://github.com/akonanga/frontend-nanodegree-feedreader/blob/master/jasmine/spec/feedreader.js

# Info

* The link to the page is: http://enggah74.github.io/frontend-nanodegree-feedreader
* There are a total of 12 tests performed.

# Steps to follow to test feedreader
1. Go to http://enggah74.github.io/frontend-nanodegree-feedreader to display the page and test using Jasmine test cases.
2. The page will quickly display the Udacity Blog in a second and then displays the artice feed for the CSS tricks which is the 2nd URL.
3. Click the hamburger menu on the top left corner. The application slides out the list of URLs to select to the right.
4. Click the hamburger menu on the top left corner again. The application hides the list of URLs.
5. Click the 1st link (Front End Development is Development). The application replaces the list of articles for the CSS Tricks with the article on the same page.
6. Hit the back button to go back to the list of articles for CSS Tricks.first one on the menu - Udacity Blog.
7. Scroll to the bottom of the page. It shows the results of the run of the feedreader.js which will test the following test cases:
	5.1 Test the RSS SFeeds
	  	5.1.1 Test that the objects for the allFeeds are defined
	  	5.1.2 Test that there is data for the allFeeds objects
	 	5.1.3 Iterate through each of the allFeed objects and test that each URL is defined and is not empty
	 	5.1.4 Iterate through each of the allFeed objects and test that each name is defined and is not empty
	5.2 Test the Menu
		5.2.1 Test that the menu of all the URLs is hidden when the page initially loads. A hamburger menu shows on the top left corner of the page instead.
		5.2.2 Test that the menu displays when the hamburger menu is clicked.
		5.2.3 Test that the menu is replaced with the hamburger menu is clicked again.
	5.3 Test the Initial load of articles
		5.3.1 To test this, the spec for the New Feed Selection should be commented out. When the page is initially loaded, the list of articles for the Udacity Blog displays. Test that there is at least 1 article displayed.
	5.4 Test the New Feed Selection
		5.4.1 Uncomment the last spec in step5.3.1. Load the page again. The list of articles will be different from step5.3.1.
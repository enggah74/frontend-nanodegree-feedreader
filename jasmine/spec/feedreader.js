/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /*** Define this function to accept the allFeeds URL property
             during iteration and test
        ***/
        function test_URLs (URL) {
            it('should be defined and populated', function() {
                expect(URL).toBeDefined();
                expect(URL).not.toBeNull();
            });
        }

        /*** Iterate through the allFeeds to execute the URL property
             to the function and test
        ***/
        for (var x = 0; x < allFeeds.length; x++) {
            test_URLs(allFeeds[x].url);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        /*** Define this function to accept the allFeeds name property
             during iteration and test
        ***/
        function test_Names (name) {
            it('should be defined', function() {
                expect(name).toBeDefined();
                expect(name).not.toBeNull();
            });
        }

        /*** Iterate through the allFeeds to execute the name property
             to the function and test
        ***/
        for (var x = 0; x < allFeeds.length; x++) {
            test_Names(allFeeds[x].name);
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        /*** During initial load the class of the body is "menu-hidden"
             in order to hide the menu which contains the
             4 different URLs for RSS feeds
        ***/
        it('should be hidden by default', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         /*** Click the hamburger icon and the menu will display the
             4 different URLs for RSS feeds
        ***/
        it('should be visible when menu icon is clicked', function() {
            /*** Click the menu hamburger and the default class of
                 menu-hidden is removed and the menu of different feeds displays
            ***/
            $(".menu-icon-link").trigger('click');
            expect($("body").hasClass('menu-hidden')).toBe(false);

            /*** Click the menu hamburger again and the default class of
                 menu-hidden is toggled and the menu of different feeds disappears
            ***/
            $(".menu-icon-link").trigger('click');
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should have at least a single entry', function(done) {
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
        });

        // ...it was an event handler call -- or at least,
        // a non-falsey argument of some kind was passed in
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var currentContent;
        var newContent;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done) {
            currentContent = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        it('loads content different from initial load', function(done) {
            newContent = $('.feed').html();
            expect(currentContent).not.toBe(newContent);
            done();
        });

    });

}());

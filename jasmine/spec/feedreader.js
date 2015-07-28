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
            expect(allFeeds).not.toBe('');
        });

        /*** Define this function to accept the allFeeds URL property
             during iteration and test
        ***/
        function test_URLs (URL) {
            it('should be defined and populated', function() {
                expect(URL).toBeDefined();
                expect(URL).not.toBeNull();
                expect(URL).not.toBe('');
            });
        }

        /*** Iterate through the allFeeds to execute the URL property
             to the function and test
        ***/
        for (var x = 0; x < allFeeds.length; x++) {
            test_URLs(allFeeds[x].url);
        }

        /*** Define this function to accept the allFeeds name property
             during iteration and test
        ***/
        function test_Names (name) {
            it('should be defined', function() {
                expect(name).toBeDefined();
                expect(name).not.toBeNull();
                expect(name).not.toBe('');
            });
        }

        /*** Iterate through the allFeeds to execute the name property
             to the function and test
        ***/
        for (var x = 0; x < allFeeds.length; x++) {
            test_Names(allFeeds[x].name);
        }
    });


    /*** Check the menu to make sure it is hidden during initial load
         and toggles between visible and hidden each time it gets clicked.
    ***/
    describe('The menu', function() {

        /*** During initial load the class of the body is "menu-hidden"
             in order to hide the menu which contains the
             4 different URLs for RSS feeds
        ***/
        it('should be hidden by default', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });

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

    /*** Test Suite to test the initial load ***/
    describe('Initial Entries', function() {
        /*** Before test, load the Udacity Blog feed. This type of code will ensure
             that loadFeed finishes first before the execution of the test case.
        ***/
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should have at least a single entry', function(done) {
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
        });

    });

    /*** Test Suite to randonly load a feed and compare against the Udacity Blog feed.
         Save the content of both the Udacity Blog feed and the random feed for
         comparison in the test case.
    ***/
    describe('New Feed Selection', function() {
        var currentContent;
        var newContent;

        /*** Load Udacity Blog first to save the content ***/
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                currentContent = $('.feed').html();
                done();
            });
        });
        /*** Load any feed (1-3) as the new content. Compare the previous content
             with the newly loaded feed and compare its contents.
        ***/
        it('loads content different from initial load', function(done) {
            var feedNum = Math.floor(Math.random() * 3) + 1;
            loadFeed(feedNum, function() {
                newContent = $('.feed').html();
                expect(currentContent).not.toBe(newContent);
                done();
            });
        });

    });

}());

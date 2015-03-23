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
        it('all feeds URLs are defined', function(){
            allFeeds.forEach(function(feed){
                //checking that the URL is defined
                expect(feed.url).toBeDefined();
            });
        });
        it('all feeds URLs are not empty', function(){
            allFeeds.forEach(function(feed){
                //checking that URL is not empty
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feeds names are defined', function(){
            allFeeds.forEach(function(feed){
                //checking that the feed name is defined
                expect(feed.name).toBeDefined();
            });
        });
        it('all feeds names are not empty', function(){
            allFeeds.forEach(function(feed){
                //checking that feed name is not empty
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
    /* TODO: Write a new test suite named "The menu" */
        
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', function(){
            var body = $('body');
            //checking that bodyhas class "menu-hidden" - that is that menu is hidden by default
            expect(body.hasClass("menu-hidden")).toBe(true);

        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility when the menu icon is clicked', function(){
            var menuicon = $('.menu-icon-link');
            var body = $('body');
            menuicon.click();
            //checking that menu shows up after a click
            expect(body.hasClass("menu-hidden")).toBe(false);
            menuicon.click();
            //checking that menu hides when clicked again
            expect(body.hasClass("menu-hidden")).toBe(true);

        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
    });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('there is at least one feed', function(done){
        var entry = $('.feed a').children('.entry');
        // checking if the feed has more than 0 entries
        expect(entry.length).toBeGreaterThan(0);
          done();
        });

    });
        

    /* TODO: Write a new test suite named "New Feed Selection"
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        describe('New Feed Selection', function(){
        var entry,
            entryAfterchange;

        beforeEach(function(done){
            //saving text of te first entry into var entry
            entry = $('.entry')[0].innerText;
            //loading second feed
            loadFeed(1, done);
    });
    
    it('the content changes when a new feed is loaded', function(done){
        //saving text of te first entry into var entryAfterchange
        entryAfterchange = $('.entry')[0].innerText;
        // chacking if the content has changed after loading new feed (comapring entry and entryAfterchange)
        expect(entry).not.toBe(entryAfterchange);
          done();
        });

    afterEach(function(done){
        //loading back the first feed
            loadFeed(0, done);
    });
    });
}());
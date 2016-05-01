'use strict';

var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().withCapabilities(
    WebDriver.Capabilities.chrome()
).build();

var By = WebDriver.By;
var until = WebDriver.until;
var expect = require('chai').expect;


describe('asynchrony.com', function() {
  before(function(done) {
    this.timeout(50000);
    driver.get('http://www.asynchrony.com').then(done());
  });


  describe('Check homepage', function() {
    it('should see the correct title', function(done) {
      driver.getTitle().then(function(title) {
        expect(title).to.have.string('Asynchrony Labs').then(done());
      });
    });
  });



  after(function(done) {
  driver.quit();
  done();
});
});

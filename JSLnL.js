
  'use strict';

  var WebDriver = require('selenium-webdriver');
  var driver = new WebDriver.Builder().withCapabilities(
      WebDriver.Capabilities.chrome()
  ).build();

  var By = WebDriver.By;
  var until = WebDriver.until;
  var expect = require('chai').expect;
  var should = require('chai').should;

  describe('asynchrony.com', function() {
    before(function(done) {
      this.timeout(30000);
      driver.get('http://www.asynchrony.com').then(done);
    });

  describe('Check homepage', function() {
      it('should see the correct title', function(done) {
        driver.getTitle().then(function(title) {
          expect(title).to.have.contain('Asynchrony Labs');
          done();
        });
      });
    });

    describe('Check for correct number of menu bar items', function(){
      it('should return correct number of menu bar items', function(done){
        driver.findElements(By.css('div#primary-nav ul#primary-menu  li.menu-item-type-post_type')).then(function(menuItems){
          expect(menuItems.length).is.equal(6);
          done();
        });
      });


      it('should return at least min number of menu items', function(done){
        driver.findElements(By.css('div#primary-nav ul#primary-menu > li.menu-item')).then(function(menuItems){
          expect(menuItems.length).is.above(6);
          done();
        });
      });
    });

    after(function(done) {
    driver.quit();
    done();
  });
  });

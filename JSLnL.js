// Dependencies
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('asynchrony.com', function() {
  var driver;

  before(function(done) {
    this.timeout(50000);
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    driver.get('http://localhost/contracts').then(done);
  });

  describe('Check homepage', function() {
    it('should see the correct title', function(done) {
      driver.getTitle().then(function(title) {
        expect(title).to.have.string('Contract Tool');
        done();
      });
    });
  });


  describe('create new contract', function() {
    it('should not have new contract modal open when page loads', function(done) {
      driver.findElement(By.id('newContractTemplate')).then(function(newContract){
        assert.isOk(newContract);
        done();
      });
    });

    it('should open new contract modal', function(done){
      driver.findElement(By.id('new-contract')).click().then(function(newContract){
        driver.findElement(By.id('newContractTemplate')).then(function(newContract){
          assert.isOk(newContract);
          done();
        });
      });
    });
  });



  after(function(done) {
    driver.quit();
    done();
  });
});

var should = require("should");
var expect = require("expect");
var assert = require('chai').assert;
var Greeting = function(greeting){
  this.greeting = greeting
};

describe('Check if returns correct greeting', function(){
  it('should return with the correct greeting', function(){
    var gutenTag = new Greeting('Guten Tag!');
    console.log(gutenTag.greeting, '@@@@@@@');
    gutenTag.greeting.should.equal('Guten Tag!');
    console.log('greeting');
  });
});

  describe('check if greeting length is correct', function(){
  it('should return the correct length of greeting', function(){
    var gutenTag = new Greeting('Guten Tag!');
    console.log(gutenTag.greeting, "!!!!!!!!");
    assert.equal(gutenTag.greeting, 'Guten Tag!');
    assert.equal(gutenTag.greeting.length, 10);
    // expect(gutenTag.greeting).to.equal(4);
  });
});

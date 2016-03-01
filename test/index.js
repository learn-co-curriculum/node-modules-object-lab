var expect = require('chai').expect
var path = require('path')

describe('main.js', function () {
  it('must export email of the second customer', function(){
    var email = require(path.join(__dirname, '../main'))
    expect(email).to.equal('scott.wilkerson@hopeli.me')
  })
})

var expect = chai.expect;

let exerciseName = `hasQ`
describe(`${exerciseName}()`, function() {
  it('should be a function', function() {
    return expect(exerciseName).to.be.a('function');
  });

  describe('BASIC: function should handle lower case letters', function(){
    it(`hasQ('my mother enjoys quilting.') should return TRUE`, function(){
      let output = hasQ('my mother enjoys quilting.')
      return expect(output).to.equal(true)
    })
    
    it(`hasQ('I went to a quarry to pick up some stone slabs') should return TRUE`, function(){
      let output = hasQ('I went to a quarry to pick up some stone slabs.')
      return expect(output).to.equal(true)
    })

    it(`hasQ('Jen works quickly') should return TRUE`, function(){
      let output = hasQ('Jen works quickly')
      return expect(output).to.equal(true)
    })

    it(`hasQ('You are not wearing any socks') should return TRUE`, function(){
      let output = hasQ('You are not wearing any socks')
      return expect(output).to.equal(false)
    })

    it('hasQ("My brain is made of cheese and my knees are jelly") should RETURN TRUE', function(){
      let output = hasQ("My brain is made of cheese and my knees are jelly")
      return expect(output).to.equal(false)
    })
  })

  describe('ENHANCED: function should handle upper case letter', function(){
    it('hasQ("My brain is made of cheese and my knees are jelly") should return TRUE', function(){
      let output = hasQ("I want Quincy to stop yelling in my ear.")
      return expect(output).to.equal(true)
    }) 
    it('hasQ("Quit everything and move to Mexico")', function(){
      let output = hasQ("Quit everything and move to Mexico")
      return expect(output).to.equal(true)
    }) 
  })

});
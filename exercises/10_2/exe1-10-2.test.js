// const uppercase = require('./exe1-10-2');

const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }
  
test('text must be with uppercase',(done) => {
   uppercase('anderson',(test) => {
       expect(test).toBe('ANDERSON');
       done();
   });
});
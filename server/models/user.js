let {mongoose}  = require('../db/mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
//
// let newUser = new User({email: 'andrew@example.com  '});
//
// newUser.save().then((doc)=>{
//   console.log('Saved todo2 :', doc);
// }, (e) => {
//   console.log(e);
// });

module.exports = {User};
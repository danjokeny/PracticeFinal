var ValidWoo = ['boo', 'zoo', 'moo'];
var FooSchema = new FooSchema({
  foo: {type: String},
  woo: { type: String, enum: ValidWoo },
});

module.exports = Mongoose.model('Foo', FooSchema);
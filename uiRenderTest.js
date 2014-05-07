Books = new Meteor.Collection('books');
if (Books.find().count() === 0)
  Books.insert({
    "_id" : "njynTFMaHLjzgBsDM",
    "name" : "My Book 1"
});

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to uiRenderTest.";
  };

  Template.hello.events({
    'click input': function (e, tmpl) {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined') {
        console.log("You pressed the button");
        tmpl.findAll(".wrapper").html('');
        UI.insert(UI.renderWithData(Template.books, Books.findOne({_id: "njynTFMaHLjzgBsDM"})), tmpl.find(".wrapper"));
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

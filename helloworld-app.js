A.app({
  appName: "Hello World",
  menuItems: [
    {
      name: "Hello World",
      entityTypeId: "HelloWorld",
    }
  ],
  entities: function(Fields){
    return: {
      HelloWorld: {
        fields: {
          foo: Fields.text("Foo"),
          bar: Fields.text("Bar")
        }
      }
    }
  }
});

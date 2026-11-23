__d(
  "WAWebGalleryContactUtils",
  [
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactModel",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebContactCollectionUtils").getFilteredContacts(
        o("WAWebContactCollection").ContactCollection,
        {},
      );
      if (e.length === 0) {
        var t = o("WAWebWidFactory").createUserWidOrThrow("15551234567@c.us"),
          n = new (r("WAWebContactModel"))({ id: t, name: "Showroom Contact" });
        return (o("WAWebContactCollection").ContactCollection.add(n), n);
      }
      var a = e[Math.floor(Math.random() * e.length)];
      return r("nullthrows")(a, "No contacts available");
    }
    l.getRandomContact = e;
  },
  98,
);

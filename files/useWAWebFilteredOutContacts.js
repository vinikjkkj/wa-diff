__d(
  "useWAWebFilteredOutContacts",
  ["WAWebOutContactCollection", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      return o(
        "WAWebOutContactCollection",
      ).OutContactCollection.getFilteredContacts();
    }
    function c() {
      var e = s(function () {
          return u();
        }),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebOutContactCollection").OutContactCollection,
          "add change remove reset",
          function () {
            n(u());
          },
        ),
        t
      );
    }
    l.default = c;
  },
  98,
);

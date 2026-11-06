__d(
  "WAWebParseProfilePills",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map([
      ["CHAT", "CHAT"],
      ["SHOP", "SHOP"],
      ["BOOK_APPOINTMENT", "BOOK_APPOINTMENT"],
      ["OFFERS", "OFFERS"],
      ["BESTSELLERS", "BESTSELLERS"],
      ["MENU", "MENU"],
      ["ABOUT", "ABOUT"],
    ]);
    function l(t) {
      var n = t.maybeChild("pills");
      if (n == null) return null;
      var r = new Set();
      return (
        n.forEachChildWithTag("pill", function (t) {
          var n =
            t.hasContent() && !t.hasChildren()
              ? e.get(t.contentString())
              : null;
          n != null && r.add(n);
        }),
        Array.from(r)
      );
    }
    i.parseProfilePills = l;
  },
  66,
);

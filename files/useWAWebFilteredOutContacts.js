__d(
  "useWAWebFilteredOutContacts",
  [
    "WAWebOutContactCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      return o(
        "WAWebOutContactCollection",
      ).OutContactCollection.getFilteredContacts();
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t = s(d),
        n = t[0],
        r = t[1],
        a;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              r(u());
            }),
            (e[0] = a))
          : (a = e[0]),
        o("useWAWebListener").useListener(
          o("WAWebOutContactCollection").OutContactCollection,
          "add change remove reset",
          a,
        ),
        n
      );
    }
    function d() {
      return u();
    }
    l.default = c;
  },
  98,
);

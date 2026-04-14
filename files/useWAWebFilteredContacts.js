__d(
  "useWAWebFilteredContacts",
  ["WAWebContactCollection", "react", "shallowArrayEqual", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      return (
        o("WAWebContactCollection").ContactCollection.ensureSorted(),
        o("WAWebContactCollection").ContactCollection.getFilteredContacts(
          e != null ? e : {},
        )
      );
    }
    function c(e) {
      var t = s(function () {
          return u(e);
        }),
        n = t[0],
        a = t[1],
        i = s(e),
        l = i[0],
        c = i[1];
      if (e !== l) {
        var d = u(e);
        r("shallowArrayEqual")(n, d) || (c(e), a(d));
      }
      return (
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "add remove reset change",
          function () {
            a(u(e));
          },
        ),
        n
      );
    }
    l.default = c;
  },
  98,
);

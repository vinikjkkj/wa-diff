__d(
  "useWAWebFilteredContacts",
  [
    "WAWebContactCollection",
    "react",
    "react-compiler-runtime",
    "shallowArrayEqual",
    "useWAWebListener",
  ],
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
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function () {
            return u(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = s(n),
        i = a[0],
        l = a[1],
        c = s(e),
        d = c[0],
        m = c[1];
      if (e !== d) {
        var p = u(e);
        r("shallowArrayEqual")(i, p) || (m(e), l(p));
      }
      var _;
      return (
        t[2] !== e
          ? ((_ = function () {
              l(u(e));
            }),
            (t[2] = e),
            (t[3] = _))
          : (_ = t[3]),
        o("useWAWebListener").useListener(
          o("WAWebContactCollection").ContactCollection,
          "add remove reset change",
          _,
        ),
        i
      );
    }
    l.default = c;
  },
  98,
);

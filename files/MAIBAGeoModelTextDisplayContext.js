__d(
  "MAIBAGeoModelTextDisplayContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useLayoutEffect,
      p = c(null);
    function _(e) {
      var t = e.children,
        n = e.text,
        r = d(p);
      return (
        m(
          function () {
            n.trim().length > 0 && (r == null || r());
          },
          [r, n],
        ),
        t
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.MAIBAGeoModelTextDisplayContext = p),
      (l.MAIBAGeoModelTextContent = _));
  },
  98,
);

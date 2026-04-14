__d(
  "WAWebBaseVideoNewsletterContextProvider",
  ["WAWebNewsletterVideoPlayLoggingContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m(e) {
      var t = e.children,
        n = d(1),
        o = n[0],
        a = n[1],
        i = c(
          function () {
            return { finishCount: o, setFinishCount: a };
          },
          [o, a],
        );
      return s.jsx(r("WAWebNewsletterVideoPlayLoggingContext").Provider, {
        value: i,
        children: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

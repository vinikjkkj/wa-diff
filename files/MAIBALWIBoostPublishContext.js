__d(
  "MAIBALWIBoostPublishContext",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useState,
      p = { isPublishInFlight: !1, setIsPublishInFlight: r("emptyFunction") },
      _ = s.createContext(p);
    function f(e) {
      var t = e.children,
        n = m(!1),
        r = n[0],
        o = n[1],
        a = d(
          function () {
            return { isPublishInFlight: r, setIsPublishInFlight: o };
          },
          [r, o],
        );
      return s.jsx(_.Provider, { value: a, children: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return c(_);
    }
    ((l.MAIBALWIBoostPublishContextProvider = f),
      (l.useMAIBALWIBoostPublishContext = g));
  },
  98,
);

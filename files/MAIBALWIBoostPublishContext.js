__d(
  "MAIBALWIBoostPublishContext",
  ["emptyFunction", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = m(!1),
        a = r[0],
        i = r[1],
        l;
      t[0] !== a
        ? ((l = { isPublishInFlight: a, setIsPublishInFlight: i }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      return (
        t[2] !== n || t[3] !== u
          ? ((c = s.jsx(_.Provider, { value: u, children: n })),
            (t[2] = n),
            (t[3] = u),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    function g() {
      return c(_);
    }
    ((l.MAIBALWIBoostPublishContextProvider = f),
      (l.useMAIBALWIBoostPublishContext = g));
  },
  98,
);

__d(
  "MAIBAAccountReviewContext",
  ["emptyFunction", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useState,
      p = {
        accountReviewStatus: null,
        isAccountReviewInFlight: !1,
        setAccountReviewStatus: r("emptyFunction"),
      },
      _ = s.createContext(p);
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = m(null),
        a = r[0],
        i = r[1],
        l = a === "IN_REVIEW",
        u;
      t[0] !== a || t[1] !== l
        ? ((u = {
            accountReviewStatus: a,
            isAccountReviewInFlight: l,
            setAccountReviewStatus: i,
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        d;
      return (
        t[3] !== n || t[4] !== c
          ? ((d = s.jsx(_.Provider, { value: c, children: n })),
            (t[3] = n),
            (t[4] = c),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function g() {
      return c(_);
    }
    ((l.MAIBAAccountReviewContextProvider = f),
      (l.useMAIBAAccountReviewContext = g));
  },
  98,
);

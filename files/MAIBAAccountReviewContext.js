__d(
  "MAIBAAccountReviewContext",
  ["emptyFunction", "react"],
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
      var t = e.children,
        n = m(null),
        r = n[0],
        o = n[1],
        a = d(
          function () {
            var e = r === "IN_REVIEW";
            return {
              accountReviewStatus: r,
              isAccountReviewInFlight: e,
              setAccountReviewStatus: o,
            };
          },
          [r, o],
        );
      return s.jsx(_.Provider, { value: a, children: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return c(_);
    }
    ((l.MAIBAAccountReviewContextProvider = f),
      (l.useMAIBAAccountReviewContext = g));
  },
  98,
);

__d(
  "CometDOMOnlyBoundary.react",
  [
    "CometPlaceholder.react",
    "CometSSRSuspendOnServer.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        a = e.fallback,
        l;
      t[0] !== n
        ? ((l = s.jsx(r("CometSSRSuspendOnServer.react"), { children: n })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== a || t[3] !== l
          ? ((u = s.jsx(r("CometPlaceholder.react"), {
              fallback: a,
              name: i.id,
              children: l,
            })),
            (t[2] = a),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);

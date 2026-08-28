__d(
  "CometInternalTypeaheadEmptyFetchProvider",
  [
    "CometInternalTypeaheadEmptyFetchContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        a = e.isLoading,
        i = e.source,
        l = d(!0),
        u = l[0],
        m = l[1],
        p,
        _;
      (t[0] !== a
        ? ((p = function () {
            a && m(!1);
          }),
          (_ = [a]),
          (t[0] = a),
          (t[1] = p),
          (t[2] = _))
        : ((p = t[1]), (_ = t[2])),
        c(p, _));
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["all", "network"]), (t[3] = f))
        : (f = t[3]);
      var g = f.includes(i),
        h = !((g && u) || a),
        y;
      return (
        t[4] !== n || t[5] !== h
          ? ((y = s.jsx(r("CometInternalTypeaheadEmptyFetchContext").Provider, {
              value: h,
              children: n,
            })),
            (t[4] = n),
            (t[5] = h),
            (t[6] = y))
          : (y = t[6]),
        y
      );
    }
    l.default = m;
  },
  98,
);

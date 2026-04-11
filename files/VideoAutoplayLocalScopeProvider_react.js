__d(
  "VideoAutoplayLocalScopeProvider.react",
  ["VideoPlayerAutoplayContexts", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.autoplayLocalRules,
        r = e.children,
        a = e.customAutoplaySelectionFunc,
        i = e.disableScrollBeforePlayWhenOffscreen,
        l = e.noPauseOnBlurOrFocus,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("VideoPlayerAutoplayContexts").makeAutoplayScopeID()),
          (t[0] = u))
        : (u = t[0]);
      var c = u,
        d;
      t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l
        ? ((d = {
            autoplayLocalRules: n,
            autoplayScopeID: c,
            customAutoplaySelectionFunc: a,
            disableScrollBeforePlayWhenOffscreen: i,
            noPauseOnBlurOrFocus: l,
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      return (
        t[6] !== m || t[7] !== r
          ? ((p = s.jsx(
              o("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext
                .Provider,
              { value: m, children: r },
            )),
            (t[6] = m),
            (t[7] = r),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  98,
);

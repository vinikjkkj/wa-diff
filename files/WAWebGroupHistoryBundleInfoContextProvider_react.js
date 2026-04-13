__d(
  "WAWebGroupHistoryBundleInfoContextProvider.react",
  ["WAWebGroupHistoryBundleInfoContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = new Set()), (t[0] = r))
        : (r = t[0]);
      var a = d(r),
        i = a[0],
        l = a[1],
        u;
      t[1] !== i
        ? ((u = Array.from(i).at(-1)), (t[1] = i), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== u || t[4] !== i
        ? ((c = {
            visibleGroupHistoryBundleSenders: i,
            setVisibleGroupHistoryBundleSenders: l,
            earliestVisibleBundleSender: u,
          }),
          (t[3] = u),
          (t[4] = i),
          (t[5] = c))
        : (c = t[5]);
      var m = c,
        p;
      return (
        t[6] !== n || t[7] !== m
          ? ((p = s.jsx(
              o("WAWebGroupHistoryBundleInfoContext")
                .WAWebGroupHistoryBundleInfoContext,
              { value: m, children: n },
            )),
            (t[6] = n),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = m;
  },
  98,
);

__d(
  "WAWebGroupHistoryBundleInfoContextProvider.react",
  ["WAWebGroupHistoryBundleInfoContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m(e) {
      var t = e.children,
        n = d(new Set()),
        r = n[0],
        a = n[1],
        i = c(
          function () {
            return {
              visibleGroupHistoryBundleSenders: r,
              setVisibleGroupHistoryBundleSenders: a,
              earliestVisibleBundleSender: Array.from(r).at(-1),
            };
          },
          [r],
        );
      return s.jsx(
        o("WAWebGroupHistoryBundleInfoContext")
          .WAWebGroupHistoryBundleInfoContext,
        { value: i, children: t },
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

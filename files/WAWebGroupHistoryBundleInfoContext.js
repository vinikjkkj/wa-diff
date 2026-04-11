__d(
  "WAWebGroupHistoryBundleInfoContext",
  ["WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext,
      u = s({
        visibleGroupHistoryBundleSenders: new Set(),
        setVisibleGroupHistoryBundleSenders: r("WAWebNoop"),
        earliestVisibleBundleSender: null,
      });
    l.WAWebGroupHistoryBundleInfoContext = u;
  },
  98,
);

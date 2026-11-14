__d(
  "WAWebStatusMediaFit",
  ["WAWebStatusGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 0.6329113924050633;
    function s(t, n) {
      return o("WAWebStatusGatingUtils").isStatusViewerRefreshM1Enabled() &&
        t / n < e
        ? "cover"
        : "contain";
    }
    l.getStatusMediaFit = s;
  },
  98,
);

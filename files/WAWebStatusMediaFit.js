__d(
  "WAWebStatusMediaFit",
  ["WAWebStatusGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 0.6329113924050633,
      s = 0.2,
      u = e / (1 - s);
    function c(e, t) {
      return o("WAWebStatusGatingUtils").isStatusViewerRefreshM1Enabled() &&
        e / t < u
        ? "cover"
        : "contain";
    }
    l.getStatusMediaFit = c;
  },
  98,
);

__d(
  "WAWebStatusMediaFit",
  ["WAWebStatusGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 0.579746835443038,
      s = 0.85;
    function u(t, n) {
      var r = t / n,
        a = Math.min(r / e, e / r);
      return a > s &&
        o("WAWebStatusGatingUtils").isStatusViewerFramedMediaEnabled()
        ? "cover"
        : "contain";
    }
    l.getStatusMediaFit = u;
  },
  98,
);

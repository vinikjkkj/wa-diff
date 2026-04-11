__d(
  "WAWebJSHaltDetector",
  ["WAWebBaseJSHaltDetector"],
  function (t, n, r, o, a, i, l) {
    var e = 3e3,
      s = 1e4,
      u = new (o("WAWebBaseJSHaltDetector").BaseJsHaltDetector)(s, e);
    (u.startDetection(), (l.DEFAULT_THRESHOLD = e), (l.jsHaltDetector = u));
  },
  98,
);

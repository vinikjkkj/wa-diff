__d(
  "WAWebWamEnumFormatter",
  ["WAWebWamCodegenWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        !(t instanceof o("WAWebWamCodegenWamEvent").WamEvent) ||
        t.$rawProps == null
      )
        return e;
      var n = {};
      for (var r in e) {
        var a = e[r];
        if (((n[r] = a), typeof a == "number")) {
          var i = t.resolveEnumValue(r, a);
          typeof i == "string" &&
            (n[r] = String(a) + " (" + i.toUpperCase() + ")");
        }
      }
      return n;
    }
    l.formatWamEventForLogging = e;
  },
  98,
);

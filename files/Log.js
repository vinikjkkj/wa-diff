__d(
  "Log",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = -1,
      l = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 },
      s = function (n, r, o) {
        for (
          var t = arguments.length, a = new Array(t > 3 ? t - 3 : 0), i = 3;
          i < t;
          i++
        )
          a[i - 3] = arguments[i];
        var l = 0,
          s = o.replace(/%s/g, function () {
            return String(a[l++]);
          }),
          u = window.console;
        u && e >= r && u[n in u ? n : "log"](s);
      };
    function u(t) {
      e = t;
    }
    var c = s.bind(null, "debug", l.DEBUG),
      d = s.bind(null, "info", l.INFO),
      m = s.bind(null, "warn", l.WARNING),
      p = s.bind(null, "error", l.ERROR);
    ((i.Level = l),
      (i.log = s),
      (i.setLevel = u),
      (i.debug = c),
      (i.info = d),
      (i.warn = m),
      (i.error = p));
  },
  66,
);

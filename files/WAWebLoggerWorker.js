__d(
  "WAWebLoggerWorker",
  ["WATagsLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      r("gkx")("5943") ||
        (r("gkx")("26258") && !r("gkx")("26259")) ||
        (e = console).log.apply(e, arguments);
    }
    var s = {
      count: function (n, r, o) {
        e(o.logString);
      },
      info: function (n, r, o) {
        e(o.logString);
      },
      debug: function (n, r, o) {
        e(o.logString);
      },
      logRestricted: function (n, r, o) {
        e(o.logString);
      },
      error: function (n, r, o, a) {
        e(a.logString);
      },
      warn: function (n, r, o) {
        e(o.logString);
      },
      devConsole: function (n, r) {
        for (
          var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), a = 2;
          a < t;
          a++
        )
          o[a - 2] = arguments[a];
        return e.apply(void 0, o);
      },
    };
    function u() {
      o("WATagsLogger").initializeWaLogger(s);
    }
    l.initializeWAWebLogger = u;
  },
  98,
);

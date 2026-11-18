__d(
  "WAWebLoggerWorker",
  ["WATagsLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3;
    function s(t) {
      e = t;
    }
    var u = {
      count: function (t, n, r) {
        d(2, r.logString);
      },
      info: function (t, n, r) {
        d(2, r.logString);
      },
      debug: function (t, n, r) {
        d(1, r.logString);
      },
      logRestricted: function (t, n, r) {
        d(1, r.logString);
      },
      error: function (t, n, r, o) {
        d(4, o.logString);
      },
      warn: function (t, n, r) {
        d(3, r.logString);
      },
      devConsole: function (t, n, r) {
        for (
          var e = arguments.length, o = new Array(e > 3 ? e - 3 : 0), a = 3;
          a < e;
          a++
        )
          o[a - 3] = arguments[a];
        return d.apply(void 0, [_(t), n + " devConsole:"].concat(o));
      },
    };
    function c() {
      o("WATagsLogger").initializeWaLogger(u);
    }
    function d(e) {
      if (m(e)) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        p(e, n);
      }
    }
    function m(t) {
      return !(e >= 1 && e <= 4) || t < e
        ? !1
        : !(r("gkx")("5943") || (r("gkx")("26258") && !r("gkx")("26259")));
    }
    function p(e, t) {
      e: {
        if (e === 4) {
          var n;
          (n = console).error.apply(n, t);
          break e;
        }
        if (e === 3) {
          var r;
          (r = console).warn.apply(r, t);
          break e;
        }
        {
          var o;
          (o = console).log.apply(o, t);
          break e;
        }
      }
    }
    function _(e) {
      return e === "ERROR" || e === "CATCHING"
        ? 4
        : e === "WARN"
          ? 3
          : e === "COUNT" || e === "LOG"
            ? 2
            : e === "DEV" || e === "DEV_XMPP"
              ? 1
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.setWorkerConsoleLogLevel = s), (l.initializeWAWebLogger = c));
  },
  98,
);

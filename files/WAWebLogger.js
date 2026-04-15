__d(
  "WAWebLogger",
  [
    "ErrorNormalizeUtils",
    "WATagsLogger",
    "WAWebABProps",
    "WAWebCrashlog",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "cr:1106",
    "cr:35483",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("cr:1106") != null ? n("cr:1106") : n("cr:35483");
    function s() {
      return !r("gkx")("26258") || r("gkx")("26259");
    }
    function u() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_console_log_level",
      );
      return e < 1 || e > 4 ? 1e3 : e;
    }
    function c(e) {
      return e === "ERROR" || e === "CATCHING"
        ? {
            level: 4,
            consoleFunction: u() <= 4 ? console.error : r("WAWebNoop"),
          }
        : e === "WARN"
          ? {
              level: 3,
              consoleFunction: u() <= 3 ? console.warn : r("WAWebNoop"),
            }
          : e === "COUNT"
            ? {
                level: 2,
                consoleFunction: u() <= 2 ? console.count : r("WAWebNoop"),
              }
            : e === "LOG"
              ? {
                  level: 2,
                  consoleFunction: u() <= 2 ? console.log : r("WAWebNoop"),
                }
              : e === "DEV_XMPP" || e === "DEV"
                ? {
                    level: 1,
                    consoleFunction: u() <= 1 ? console.info : r("WAWebNoop"),
                  }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function d(t, n) {
      for (
        var r = c(t),
          o = arguments.length,
          a = new Array(o > 2 ? o - 2 : 0),
          i = 2;
        i < o;
        i++
      )
        a[i - 2] = arguments[i];
      if (e == null) {
        r.consoleFunction.apply(r, [n].concat(a));
        return;
      }
      var l = e.getLogFilterPattern();
      if (l == null) {
        r.consoleFunction.apply(r, [n].concat(a));
        return;
      }
      var s = e.processLogWithContext(t, n, a, r.consoleFunction);
      if (s === "matched") {
        var u = e.formatLogWithHighlight(l, n);
        u != null
          ? r.consoleFunction.apply(r, [u.format].concat(u.styles, a))
          : r.consoleFunction.apply(r, [n].concat(a));
      } else if (s === "context_after") {
        var d = e.getContextStyle();
        r.consoleFunction.apply(r, ["%c" + n, d].concat(a));
      } else e.recordFilteredLog(t, n);
    }
    function m(e) {
      if (!r("gkx")("5943")) {
        var t = c(e.level),
          n = o("WAWebLoggerImpl")
            .Logger.log(t.level)
            .apply(void 0, [e.template].concat(e.expressions));
        s() && d(e.level, n);
      }
    }
    function p(e, t, n) {
      var r,
        a = e.expressions.find(function (e) {
          return e instanceof Error;
        }),
        i = [];
      (e.tags != null &&
        i.push.apply(
          i,
          e.tags.map(function (e) {
            return String(e);
          }),
        ),
        ((r = e.sendLogs) == null ? void 0 : r.sampling) != null &&
          i.push("sampling"));
      var l = o("WAWebFBLogger").WAWebFBLogger().tags(i);
      a != null && a instanceof Error
        ? l.catching(a)
        : l.blameToPreviousFrame().blameToPreviousFrame();
      var s = e.template.join("%s"),
        u = e.expressions.map(function (e) {
          return e instanceof Error
            ? ""
            : o("WAWebLogLineSanitizer").sanitizeLine(String(e));
        });
      if (n != null) {
        var c;
        (c = l.addMetadata("WA_WEB", "FILE_ID", n)).mustfix.apply(
          c,
          [s + " (" + t + ")"].concat(u),
        );
      } else l.mustfix.apply(l, [s + " (" + t + ")"].concat(u));
    }
    var _ = {
      info: function (t, n, r) {
        m(r);
      },
      count: function (t, n, r) {
        m(r);
      },
      debug: function (t, n, r) {
        s() && m(r);
      },
      logRestricted: function (t, n, r) {
        s() && m(r);
      },
      error: function (t, n, r, o) {
        m(o);
      },
      warn: function (t, n, r) {
        m(r);
      },
      devConsole: function (t, n, o) {
        if (!r("gkx")("5943") && s()) {
          for (
            var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3;
            i < e;
            i++
          )
            a[i - 3] = arguments[i];
          d.apply(void 0, [t, n + " devConsole:"].concat(a));
        }
      },
      sendLogs: function (t) {
        var e, n, a, i, l, u;
        if (
          !((t.level === "DEV" || t.level === "DEV_XMPP") && r("gkx")("26258"))
        ) {
          var m = c(t.level),
            _ = t.expressions.find(function (e) {
              return e instanceof Error;
            }),
            f = r("ErrorNormalizeUtils").normalizeError(
              _ != null ? _ : r("err")("created for stack trace"),
            ),
            g = _ ? [] : [o("WAWebLoggerImpl").STACK_TRACE_TAG],
            h = o("WAWebLoggerImpl")
              .Logger.log(m.level, t.verbose, f, !1, g)
              .apply(void 0, [t.template].concat(t.expressions));
          s() && !r("gkx")("5943") && d(t.level, h);
          var y = o("WAWebLoggerImpl")
            .Logger.log(m.level, t.verbose, void 0, !0, t.tags)
            .apply(void 0, [t.template].concat(t.expressions));
          s() && !r("gkx")("5943") && d(t.level, y);
          var C =
              (e = (n = t.sendLogs) == null ? void 0 : n.reason) != null
                ? e
                : "www_sendlogs_undefined",
            b = o("WAWebCrashlog").sendLogs(C, {
              sampling: (a = t.sendLogs) == null ? void 0 : a.sampling,
              tags: t.tags,
              sendLogsType: (i = t.sendLogs) == null ? void 0 : i.sendLogsType,
              separateEmployeeLog:
                (l = t.sendLogs) == null ? void 0 : l.separateEmployeeLog,
              employeeSampling:
                (u = t.sendLogs) == null ? void 0 : u.employeeSampling,
            });
          (b.catch(function (e) {}),
            r("gkx")("16915") &&
              b
                .then(function (e) {
                  p(t, C, e);
                })
                .catch(function () {
                  p(t, C, null);
                }));
        }
      },
    };
    function f() {
      o("WATagsLogger").initializeWaLogger(_);
    }
    l.initializeWAWebLogger = f;
  },
  98,
);

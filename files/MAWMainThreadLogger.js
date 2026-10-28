__d(
  "MAWMainThreadLogger",
  [
    "CurrentMessengerUser",
    "FBLogger",
    "MAWAppVersion",
    "MAWConsoleLogger",
    "MAWDeleteOldLogsFromDisk",
    "MAWLeakDetection",
    "MAWLoggerUtils",
    "MAWLoggingSwitches",
    "MAWSaveLogToDisk",
    "Promise",
    "WAJids",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1;
    function c() {
      u = !1;
    }
    function d() {
      u || ((u = !0), o("WATagsLogger").initializeWaLogger(R));
    }
    var m = function () {
      return r("FBLogger")("messenger_web");
    };
    function p(e, t) {
      var n = _(e);
      n != null && o("MAWLoggerUtils").logToHistory("log", n, t, !1);
    }
    function _(e) {
      if (
        !(
          !o("CurrentMessengerUser").isEmployee() &&
          !o("CurrentMessengerUser").isTestUser()
        )
      ) {
        var t = o("WAJids").maybeSanitizeLogLineText(e);
        return ((t = o("MAWLeakDetection").maybeReplaceVaultedString(t)), t);
      }
    }
    function f(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        o("MAWLoggerUtils").logToHistory("log", n, t, !1));
    }
    function g(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        o("MAWLoggerUtils").logToHistory("log", n, t, !1));
    }
    function h(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        m()
          .tags(
            t.map(function (e) {
              return String(e);
            }),
          )
          .warn(n));
    }
    function y(e, t, n, o, a, i) {
      var l = r("err")(n);
      ((l.stack = o), r("promiseDone")(v(e, t, l, a, i)));
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("MAWLeakDetection").maybeReplaceVaultedString(
              o("WAJids").maybeSanitizeLogLineText(e),
            ),
            a = o("MAWLoggingSwitches").removeLoggingFromBridge
              ? o("MAWSaveLogToDisk").getLastNEntries(t)
              : (s || (s = n("Promise"))).resolve([]),
            i =
              t === 0
                ? []
                : [].concat(
                    (yield a).map(function (e) {
                      return e.args;
                    }),
                  );
          return { logs: [].concat(i), sanitizedMessage: r };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l,
              s,
              u = o("MAWLeakDetection").maybeReplaceVaultedString(
                o("WAJids").maybeSanitizeLogLineText(e),
              ),
              c = n != null ? n : r("err")(u),
              d = a != null ? a : n == null ? 2 : 0,
              p = i != null ? i : 0,
              _ = yield C(c.message, p),
              f = _.logs,
              g = _.sanitizedMessage,
              h = r("getErrorSafe")(c);
            try {
              c.message = g;
            } catch (e) {
              h = r("err")(g, c.fileName, c.lineNumber);
            }
            (d !== 0 && (h.framesToPop = d),
              (l = m()) == null ||
                (s = l
                  .addMetadata(
                    "MESSENGER_E2EE_WEB",
                    "APP_VERSION",
                    o("MAWAppVersion").getVersionNumber(),
                  )
                  .tags(
                    t.map(function (e) {
                      return String(e);
                    }),
                  )
                  .catching(h)).mustfix.apply(s, [g].concat(f)));
          },
        )),
        S.apply(this, arguments)
      );
    }
    var R = {
      count: function (t, n) {
        o("MAWConsoleLogger").logToConsole("count", t, n);
      },
      debug: function (t, n) {
        o("MAWConsoleLogger").logToConsole("log", t, n);
      },
      devConsole: function (t, n, r) {
        for (
          var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3;
          i < e;
          i++
        )
          a[i - 3] = arguments[i];
        switch (t) {
          case "COUNT":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["count", n, r].concat(a),
            );
            break;
          case "DEV":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["log", n, r].concat(a),
            );
            break;
          case "DEV_XMPP":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["log", n, r].concat(a),
            );
            break;
          case "LOG":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["info", n, r].concat(a),
            );
            break;
          case "WARN":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["warn", n, r].concat(a),
            );
            break;
          case "ERROR":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["error", n, r].concat(a),
            );
            break;
          case "CATCHING":
            o("MAWConsoleLogger").logToConsole.apply(
              void 0,
              ["error", n, r].concat(a),
            );
            break;
        }
      },
      error: function (t, n, a) {
        (r("promiseDone")(v(t, n, a)),
          o("MAWConsoleLogger").logToConsole("error", t, n));
      },
      info: function (t, n) {
        (g(t, n), o("MAWConsoleLogger").logToConsole("info", t, n));
      },
      logRestricted: function (t, n) {
        (p(t, n), o("MAWConsoleLogger").logToConsole("log", t, n));
      },
      warn: function (t, n) {
        (h(t, n), o("MAWConsoleLogger").logToConsole("warn", t, n));
      },
    };
    function L() {
      return o("MAWLoggingSwitches").removeLoggingFromBridge
        ? o("MAWSaveLogToDisk").getEntriesFromDb()
        : (s || (s = n("Promise"))).resolve([]);
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("MAWLoggingSwitches").removeLoggingFromBridge &&
            (yield o("MAWDeleteOldLogsFromDisk").clearLogs());
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return new Date(typeof e == "string" ? parseInt(e, 10) : e)
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
    }
    function T(t) {
      return t
        .map(function (t) {
          try {
            var n = I(t.date);
            return [n, t.level, t.category, t.event, t.args].join(" | ");
          } catch (t) {
            var o = r("getErrorSafe")(t);
            return [
              I((e || (e = r("performanceAbsoluteNow")))()),
              "error",
              "LOGGER",
              "Error formatting log: " +
                ((o == null ? void 0 : o.message) || ""),
            ].join(" | ");
          }
        })
        .filter(Boolean)
        .join("\n");
    }
    ((l.__testClearLoggerSetup = c),
      (l.setupMainWaLogger = d),
      (l.logRestricted = p),
      (l.count = f),
      (l.info = g),
      (l.warn = h),
      (l.logError = y),
      (l.getEntries = L),
      (l.clearEntries = E),
      (l.formatEntries = T));
  },
  98,
);

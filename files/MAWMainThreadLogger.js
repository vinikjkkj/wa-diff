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
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u() {
      s = !1;
    }
    function c() {
      s || ((s = !0), o("WATagsLogger").initializeWaLogger(S));
    }
    var d = function () {
      return r("FBLogger")("messenger_web");
    };
    function m(e, t) {
      var n = p(e);
      n != null && o("MAWLoggerUtils").logToHistory("log", n, t, !1);
    }
    function p(e) {
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
    function _(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        o("MAWLoggerUtils").logToHistory("log", n, t, !1));
    }
    function f(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        o("MAWLoggerUtils").logToHistory("log", n, t, !1));
    }
    function g(e, t) {
      var n = o("WAJids").maybeSanitizeLogLineText(e);
      ((n = o("MAWLeakDetection").maybeReplaceVaultedString(n)),
        d()
          .tags(
            t.map(function (e) {
              return String(e);
            }),
          )
          .warn(n));
    }
    function h(e, t, n, o, a, i) {
      var l = r("err")(n);
      ((l.stack = o), r("promiseDone")(b(e, t, l, a, i)));
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = o("MAWLeakDetection").maybeReplaceVaultedString(
              o("WAJids").maybeSanitizeLogLineText(t),
            ),
            i = o("MAWLoggingSwitches").removeLoggingFromBridge
              ? o("MAWSaveLogToDisk").getLastNEntries(r)
              : (e || (e = n("Promise"))).resolve([]),
            l =
              r === 0
                ? []
                : [].concat(
                    (yield i).map(function (e) {
                      return e.args;
                    }),
                  );
          return { logs: [].concat(l), sanitizedMessage: a };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l,
              s,
              u = o("MAWLeakDetection").maybeReplaceVaultedString(
                o("WAJids").maybeSanitizeLogLineText(e),
              ),
              c = n != null ? n : r("err")(u),
              m = a != null ? a : n == null ? 2 : 0,
              p = i != null ? i : 0,
              _ = yield y(c.message, p),
              f = _.logs,
              g = _.sanitizedMessage,
              h = r("getErrorSafe")(c);
            try {
              c.message = g;
            } catch (e) {
              h = r("err")(g, c.fileName, c.lineNumber);
            }
            (m !== 0 && (h.framesToPop = m),
              (l = d()) == null ||
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
        v.apply(this, arguments)
      );
    }
    var S = {
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
        (r("promiseDone")(b(t, n, a)),
          o("MAWConsoleLogger").logToConsole("error", t, n));
      },
      info: function (t, n) {
        (f(t, n), o("MAWConsoleLogger").logToConsole("info", t, n));
      },
      logRestricted: function (t, n) {
        (m(t, n), o("MAWConsoleLogger").logToConsole("log", t, n));
      },
      warn: function (t, n) {
        (g(t, n), o("MAWConsoleLogger").logToConsole("warn", t, n));
      },
    };
    function R() {
      return o("MAWLoggingSwitches").removeLoggingFromBridge
        ? o("MAWSaveLogToDisk").getEntriesFromDb()
        : (e || (e = n("Promise"))).resolve([]);
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("MAWLoggingSwitches").removeLoggingFromBridge &&
            (yield o("MAWDeleteOldLogsFromDisk").clearLogs());
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return new Date(typeof e == "string" ? parseInt(e, 10) : e)
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
    }
    function I(e) {
      return e
        .map(function (e) {
          try {
            var t = k(e.date);
            return [t, e.level, e.category, e.event, e.args].join(" | ");
          } catch (e) {
            var n = r("getErrorSafe")(e);
            return [
              k(Date.now()),
              "error",
              "LOGGER",
              "Error formatting log: " +
                ((n == null ? void 0 : n.message) || ""),
            ].join(" | ");
          }
        })
        .filter(Boolean)
        .join("\n");
    }
    ((l.__testClearLoggerSetup = u),
      (l.setupMainWaLogger = c),
      (l.logRestricted = m),
      (l.count = _),
      (l.info = f),
      (l.warn = g),
      (l.logError = h),
      (l.getEntries = R),
      (l.clearEntries = L),
      (l.formatEntries = I));
  },
  98,
);

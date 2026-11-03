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
    "WAJids",
    "WATagsLogger",
    "err",
    "getErrorSafe",
    "performanceAbsoluteNow",
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
      s || ((s = !0), o("WATagsLogger").initializeWaLogger(b));
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
      ((l.stack = o), r("promiseDone")(C(e, t, l, a, i)));
    }
    async function y(e, t) {
      var n = o("MAWLeakDetection").maybeReplaceVaultedString(
          o("WAJids").maybeSanitizeLogLineText(e),
        ),
        r = o("MAWLoggingSwitches").removeLoggingFromBridge
          ? o("MAWSaveLogToDisk").getLastNEntries(t)
          : Promise.resolve([]),
        a =
          t === 0
            ? []
            : [].concat(
                (await r).map(function (e) {
                  return e.args;
                }),
              );
      return { logs: [].concat(a), sanitizedMessage: n };
    }
    async function C(e, t, n, a, i) {
      var l,
        s,
        u = o("MAWLeakDetection").maybeReplaceVaultedString(
          o("WAJids").maybeSanitizeLogLineText(e),
        ),
        c = n != null ? n : r("err")(u),
        m = a != null ? a : n == null ? 2 : 0,
        p = i != null ? i : 0,
        _ = await y(c.message, p),
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
    }
    var b = {
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
        (r("promiseDone")(C(t, n, a)),
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
    function v() {
      return o("MAWLoggingSwitches").removeLoggingFromBridge
        ? o("MAWSaveLogToDisk").getEntriesFromDb()
        : Promise.resolve([]);
    }
    async function S() {
      o("MAWLoggingSwitches").removeLoggingFromBridge &&
        (await o("MAWDeleteOldLogsFromDisk").clearLogs());
    }
    function R(e) {
      return new Date(typeof e == "string" ? parseInt(e, 10) : e)
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
    }
    function L(t) {
      return t
        .map(function (t) {
          try {
            var n = R(t.date);
            return [n, t.level, t.category, t.event, t.args].join(" | ");
          } catch (t) {
            var o = r("getErrorSafe")(t);
            return [
              R((e || (e = r("performanceAbsoluteNow")))()),
              "error",
              "LOGGER",
              "Error formatting log: " +
                ((o == null ? void 0 : o.message) || ""),
            ].join(" | ");
          }
        })
        .filter(Boolean).join(`
`);
    }
    ((l.__testClearLoggerSetup = u),
      (l.setupMainWaLogger = c),
      (l.logRestricted = m),
      (l.count = _),
      (l.info = f),
      (l.warn = g),
      (l.logError = h),
      (l.getEntries = v),
      (l.clearEntries = S),
      (l.formatEntries = L));
  },
  98,
);

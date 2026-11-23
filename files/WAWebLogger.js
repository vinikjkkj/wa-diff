__d(
  "WAWebLogger",
  [
    "ErrorNormalizeUtils",
    "WATagsLogger",
    "WAWebABProps",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "cr:1106",
    "cr:35483",
    "err",
    "fb-error",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("cr:1106") != null ? n("cr:1106") : n("cr:35483");
    function s() {
      return !r("gkx")("26258") || r("gkx")("26259");
    }
    var u,
      c,
      d = "file-link",
      m = 8;
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_console_log_level",
      );
      return e < 1 || e > 4 ? 1e3 : e;
    }
    function _(e, t) {
      return (
        t === void 0 && (t = p()),
        e === "ERROR" || e === "CATCHING"
          ? {
              level: 4,
              consoleFunction:
                t <= 4 ? console.error.bind(console) : r("WAWebNoop"),
            }
          : e === "WARN"
            ? {
                level: 3,
                consoleFunction:
                  t <= 3 ? console.warn.bind(console) : r("WAWebNoop"),
              }
            : e === "COUNT"
              ? {
                  level: 2,
                  consoleFunction:
                    t <= 2
                      ? function (e) {
                          return console.count(e);
                        }
                      : r("WAWebNoop"),
                }
              : e === "LOG"
                ? {
                    level: 2,
                    consoleFunction:
                      t <= 2 ? console.log.bind(console) : r("WAWebNoop"),
                  }
                : e === "DEV_XMPP" || e === "DEV"
                  ? {
                      level: 1,
                      consoleFunction:
                        t <= 1 ? console.info.bind(console) : r("WAWebNoop"),
                    }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })()
      );
    }
    function f(t, n) {
      for (
        var r = _(t),
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
      var s = _(t, 1).consoleFunction,
        u = e.processLogWithContext(t, n, a, s);
      if (u === "matched") {
        var c = e.formatLogWithHighlight(l, n);
        c != null
          ? s.apply(void 0, [c.format].concat(c.styles, a))
          : s.apply(void 0, [n].concat(a));
      } else if (u === "context_after") {
        var d = e.getContextStyle();
        s.apply(void 0, ["%c" + n, d].concat(a));
      } else p() <= r.level && e.recordFilteredLog(t, n);
    }
    function g(e, t) {
      s() && !r("gkx")("5943") && f(e, t);
    }
    function h(e) {
      if (!r("gkx")("5943")) {
        var t = _(e.level),
          n = o("WAWebLoggerImpl")
            .Logger.log(t.level)
            .apply(void 0, [e.template].concat(e.expressions));
        s() && f(e.level, n);
      }
    }
    function y(e, t, n, r) {
      var o,
        a = v(e, t, n);
      c(
        babelHelpers.extends({}, a, {
          error:
            (o = a.error) != null
              ? o
              : C(r, a.formatString + " (" + t + ")", a.sanitizedExpressions),
        }),
      );
    }
    function C(e, t, n) {
      return b()
        ? ((e.messageFormat = t),
          (e.messageParams = [].concat(n)),
          (e.name = "FBLogger"),
          e)
        : null;
    }
    function b() {
      try {
        return r("justknobx")._("3861");
      } catch (e) {
        return !1;
      }
    }
    function v(e, t, n) {
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
      var l = e.template.join("%s"),
        s = e.expressions.map(function (e) {
          return e instanceof Error
            ? ""
            : o("WAWebLogLineSanitizer").sanitizeLine(String(e));
        });
      return {
        reason: t,
        fileId: n,
        formatString: l,
        sanitizedExpressions: s,
        tags: i,
        error: a instanceof Error ? a : null,
      };
    }
    function S(e) {
      var t, n;
      return ((t = e.sendLogs) == null ? void 0 : t.skipFBLoggerReporting) ===
        !0 && ((n = e.sendLogs) == null ? void 0 : n.reportFreshFileLink) === !0
        ? { requireFreshFileId: !0 }
        : null;
    }
    function R(e, t, n) {
      return n == null
        ? r("WAWebNoop")
        : function (n) {
            n == null || n === "" || L(v(e, t, n));
          };
    }
    function L(e) {
      c(
        babelHelpers.extends({}, e, {
          tags: [].concat(e.tags, [d]),
          level: "info",
        }),
      );
    }
    function E(e) {
      var t = k(e),
        n = e.formatString + " (" + e.reason + ")";
      if (e.level === "info") {
        t.info.apply(t, [n].concat(e.sanitizedExpressions));
        return;
      }
      t.mustfix.apply(t, [n].concat(e.sanitizedExpressions));
    }
    function k(e) {
      var t = o("WAWebFBLogger").WAWebFBLogger().tags(e.tags);
      return (
        e.error != null
          ? (t =
              e.level === "info"
                ? t.catchingNormalizedError(I(e.error))
                : t.catching(e.error))
          : (t = t.blameToPreviousFrame().blameToPreviousFrame()),
        e.fileId != null && (t = t.addMetadata("WA_WEB", "FILE_ID", e.fileId)),
        t
      );
    }
    function I(e) {
      var t = T(e, 0);
      return (
        (t.type = "info"),
        (t.project = o("WAWebFBLogger").PROJECT[0]),
        (t.loggingSource = "FBLOGGER"),
        r("ErrorNormalizeUtils").normalizeError(t)
      );
    }
    function T(e, t) {
      var n,
        o = r("err")(e.message);
      return (
        (o.name = e.name),
        (o.stack = e.stack),
        (o.errorName = e.errorName),
        (o.messageFormat = (n = e.messageFormat) != null ? n : e.message),
        (o.messageParams = e.messageParams),
        (o.forcedKey = e.forcedKey),
        (o.metadata = e.metadata),
        (o.extra = e.extra),
        (o.tags = e.tags),
        (o.componentStack = e.componentStack),
        (o.blameModule = e.blameModule),
        (o.guardList = e.guardList),
        (o.cause = e.cause),
        (o.fbtrace_id = e.fbtrace_id),
        (o.serverHash = e.serverHash),
        (o.operation = e.operation),
        (o.lineNumber = e.lineNumber),
        (o.line = e.line),
        (o.columnNumber = e.columnNumber),
        (o.column = e.column),
        (o.fileName = e.fileName),
        (o.sourceURL = e.sourceURL),
        (o.framesToPop = e.framesToPop),
        (o.type = e.type),
        (o.project = e.project),
        (o.loggingSource = e.loggingSource),
        (o.taalOpcodes =
          e.taalOpcodes == null ? void 0 : [].concat(e.taalOpcodes)),
        (o.deferredSource =
          e.deferredSource == null || t >= m
            ? void 0
            : T(e.deferredSource, t + 1)),
        o
      );
    }
    var D = {
      info: function (t, n, r) {
        h(r);
      },
      count: function (t, n, r) {
        h(r);
      },
      debug: function (t, n, r) {
        s() && h(r);
      },
      logRestricted: function (t, n, r) {
        s() && h(r);
      },
      error: function (t, n, r, o) {
        h(o);
      },
      warn: function (t, n, r) {
        h(r);
      },
      devConsole: function (t, n, o) {
        if (!r("gkx")("5943") && s()) {
          for (
            var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3;
            i < e;
            i++
          )
            a[i - 3] = arguments[i];
          f.apply(void 0, [t, n + " devConsole:"].concat(a));
        }
      },
      sendLogs: function (t) {
        var e, n, a, i, l, s, c;
        if (
          !((t.level === "DEV" || t.level === "DEV_XMPP") && r("gkx")("26258"))
        ) {
          var d = _(t.level),
            m = t.expressions.find(function (e) {
              return e instanceof Error;
            }),
            p = r("err")("created for stack trace");
          p.taalOpcodes = [
            r("fb-error").TAALOpcode.PREVIOUS_FRAME,
            r("fb-error").TAALOpcode.PREVIOUS_FRAME,
            r("fb-error").TAALOpcode.PREVIOUS_FRAME,
          ];
          var f = r("ErrorNormalizeUtils").normalizeError(m != null ? m : p),
            h = m ? [] : [o("WAWebLoggerImpl").STACK_TRACE_TAG],
            C = o("WAWebLoggerImpl")
              .Logger.log(d.level, t.verbose, f, !1, h)
              .apply(void 0, [t.template].concat(t.expressions));
          g(t.level, C);
          var b = o("WAWebLoggerImpl")
            .Logger.log(d.level, t.verbose, void 0, !0, t.tags)
            .apply(void 0, [t.template].concat(t.expressions));
          g(t.level, b);
          var v =
              (e = (n = t.sendLogs) == null ? void 0 : n.reason) != null
                ? e
                : "www_sendlogs_undefined",
            L =
              ((a = t.sendLogs) == null ? void 0 : a.skipFBLoggerReporting) ===
              !0,
            E = S(t),
            k = u(
              v,
              babelHelpers.extends(
                {
                  sampling: (i = t.sendLogs) == null ? void 0 : i.sampling,
                  tags: t.tags,
                  sendLogsType:
                    (l = t.sendLogs) == null ? void 0 : l.sendLogsType,
                  separateEmployeeLog:
                    (s = t.sendLogs) == null ? void 0 : s.separateEmployeeLog,
                  employeeSampling:
                    (c = t.sendLogs) == null ? void 0 : c.employeeSampling,
                },
                E,
              ),
            );
          if ((k.catch(function (e) {}), L)) {
            k.then(R(t, v, E)).catch(r("WAWebNoop"));
            return;
          }
          k.then(function (e) {
            y(t, v, e, p);
          }).catch(function () {
            y(t, v, null, p);
          });
        }
      },
    };
    function x(e, t) {
      ((u = e), (c = t), o("WATagsLogger").initializeWaLogger(D));
    }
    ((l.logToFBLoggerLocal = E), (l.initializeWAWebLogger = x));
  },
  98,
);

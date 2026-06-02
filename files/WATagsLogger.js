__d(
  "WATagsLogger",
  ["WALoggerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Promise(function (e) {
        s = e;
      });
    async function c() {
      await u;
    }
    var d = null;
    function m(e) {
      ((d = e), s == null || s(), (s = null));
    }
    var p = {
      count: function () {},
      debug: function () {},
      info: function () {},
      logRestricted: function () {},
      warn: function () {},
      error: function () {},
      devConsole: function () {},
    };
    function _() {
      return d == null ? p : d;
    }
    function f(e) {
      return {
        TAGS: function (n) {
          return f([].concat(e, n));
        },
        COUNT: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = { level: "COUNT", template: n, expressions: r, logString: i };
          return (_().count(i, e, l), g(l));
        },
        DEV: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = { level: "DEV", template: n, expressions: r, logString: i };
          return (_().debug(i, e, l), g(l));
        },
        DEV_XMPP: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = {
              level: "DEV_XMPP",
              template: n,
              expressions: r,
              logString: i,
            };
          return (_().logRestricted(i, e, l), g(l));
        },
        LOG: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = { level: "LOG", template: n, expressions: r, logString: i };
          return (_().info(i, e, l), g(l));
        },
        WARN: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = { level: "WARN", template: n, expressions: r, logString: i };
          return (_().warn(i, e, l), g(l));
        },
        ERROR: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = { level: "ERROR", template: n, expressions: r, logString: i },
            s = void 0;
          for (var u of r)
            if (u instanceof Error) {
              s = u;
              break;
            }
          return (
            s != null ? _().error(i, e, s, l) : _().error(i, e, void 0, l),
            g(l)
          );
        },
        CATCHING: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = {
              level: "CATCHING",
              template: n,
              expressions: r,
              logString: i,
            };
          return (_().error(i, e, void 0, l), g(l));
        },
        EXPECTED_ERROR: function (n) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          var i = o("WALoggerUtils").rebuildTemplate(n, r),
            l = {
              level: "ERROR",
              template: n,
              expressions: r,
              logString: i,
              tags: [].concat(e),
            };
          return g(l);
        },
      };
    }
    function g(t) {
      return {
        verbose: function () {
          return ((t.verbose = !0), g(t));
        },
        color: function (n) {
          return ((t.color = n), g(t));
        },
        devConsole: function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = _()).devConsole.apply(e, [t.level, t.logString, []].concat(r)),
            g(t)
          );
        },
        sendLogs: function (r, o) {
          if (_().sendLogs != null) {
            var n, a;
            ((t.sendLogs = {
              reason: r,
              sampling: o == null ? void 0 : o.sampling,
              sendLogsType: o == null ? void 0 : o.sendLogsType,
              separateEmployeeLog: o == null ? void 0 : o.separateEmployeeLog,
              employeeSampling: o == null ? void 0 : o.employeeSampling,
            }),
              (n = (a = _()).sendLogs) == null || n.call(a, t));
          } else if (t.level !== "ERROR" && t.level !== "CATCHING")
            return f([]).ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["[", "] ", ""])),
              r,
              t.logString,
            );
          return g(t);
        },
        tags: function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          if (((t.tags = n), _().tags != null)) {
            var o, a;
            (o = (a = _()).tags) == null || o.call(a, n);
          }
          return g(t);
        },
        expect: function (n) {
          var e, r, o, a, i, l;
          if (t.level !== "ERROR") return g(t);
          var s = void 0;
          for (var u of t.expressions)
            if (u instanceof Error) {
              s = u;
              break;
            }
          var c =
            (e =
              (r = (o = s) == null ? void 0 : o.message) != null
                ? r
                : (a = s) == null
                  ? void 0
                  : a.name) != null
              ? e
              : (i = s) == null
                ? void 0
                : i.description;
          for (var d of n)
            if (c != null && c.includes(d)) {
              var m;
              return (
                _().error(
                  t.logString,
                  [].concat((m = t.tags) != null ? m : [], [
                    "expected-error-log",
                  ]),
                  s != null ? s : void 0,
                  t,
                ),
                g(t)
              );
            }
          return (
            _().error(
              t.logString,
              (l = t == null ? void 0 : t.tags) != null ? l : [],
              s != null ? s : void 0,
              t,
            ),
            g(t)
          );
        },
        catching: function (n) {
          return (t.expressions.push(n), g(t));
        },
      };
    }
    ((l.whenReady = c),
      (l.initializeWaLogger = m),
      (l.TAGS = f),
      (l.getWaLoggerAdditionalOptions = g));
  },
  98,
);

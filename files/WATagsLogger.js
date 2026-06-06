__d(
  "WATagsLogger",
  ["Promise", "WALoggerUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new (s || (s = n("Promise")))(function (e) {
        u = e;
      });
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield c;
        })),
        m.apply(this, arguments)
      );
    }
    var p = null;
    function _(e) {
      ((p = e), u == null || u(), (u = null));
    }
    var f = {
      count: function () {},
      debug: function () {},
      info: function () {},
      logRestricted: function () {},
      warn: function () {},
      error: function () {},
      devConsole: function () {},
    };
    function g() {
      return p == null ? f : p;
    }
    function h(e) {
      return {
        TAGS: function (n) {
          return h([].concat(e, n));
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
          return (g().count(i, e, l), y(l));
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
          return (g().debug(i, e, l), y(l));
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
          return (g().logRestricted(i, e, l), y(l));
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
          return (g().info(i, e, l), y(l));
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
          return (g().warn(i, e, l), y(l));
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
            s != null ? g().error(i, e, s, l) : g().error(i, e, void 0, l),
            y(l)
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
          return (g().error(i, e, void 0, l), y(l));
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
          return y(l);
        },
      };
    }
    function y(t) {
      return {
        verbose: function () {
          return ((t.verbose = !0), y(t));
        },
        color: function (n) {
          return ((t.color = n), y(t));
        },
        devConsole: function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = g()).devConsole.apply(e, [t.level, t.logString, []].concat(r)),
            y(t)
          );
        },
        sendLogs: function (r, o) {
          if (g().sendLogs != null) {
            var n, a;
            ((t.sendLogs = {
              reason: r,
              sampling: o == null ? void 0 : o.sampling,
              sendLogsType: o == null ? void 0 : o.sendLogsType,
              separateEmployeeLog: o == null ? void 0 : o.separateEmployeeLog,
              employeeSampling: o == null ? void 0 : o.employeeSampling,
            }),
              (n = (a = g()).sendLogs) == null || n.call(a, t));
          } else if (t.level !== "ERROR" && t.level !== "CATCHING")
            return h([]).ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["[", "] ", ""])),
              r,
              t.logString,
            );
          return y(t);
        },
        tags: function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          if (((t.tags = n), g().tags != null)) {
            var o, a;
            (o = (a = g()).tags) == null || o.call(a, n);
          }
          return y(t);
        },
        expect: function (n) {
          var e, r, o, a, i, l;
          if (t.level !== "ERROR") return y(t);
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
                g().error(
                  t.logString,
                  [].concat((m = t.tags) != null ? m : [], [
                    "expected-error-log",
                  ]),
                  s != null ? s : void 0,
                  t,
                ),
                y(t)
              );
            }
          return (
            g().error(
              t.logString,
              (l = t == null ? void 0 : t.tags) != null ? l : [],
              s != null ? s : void 0,
              t,
            ),
            y(t)
          );
        },
        catching: function (n) {
          return (t.expressions.push(n), y(t));
        },
      };
    }
    ((l.whenReady = d),
      (l.initializeWaLogger = _),
      (l.TAGS = h),
      (l.getWaLoggerAdditionalOptions = y));
  },
  98,
);

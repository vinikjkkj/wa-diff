__d(
  "WAWebLoggerImpl",
  [
    "Promise",
    "WALogger",
    "WAMemoizeConditionally",
    "WAOnceWithReset",
    "WAShiftTimer",
    "WAStorageEstimator",
    "WAWebABProps",
    "WAWebLoggerFormatMessage",
    "WAWebLoggerOptimizer",
    "WAWebLoggerUtils",
    "WAWebLowEndDeviceApi",
    "WAWebNoop",
    "WAWebNormalizeStack",
    "WAWebSessionStorage",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "trace",
      f = "unhandled-rejection: Element not found. (0x80070490)",
      g = "0x80070490",
      h = 6048e5,
      y = 864e5 * 30,
      C = 5e3,
      b = 15e4,
      v = 3 * 1024 * 1024,
      S = 60 * 1024 * 1024,
      R = r("gkx")("26258") ? C : b,
      L = r("gkx")("26258") ? v : S,
      E = 1024,
      k = 500,
      I = 200,
      T = "wa_web_logger_session_start",
      D = "LTSXOo+_*-=.<^!#?".split("");
    function x() {
      return D[Math.round(Math.random() * (D.length - 1))];
    }
    var $ = x() + x() + x() + x(),
      P = {};
    ((P[(P.ALL = 0)] = "all"),
      (P[(P.INFO = 1)] = "info"),
      (P[(P.LOG = 2)] = "log"),
      (P[(P.WARN = 3)] = "warn"),
      (P[(P.ERROR = 4)] = "error"),
      (P[(P.OFF = 5)] = "off"));
    var N = (function () {
      function t(t) {
        var a = this,
          i = t.logCapacityInDatabase,
          l = t.logsDBProvider,
          m = t.processTag;
        ((this.localCursor = 0),
          (this.writeFrom = 0),
          (this.pending = void 0),
          (this.timer = new (o("WAShiftTimer").ShiftTimer)(function () {
            return a.$1();
          })),
          (this.runningTimestamp = 0),
          (this.isTakeOver = !1),
          (this.shouldSkipLoggingForProdLowEndDevice = !1),
          (this.$2 = !1),
          (this.$3 = Date.now()),
          (this.$4 = r("gkx")("26258") ? null : F(this.$3)),
          (this.$5 = r("gkx")("16623")),
          (this.$6 = L),
          (this.$7 = 0),
          (this.$8 = new Array(k)),
          (this.$9 = 0),
          (this.$10 = 0),
          (this.$11 = !1),
          (this.maybeUpdateLogCapacityFromABProp = r("WAOnceWithReset")(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r("gkx")("26258")) {
                var t = o("WAWebABProps").getABPropConfigValue(
                  "web_log_capacity_override",
                );
                if (
                  ((t === 0 || t == null) &&
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_web_log_download",
                    ) &&
                    (t = b),
                  !(t === 0 || t == null))
                ) {
                  if (
                    ((a.$11 = !0), o("WAWebLowEndDeviceApi").isLowEndDevice())
                  ) {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Skipping log capacity increase for low-end device",
                        ])),
                    );
                    return;
                  }
                  try {
                    var n = yield o("WAStorageEstimator").estimateStorage();
                    if (n.success) {
                      var i = n.value,
                        l = i.quota,
                        m = i.usage,
                        p = (l - m) / (1024 * 1024);
                      if (p < E) {
                        o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[logger] Skipping log capacity increase due to low storage: ",
                              "MB available",
                            ])),
                          p.toFixed(0),
                        );
                        return;
                      }
                    } else {
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[logger] Skipping log capacity increase - could not estimate storage",
                          ])),
                      );
                      return;
                    }
                  } catch (e) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Skipping log capacity increase due to storage check failure: ",
                          "",
                        ])),
                      String(e),
                    );
                    return;
                  }
                  var _ = Math.min(t, b);
                  if (_ > a.logCapacityInDatabase) {
                    var f = Date.now();
                    (a.$13(_), a.$5 && _ === b && (a.$6 = S));
                    var g = Date.now() - f;
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Log capacity increased to ",
                          " via AB prop (resize took ",
                          "ms)",
                        ])),
                      _,
                      g,
                    );
                  }
                }
              }
            }),
          )),
          (this.log = r("WAMemoizeConditionally")(
            function (e, t, n, o, i) {
              return (
                t === void 0 && (t = !1),
                function (l) {
                  for (
                    var s = arguments.length,
                      u = new Array(s > 1 ? s - 1 : 0),
                      c = 1;
                    c < s;
                    c++
                  )
                    u[c - 1] = arguments[c];
                  var d = r("WAWebLoggerFormatMessage")(l, u, !t);
                  return (a.logImpl(e, d, n, o, i), d);
                }
              );
            },
            function (e, t, n, r, o) {
              return n || o ? null : String(e) + String(!!t) + String(!!r);
            },
          )),
          (this.logsDBProvider = l),
          (this.logCapacityInDatabase = i),
          (this.logs = new Array(i)),
          (this.microStep = 1 / this.logCapacityInDatabase),
          (this.processTag = m));
      }
      var a = t.prototype;
      return (
        (a.setSkipLoggingForProdLowEndDevice = function () {
          var e =
            (r("gkx")("26258") || r("gkx")("17565")) &&
            o("WAWebLowEndDeviceApi").shouldReduceLogsForLowEndDevice();
          (e &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Disabling logs due to low-end device",
                ])),
            ),
            (this.shouldSkipLoggingForProdLowEndDevice = e));
        }),
        (a.$13 = function (t) {
          if (!(t <= this.logCapacityInDatabase)) {
            this.$2 = !0;
            try {
              for (
                var e = []
                    .concat(
                      this.logs.slice(
                        this.writeFrom,
                        this.logCapacityInDatabase,
                      ),
                      this.logs.slice(0, this.writeFrom),
                    )
                    .filter(function (e) {
                      return e != null;
                    }),
                  n = new Array(t),
                  r = 0;
                r < e.length;
                r++
              )
                n[r] = e[r];
              ((this.logs = n),
                (this.logCapacityInDatabase = t),
                (this.localCursor = e.length),
                (this.writeFrom = 0),
                (this.microStep = 1 / t));
            } finally {
              this.$2 = !1;
            }
          }
        }),
        (a.$14 = function (t) {
          if (t.e === !0) {
            var e = this.$8[this.$9];
            (e != null && this.$15(-e.m.length),
              (this.$8[this.$9] = t),
              this.$15(t.m.length),
              (this.$9 = (this.$9 + 1) % k),
              this.$10 < k && this.$10++);
          }
        }),
        (a.$15 = function (t) {
          this.$5 && (this.$7 += t);
        }),
        (a.$16 = function (t, n) {
          var e = this.logs[t];
          e != null &&
            (n && this.$11 && this.$14(e),
            this.$15(-e.m.length),
            (this.logs[t] = void 0));
        }),
        (a.$17 = function () {
          if (this.$10 !== 0) {
            var e = (this.$9 - this.$10 + k) % k,
              t = this.$8[e];
            (t != null && (this.$15(-t.m.length), (this.$8[e] = void 0)),
              this.$10--);
          }
        }),
        (a.$18 = function () {
          if (!(!this.$5 || this.$7 <= this.$6)) {
            for (
              var e =
                (this.localCursor - 1 + this.logCapacityInDatabase) %
                this.logCapacityInDatabase;
              this.$7 > this.$6 &&
              this.logs[this.writeFrom] != null &&
              this.writeFrom !== e;
            )
              (this.$16(this.writeFrom, !0),
                (this.writeFrom =
                  (this.writeFrom + 1) % this.logCapacityInDatabase));
            for (; this.$7 > this.$6 && this.$10 > 0; ) this.$17();
          }
        }),
        (a.logImpl = function (t, n, a, i, l) {
          if (
            !this.$2 &&
            !(t <= P.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = w(e);
            if (!r("gkx")("26258"))
              try {
                t === P.ERROR && this.$12 && this.$12(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(_)
                ? (u = "\n" + a.stack.split("\n").slice(3).join("\n"))
                : (u = "\n" + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                M(t),
                i === !0 && !o("WAWebLoggerUtils").isWaitingForUpload()
                  ? "sendlogs"
                  : null,
              ]
                .concat(l != null ? l : [], [this.processTag])
                .filter(Boolean)
                .map(function (e) {
                  return "[" + e + "]";
                })
                .join(""),
              d = $ + " " + s + (c ? c + " " : "") + n + u;
            this.logs[this.localCursor] != null &&
              this.$16(this.localCursor, !0);
            var m = t === P.ERROR;
            ((this.logs[this.localCursor] = m
              ? { m: d, t: e, e: !0 }
              : { m: d, t: e }),
              this.$15(d.length),
              (this.localCursor =
                (this.localCursor + 1) % this.logCapacityInDatabase),
              this.logs[this.localCursor] != null &&
                (this.writeFrom = this.localCursor),
              this.$18(),
              !this.isTakeOver && this.timer.debounceAndCap(250, 1e3));
          }
        }),
        (a.$1 = function () {
          var e = this;
          this.pending ||
            this.logs[this.writeFrom] == null ||
            this.isTakeOver ||
            (this.pending = this.logsDBProvider()
              .then(function (t) {
                return t.transaction(
                  "rw",
                  t.logs,
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var n,
                      r = yield t.logs.orderBy("count").last();
                    r || (r = yield t.logs.orderBy("timestamp").last());
                    for (
                      var o = r ? r.line + 1 : 0,
                        a = (n = r) != null && n.count ? r.count + 1 : o;
                      e.logs[e.writeFrom] != null;
                    ) {
                      var i = e.logs[e.writeFrom];
                      (e.$16(e.writeFrom, !1),
                        (e.writeFrom =
                          (e.writeFrom + 1) % e.logCapacityInDatabase),
                        (e.runningTimestamp =
                          i.t <= e.runningTimestamp
                            ? e.runningTimestamp + e.microStep
                            : i.t),
                        t.logs.put({
                          line: o++ % e.logCapacityInDatabase,
                          log: i.m,
                          timestamp: e.runningTimestamp,
                          count: a++,
                        }));
                    }
                  }),
                );
              })
              .then(function () {
                e.logs[e.writeFrom] != null && e.timer.debounceAndCap(250, 1e3);
              })
              .catch(function (t) {
                !r("gkx")("26258") &&
                  e.$12 &&
                  e.$12(r("getErrorSafe")(t).message);
              })
              .finally(function () {
                e.pending = void 0;
              }));
        }),
        (a.getSessionStartTime = function () {
          return this.$3;
        }),
        (a.getPreviousSessionTimeRange = function () {
          var e = this.$4,
            t = this.$3;
          return e == null || e >= t
            ? null
            : { fromTimestamp: e, toTimestamp: t };
        }),
        (a.getLogs = function (t, a, i) {
          var e = this;
          (t === void 0 && (t = !1),
            a === void 0 && (a = Date.now() - h),
            i === void 0 && (i = 1 / 0));
          var l = Math.max(a, Date.now() - y),
            s = [];
          return (
            this.pending && s.push(this.pending),
            this.timer.isScheduled() &&
              (this.timer.forceRunNow(), this.pending && s.push(this.pending)),
            (p || (p = n("Promise")))
              .all(s)
              .then(function () {
                return e.logsDBProvider();
              })
              .then(function (e) {
                return o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs(
                  e,
                  l,
                  t,
                  i,
                );
              })
              .then(function (t) {
                var n = [];
                if (e.$10 > 0)
                  for (var r = (e.$9 - e.$10 + k) % k, o = 0; o < e.$10; o++) {
                    var a = e.$8[(r + o) % k];
                    a != null && O(a.t, l, i) && n.push(a);
                  }
                if (n.length === 0)
                  return t.map(function (e) {
                    return e.log;
                  });
                for (var s = [], u = 0, c = 0; u < n.length && c < t.length; )
                  n[u].t <= t[c].timestamp
                    ? (s.push(n[u].m), u++)
                    : (s.push(t[c].log), c++);
                for (; u < n.length; ) (s.push(n[u].m), u++);
                for (; c < t.length; ) (s.push(t[c].log), c++);
                return s;
              })
              .catch(function (t) {
                return (
                  !r("gkx")("26258") &&
                    e.$12 &&
                    e.$12(r("getErrorSafe")(t).message),
                  e.logs.filter(Boolean).map(function (e) {
                    return e.m;
                  })
                );
              })
          );
        }),
        (a.clearLogs = function () {
          var e = this;
          return this.logsDBProvider()
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    yield e.logs.clear();
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
            .catch(r("WAWebNoop"))
            .finally(function () {
              ((e.localCursor = 0),
                (e.writeFrom = 0),
                (e.logs = new Array(e.logCapacityInDatabase)),
                e.$5 &&
                  ((e.$8 = new Array(k)), (e.$9 = 0), (e.$10 = 0), (e.$7 = 0)));
            });
        }),
        (a.logUncaughtError = function (t, n) {
          var e = t instanceof Error && t.stack ? t : void 0,
            o;
          if (
            (e
              ? (o = String(t))
              : (o = n
                  ? "unhandled-rejection: " + String(t)
                  : "Error: " + String(t)),
            n != null &&
              !(t instanceof Error) &&
              t != null &&
              typeof t == "object")
          ) {
            try {
              var a = Object.keys(t).slice(0, 3);
              a.length > 0 && (o += "; keys: " + a.join(", "));
            } catch (e) {}
            try {
              var i = Reflect.get(t, "methodName");
              i != null && (o += "; methodName: " + String(i));
            } catch (e) {}
            var l = B(t);
            l != null &&
              ((o += "; error: " + l), l.endsWith(g + ")") && (o = f));
          }
          if (
            (this.logImpl(P.ERROR, o, e, !0, ["uncaught"]),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var s = String(n);
            (this.logImpl(P.WARN, s), r("gkx")("26258"));
          }
          return o;
        }),
        (a.onTakeOver = function () {
          this.isTakeOver = !0;
        }),
        (a.registerErrorNotificationListener = function (t) {
          this.$12 = t;
        }),
        t
      );
    })();
    function M(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? P[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    function w(e) {
      var t = new Date(e),
        n = A(t.getMonth() + 1, 2),
        r = A(t.getDate(), 2),
        o = A(t.getHours(), 2),
        a = A(t.getMinutes(), 2),
        i = A(t.getSeconds(), 2),
        l = A(t.getMilliseconds(), 3);
      return (
        t.getFullYear() +
        "-" +
        n +
        "-" +
        r +
        " " +
        o +
        ":" +
        a +
        ":" +
        i +
        "." +
        l +
        ":"
      );
    }
    function A(e, t) {
      return String(e).padStart(t, "0");
    }
    function F(e) {
      try {
        var t =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem(T);
        if (
          (r("WAWebSessionStorage") == null ||
            r("WAWebSessionStorage").setItem(T, String(e)),
          t == null)
        )
          return null;
        var n = parseInt(t, 10);
        return Number.isNaN(n) ? null : n;
      } catch (e) {
        return null;
      }
    }
    function O(e, t, n) {
      return e >= t && e < n;
    }
    function B(e) {
      try {
        if (!Object.hasOwn(e, "parameters")) return;
        var t = Reflect.get(e, "parameters");
        if (t == null || typeof t != "object" || !Object.hasOwn(t, "error"))
          return;
        var n = Reflect.get(t, "error");
        return typeof n != "string"
          ? void 0
          : n.replace(/[\r\n]+/g, " ").slice(0, I);
      } catch (e) {
        return;
      }
    }
    var W = new N({
        logCapacityInDatabase: R,
        logsDBProvider: function () {
          return r("WAWebWAWCStorage").idb();
        },
      }),
      q = W.log;
    ((l.STACK_TRACE_TAG = _), (l.LoggerImpl = N), (l.Logger = W), (l.log = q));
  },
  98,
);

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
    "cr:19448",
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
      _,
      f,
      g = "trace",
      h = "unhandled-rejection: Element not found. (0x80070490)",
      y = "0x80070490",
      C = 6048e5,
      b = 864e5 * 30,
      v = 5e3,
      S = 15e4,
      R = 3 * 1024 * 1024,
      L = 60 * 1024 * 1024,
      E = r("gkx")("26258") ? v : S,
      k = r("gkx")("26258") ? R : L,
      I = 1024,
      T = 500,
      D = 200,
      x = "wa_web_logger_session_start",
      $ =
        (e = n("cr:19448") == null ? void 0 : n("cr:19448").persistRows) != null
          ? e
          : U,
      P =
        (s = n("cr:19448") == null ? void 0 : n("cr:19448").readLogs) != null
          ? s
          : o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs,
      N = "LTSXOo+_*-=.<^!#?".split("");
    function M() {
      return N[Math.round(Math.random() * (N.length - 1))];
    }
    var w = M() + M() + M() + M(),
      A = {};
    ((A[(A.ALL = 0)] = "all"),
      (A[(A.INFO = 1)] = "info"),
      (A[(A.LOG = 2)] = "log"),
      (A[(A.WARN = 3)] = "warn"),
      (A[(A.ERROR = 4)] = "error"),
      (A[(A.OFF = 5)] = "off"));
    var F = (function () {
      function e(e) {
        var t = this,
          a = e.logCapacityInDatabase,
          i = e.logsDBProvider,
          l = e.processTag;
        ((this.localCursor = 0),
          (this.writeFrom = 0),
          (this.pending = void 0),
          (this.timer = new (o("WAShiftTimer").ShiftTimer)(function () {
            return t.$1();
          })),
          (this.runningTimestamp = 0),
          (this.isTakeOver = !1),
          (this.shouldSkipLoggingForProdLowEndDevice = !1),
          (this.$2 = !1),
          (this.$3 = Date.now()),
          (this.$4 = r("gkx")("26258") ? null : q(this.$3)),
          (this.$5 = r("gkx")("16623")),
          (this.$6 = k),
          (this.$7 = 0),
          (this.$8 = new Array(T)),
          (this.$9 = 0),
          (this.$10 = 0),
          (this.$11 = !1),
          (this.maybeUpdateLogCapacityFromABProp = r("WAOnceWithReset")(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r("gkx")("26258")) {
                var e = o("WAWebABProps").getABPropConfigValue(
                  "web_log_capacity_override",
                );
                if (
                  ((e === 0 || e == null) &&
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_web_log_download",
                    ) &&
                    (e = S),
                  !(e === 0 || e == null))
                ) {
                  if (
                    ((t.$11 = !0), o("WAWebLowEndDeviceApi").isLowEndDevice())
                  ) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Skipping log capacity increase for low-end device",
                        ])),
                    );
                    return;
                  }
                  try {
                    var n = yield o("WAStorageEstimator").estimateStorage();
                    if (n.success) {
                      var a = n.value,
                        i = a.quota,
                        l = a.usage,
                        s = (i - l) / (1024 * 1024);
                      if (s < I) {
                        o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[logger] Skipping log capacity increase due to low storage: ",
                              "MB available",
                            ])),
                          s.toFixed(0),
                        );
                        return;
                      }
                    } else {
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[logger] Skipping log capacity increase - could not estimate storage",
                          ])),
                      );
                      return;
                    }
                  } catch (e) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Skipping log capacity increase due to storage check failure: ",
                          "",
                        ])),
                      String(e),
                    );
                    return;
                  }
                  var _ = Math.min(e, S);
                  if (_ > t.logCapacityInDatabase) {
                    var f = Date.now();
                    (t.$13(_), t.$5 && _ === S && (t.$6 = L));
                    var g = Date.now() - f;
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
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
            function (e, n, o, a, i) {
              return (
                n === void 0 && (n = !1),
                function (l) {
                  for (
                    var s = arguments.length,
                      u = new Array(s > 1 ? s - 1 : 0),
                      c = 1;
                    c < s;
                    c++
                  )
                    u[c - 1] = arguments[c];
                  var d = r("WAWebLoggerFormatMessage")(l, u, !n);
                  return (t.logImpl(e, d, o, a, i), d);
                }
              );
            },
            function (e, t, n, r, o) {
              return n || o ? null : String(e) + String(!!t) + String(!!r);
            },
          )),
          (this.logsDBProvider = i),
          (this.logCapacityInDatabase = a),
          (this.logs = new Array(a)),
          (this.microStep = 1 / this.logCapacityInDatabase),
          (this.processTag = l));
      }
      var t = e.prototype;
      return (
        (t.setSkipLoggingForProdLowEndDevice = function () {
          var e =
            (r("gkx")("26258") || r("gkx")("17565")) &&
            o("WAWebLowEndDeviceApi").shouldReduceLogsForLowEndDevice();
          (e &&
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Disabling logs due to low-end device",
                ])),
            ),
            (this.shouldSkipLoggingForProdLowEndDevice = e));
        }),
        (t.$13 = function (t) {
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
        (t.$14 = function (t) {
          if (t.e === !0) {
            var e = this.$8[this.$9];
            (e != null && this.$15(-e.m.length),
              (this.$8[this.$9] = t),
              this.$15(t.m.length),
              (this.$9 = (this.$9 + 1) % T),
              this.$10 < T && this.$10++);
          }
        }),
        (t.$15 = function (t) {
          this.$5 && (this.$7 += t);
        }),
        (t.$16 = function (t, n) {
          var e = this.logs[t];
          e != null &&
            (n && this.$11 && this.$14(e),
            this.$15(-e.m.length),
            (this.logs[t] = void 0));
        }),
        (t.$17 = function () {
          if (this.$10 !== 0) {
            var e = (this.$9 - this.$10 + T) % T,
              t = this.$8[e];
            (t != null && (this.$15(-t.m.length), (this.$8[e] = void 0)),
              this.$10--);
          }
        }),
        (t.$18 = function () {
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
        (t.logImpl = function (t, n, a, i, l) {
          if (
            !this.$2 &&
            !(t <= A.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = B(e);
            if (!r("gkx")("26258"))
              try {
                t === A.ERROR && this.$12 && this.$12(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(g)
                ? (u = "\n" + a.stack.split("\n").slice(3).join("\n"))
                : (u = "\n" + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                O(t),
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
              d = w + " " + s + (c ? c + " " : "") + n + u;
            this.logs[this.localCursor] != null &&
              this.$16(this.localCursor, !0);
            var m = t === A.ERROR;
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
        (t.$1 = function () {
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
                        a = (n = r) != null && n.count ? r.count + 1 : o,
                        i = [];
                      e.logs[e.writeFrom] != null;
                    ) {
                      var l = e.logs[e.writeFrom];
                      (e.$16(e.writeFrom, !1),
                        (e.writeFrom =
                          (e.writeFrom + 1) % e.logCapacityInDatabase),
                        (e.runningTimestamp =
                          l.t <= e.runningTimestamp
                            ? e.runningTimestamp + e.microStep
                            : l.t),
                        i.push({
                          line: o++ % e.logCapacityInDatabase,
                          log: l.m,
                          timestamp: e.runningTimestamp,
                          count: a++,
                        }));
                    }
                    yield $(t.logs, i, r);
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
        (t.getSessionStartTime = function () {
          return this.$3;
        }),
        (t.getPreviousSessionTimeRange = function () {
          var e = this.$4,
            t = this.$3;
          return e == null || e >= t
            ? null
            : { fromTimestamp: e, toTimestamp: t };
        }),
        (t.getLogs = function (t, o, a) {
          var e = this;
          (t === void 0 && (t = !1),
            o === void 0 && (o = Date.now() - C),
            a === void 0 && (a = 1 / 0));
          var i = Math.max(o, Date.now() - b),
            l = [];
          return (
            this.pending && l.push(this.pending),
            this.timer.isScheduled() &&
              (this.timer.forceRunNow(), this.pending && l.push(this.pending)),
            (f || (f = n("Promise")))
              .all(l)
              .then(function () {
                return e.logsDBProvider();
              })
              .then(function (e) {
                return P(e, i, t, a);
              })
              .then(function (t) {
                var n = [];
                if (e.$10 > 0)
                  for (var r = (e.$9 - e.$10 + T) % T, o = 0; o < e.$10; o++) {
                    var l = e.$8[(r + o) % T];
                    l != null && V(l.t, i, a) && n.push(l);
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
        (t.clearLogs = function () {
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
                  ((e.$8 = new Array(T)), (e.$9 = 0), (e.$10 = 0), (e.$7 = 0)));
            });
        }),
        (t.logUncaughtError = function (t, n) {
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
            var l = H(t);
            l != null &&
              ((o += "; error: " + l), l.endsWith(y + ")") && (o = h));
          }
          if (
            (this.logImpl(A.ERROR, o, e, !0, ["uncaught"]),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var s = String(n);
            (this.logImpl(A.WARN, s), r("gkx")("26258"));
          }
          return o;
        }),
        (t.onTakeOver = function () {
          this.isTakeOver = !0;
        }),
        (t.registerErrorNotificationListener = function (t) {
          this.$12 = t;
        }),
        e
      );
    })();
    function O(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? A[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    function B(e) {
      var t = new Date(e),
        n = W(t.getMonth() + 1, 2),
        r = W(t.getDate(), 2),
        o = W(t.getHours(), 2),
        a = W(t.getMinutes(), 2),
        i = W(t.getSeconds(), 2),
        l = W(t.getMilliseconds(), 3);
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
    function W(e, t) {
      return String(e).padStart(t, "0");
    }
    function q(e) {
      try {
        var t =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem(x);
        if (
          (r("WAWebSessionStorage") == null ||
            r("WAWebSessionStorage").setItem(x, String(e)),
          t == null)
        )
          return null;
        var n = parseInt(t, 10);
        return Number.isNaN(n) ? null : n;
      } catch (e) {
        return null;
      }
    }
    function U(e, t, n) {
      return e.bulkPut(t);
    }
    function V(e, t, n) {
      return e >= t && e < n;
    }
    function H(e) {
      try {
        if (!Object.hasOwn(e, "parameters")) return;
        var t = Reflect.get(e, "parameters");
        if (t == null || typeof t != "object" || !Object.hasOwn(t, "error"))
          return;
        var n = Reflect.get(t, "error");
        return typeof n != "string"
          ? void 0
          : n.replace(/[\r\n]+/g, " ").slice(0, D);
      } catch (e) {
        return;
      }
    }
    var G = new F({
        logCapacityInDatabase: E,
        logsDBProvider: function () {
          return r("WAWebWAWCStorage").idb();
        },
      }),
      z = G.log;
    ((l.STACK_TRACE_TAG = g), (l.LoggerImpl = F), (l.Logger = G), (l.log = z));
  },
  98,
);

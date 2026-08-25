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
      f = 6048e5,
      g = 864e5 * 30,
      h = 5e3,
      y = 15e4,
      C = 3 * 1024 * 1024,
      b = 60 * 1024 * 1024,
      v = r("gkx")("26258") ? h : y,
      S = r("gkx")("26258") ? C : b,
      R = 1024,
      L = 500,
      E = "LTSXOo+_*-=.<^!#?".split("");
    function k() {
      return E[Math.round(Math.random() * (E.length - 1))];
    }
    var I = k() + k() + k() + k(),
      T = {};
    ((T[(T.ALL = 0)] = "all"),
      (T[(T.INFO = 1)] = "info"),
      (T[(T.LOG = 2)] = "log"),
      (T[(T.WARN = 3)] = "warn"),
      (T[(T.ERROR = 4)] = "error"),
      (T[(T.OFF = 5)] = "off"));
    var D = (function () {
      function t(t, a, i) {
        var l = this;
        (i === void 0 && (i = void 0),
          (this.localCursor = 0),
          (this.writeFrom = 0),
          (this.pending = void 0),
          (this.timer = new (o("WAShiftTimer").ShiftTimer)(function () {
            return l.$1();
          })),
          (this.runningTimestamp = 0),
          (this.isTakeOver = !1),
          (this.shouldSkipLoggingForProdLowEndDevice = !1),
          (this.$2 = !1),
          (this.$3 = r("gkx")("16623")),
          (this.$4 = S),
          (this.$5 = 0),
          (this.$6 = new Array(L)),
          (this.$7 = 0),
          (this.$8 = 0),
          (this.$9 = !1),
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
                    (t = y),
                  !(t === 0 || t == null))
                ) {
                  if (
                    ((l.$9 = !0), o("WAWebLowEndDeviceApi").isLowEndDevice())
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
                      var a = n.value,
                        i = a.quota,
                        m = a.usage,
                        p = (i - m) / (1024 * 1024);
                      if (p < R) {
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
                  var _ = Math.min(t, y);
                  if (_ > l.logCapacityInDatabase) {
                    var f = Date.now();
                    (l.$11(_), l.$3 && _ === y && (l.$4 = b));
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
            function (e, t, n, o, a) {
              return (
                t === void 0 && (t = !1),
                function (i) {
                  for (
                    var s = arguments.length,
                      u = new Array(s > 1 ? s - 1 : 0),
                      c = 1;
                    c < s;
                    c++
                  )
                    u[c - 1] = arguments[c];
                  var d = r("WAWebLoggerFormatMessage")(i, u, !t);
                  return (l.logImpl(e, d, n, o, a), d);
                }
              );
            },
            function (e, t, n, r, o) {
              return n || o ? null : String(e) + String(!!t) + String(!!r);
            },
          )),
          (this.logsDBProvider = t),
          (this.logCapacityInDatabase = a),
          (this.logs = new Array(a)),
          (this.microStep = 1 / this.logCapacityInDatabase),
          (this.processTag = i));
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
        (a.$11 = function (t) {
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
        (a.$12 = function (t) {
          if (t.e === !0) {
            var e = this.$6[this.$7];
            (e != null && this.$13(-e.m.length),
              (this.$6[this.$7] = t),
              this.$13(t.m.length),
              (this.$7 = (this.$7 + 1) % L),
              this.$8 < L && this.$8++);
          }
        }),
        (a.$13 = function (t) {
          this.$3 && (this.$5 += t);
        }),
        (a.$14 = function (t, n) {
          var e = this.logs[t];
          e != null &&
            (n && this.$9 && this.$12(e),
            this.$13(-e.m.length),
            (this.logs[t] = void 0));
        }),
        (a.$15 = function () {
          if (this.$8 !== 0) {
            var e = (this.$7 - this.$8 + L) % L,
              t = this.$6[e];
            (t != null && (this.$13(-t.m.length), (this.$6[e] = void 0)),
              this.$8--);
          }
        }),
        (a.$16 = function () {
          if (!(!this.$3 || this.$5 <= this.$4)) {
            for (
              var e =
                (this.localCursor - 1 + this.logCapacityInDatabase) %
                this.logCapacityInDatabase;
              this.$5 > this.$4 &&
              this.logs[this.writeFrom] != null &&
              this.writeFrom !== e;
            )
              (this.$14(this.writeFrom, !0),
                (this.writeFrom =
                  (this.writeFrom + 1) % this.logCapacityInDatabase));
            for (; this.$5 > this.$4 && this.$8 > 0; ) this.$15();
          }
        }),
        (a.logImpl = function (t, n, a, i, l) {
          if (
            !this.$2 &&
            !(t <= T.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = $(e);
            if (!r("gkx")("26258"))
              try {
                t === T.ERROR && this.$10 && this.$10(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(_)
                ? (u = "\n" + a.stack.split("\n").slice(3).join("\n"))
                : (u = "\n" + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                x(t),
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
              d = I + " " + s + (c ? c + " " : "") + n + u;
            this.logs[this.localCursor] != null &&
              this.$14(this.localCursor, !0);
            var m = t === T.ERROR;
            ((this.logs[this.localCursor] = m
              ? { m: d, t: e, e: !0 }
              : { m: d, t: e }),
              this.$13(d.length),
              (this.localCursor =
                (this.localCursor + 1) % this.logCapacityInDatabase),
              this.logs[this.localCursor] != null &&
                (this.writeFrom = this.localCursor),
              this.$16(),
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
                      (e.$14(e.writeFrom, !1),
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
                  e.$10 &&
                  e.$10(r("getErrorSafe")(t).message);
              })
              .finally(function () {
                e.pending = void 0;
              }));
        }),
        (a.getLogs = function (t, a) {
          var e = this;
          (t === void 0 && (t = !1), a === void 0 && (a = Date.now() - f));
          var i = Math.max(a, Date.now() - g),
            l = [];
          return (
            this.pending && l.push(this.pending),
            this.timer.isScheduled() &&
              (this.timer.forceRunNow(), this.pending && l.push(this.pending)),
            (p || (p = n("Promise")))
              .all(l)
              .then(function () {
                return e.logsDBProvider();
              })
              .then(function (e) {
                return o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs(
                  e,
                  i,
                  t,
                );
              })
              .then(function (t) {
                var n = [];
                if (e.$8 > 0)
                  for (var r = (e.$7 - e.$8 + L) % L, o = 0; o < e.$8; o++) {
                    var a = e.$6[(r + o) % L];
                    a != null && a.t >= i && n.push(a);
                  }
                if (n.length === 0)
                  return t.map(function (e) {
                    return e.log;
                  });
                for (var l = [], s = 0, u = 0; s < n.length && u < t.length; )
                  n[s].t <= t[u].timestamp
                    ? (l.push(n[s].m), s++)
                    : (l.push(t[u].log), u++);
                for (; s < n.length; ) (l.push(n[s].m), s++);
                for (; u < t.length; ) (l.push(t[u].log), u++);
                return l;
              })
              .catch(function (t) {
                return (
                  !r("gkx")("26258") &&
                    e.$10 &&
                    e.$10(r("getErrorSafe")(t).message),
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
                e.$3 &&
                  ((e.$6 = new Array(L)), (e.$7 = 0), (e.$8 = 0), (e.$5 = 0)));
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
            this.logImpl(T.ERROR, o, e, !0, ["uncaught"]),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var a = String(n);
            (this.logImpl(T.WARN, a), r("gkx")("26258"));
          }
          return o;
        }),
        (a.onTakeOver = function () {
          this.isTakeOver = !0;
        }),
        (a.registerErrorNotificationListener = function (t) {
          this.$10 = t;
        }),
        t
      );
    })();
    function x(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? T[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    function $(e) {
      var t = new Date(e),
        n = P(t.getMonth() + 1, 2),
        r = P(t.getDate(), 2),
        o = P(t.getHours(), 2),
        a = P(t.getMinutes(), 2),
        i = P(t.getSeconds(), 2),
        l = P(t.getMilliseconds(), 3);
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
    function P(e, t) {
      return String(e).padStart(t, "0");
    }
    var N = new D(function () {
        return r("WAWebWAWCStorage").idb();
      }, v),
      M = N.log;
    ((l.STACK_TRACE_TAG = _), (l.LoggerImpl = D), (l.Logger = N), (l.log = M));
  },
  98,
);

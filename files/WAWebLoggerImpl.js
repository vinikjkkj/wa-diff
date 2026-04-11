__d(
  "WAWebLoggerImpl",
  [
    "Promise",
    "WALogger",
    "WAMemoizeConditionally",
    "WAOnceWithReset",
    "WAShiftTimer",
    "WAStorageEstimator",
    "WAWeb-moment",
    "WAWebABProps",
    "WAWebLoggerFormatMessage",
    "WAWebLoggerOptimizer",
    "WAWebLoggerUtils",
    "WAWebLowEndDeviceApi",
    "WAWebNoop",
    "WAWebNormalizeStack",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime",
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
      h = 15e4,
      y = 1024,
      C = 500,
      b;
    r("gkx")("26258") ? (b = 5e3) : (b = 15e4);
    var v = b,
      S = "LTSXOo+_*-=.<^!#?".split("");
    function R() {
      return S[Math.round(Math.random() * (S.length - 1))];
    }
    var L = R() + R() + R() + R(),
      E = {};
    ((E[(E.ALL = 0)] = "all"),
      (E[(E.INFO = 1)] = "info"),
      (E[(E.LOG = 2)] = "log"),
      (E[(E.WARN = 3)] = "warn"),
      (E[(E.ERROR = 4)] = "error"),
      (E[(E.OFF = 5)] = "off"));
    var k = (function () {
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
          (this.$3 = new Array(C)),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = !1),
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
                    (t = h),
                  !(t === 0 || t == null))
                ) {
                  if (
                    ((l.$6 = !0), o("WAWebLowEndDeviceApi").isLowEndDevice())
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
                      if (p < y) {
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
                  var _ = Math.min(t, h);
                  if (_ > l.logCapacityInDatabase) {
                    var f = Date.now();
                    l.$8(_);
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
        (a.$8 = function (t) {
          if (!(t <= this.logCapacityInDatabase)) {
            this.$2 = !0;
            try {
              var e;
              this.logs[this.writeFrom] == null
                ? (e = this.logs.slice(0, this.localCursor))
                : this.writeFrom === 0
                  ? (e = this.logs.slice(0, this.logCapacityInDatabase))
                  : (e = [].concat(
                      this.logs.slice(
                        this.writeFrom,
                        this.logCapacityInDatabase,
                      ),
                      this.logs.slice(0, this.writeFrom),
                    ));
              for (var n = new Array(t), r = 0; r < e.length; r++) n[r] = e[r];
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
        (a.$9 = function (t) {
          t.e === !0 &&
            ((this.$3[this.$4] = t),
            (this.$4 = (this.$4 + 1) % C),
            this.$5 < C && this.$5++);
        }),
        (a.logImpl = function (t, n, a, i, l) {
          if (
            !this.$2 &&
            !(t <= E.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = r("WAWeb-moment")(e)
                .locale("en")
                .format("YYYY-MM-DD HH:mm:ss.SSS:");
            if (!r("gkx")("26258"))
              try {
                t === E.ERROR && this.$7 && this.$7(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(_)
                ? (u = "\n" + a.stack.split("\n").slice(3).join("\n"))
                : (u = "\n" + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                I(t),
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
              d = L + " " + s + (c ? c + " " : "") + n + u;
            if (this.$6) {
              var m = this.logs[this.localCursor];
              m != null && this.$9(m);
            }
            var p = t === E.ERROR;
            ((this.logs[this.localCursor] = p
              ? { m: d, t: e, e: !0 }
              : { m: d, t: e }),
              (this.localCursor =
                (this.localCursor + 1) % this.logCapacityInDatabase),
              this.logs[this.localCursor] != null &&
                (this.writeFrom = this.localCursor),
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
                      ((e.logs[e.writeFrom] = void 0),
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
                !r("gkx")("26258") && e.$7 && e.$7(t.message);
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
                if (e.$5 > 0) {
                  var r = e.$5 === C;
                  if (r) {
                    var o = e.$3.slice(e.$4).filter(Boolean),
                      a = e.$3.slice(0, e.$4).filter(Boolean);
                    n = [].concat(o, a).filter(function (e) {
                      return e.t >= i;
                    });
                  } else
                    n = e.$3
                      .slice(0, e.$5)
                      .filter(Boolean)
                      .filter(function (e) {
                        return e.t >= i;
                      });
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
                  !r("gkx")("26258") && e.$7 && e.$7(t.message),
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
                (e.logs = new Array(e.logCapacityInDatabase)));
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
            this.logImpl(E.ERROR, o, e, !0, ["uncaught"]),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var a = String(n);
            (this.logImpl(E.WARN, a), r("gkx")("26258"));
          }
          return o;
        }),
        (a.onTakeOver = function () {
          this.isTakeOver = !0;
        }),
        (a.registerErrorNotificationListener = function (t) {
          this.$7 = t;
        }),
        t
      );
    })();
    function I(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? E[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    var T = new k(function () {
        return r("WAWebWAWCStorage").idb();
      }, v),
      D = T.log;
    ((l.STACK_TRACE_TAG = _), (l.LoggerImpl = k), (l.Logger = T), (l.log = D));
  },
  98,
);

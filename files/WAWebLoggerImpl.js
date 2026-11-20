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
    "justknobx",
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
      R = S,
      L = 1e3,
      E = 3 * 1024 * 1024,
      k = 60 * 1024 * 1024,
      I = r("gkx")("26258") ? v : S,
      T = r("gkx")("26258") ? E : k,
      D = 1024,
      x = 500,
      $ = 200,
      P = "wa_web_logger_session_start",
      N =
        (e = n("cr:19448") == null ? void 0 : n("cr:19448").persistRows) != null
          ? e
          : H,
      M =
        (s = n("cr:19448") == null ? void 0 : n("cr:19448").readLogs) != null
          ? s
          : o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs,
      w = "LTSXOo+_*-=.<^!#?".split("");
    function A() {
      return w[Math.round(Math.random() * (w.length - 1))];
    }
    var F = A() + A() + A() + A(),
      O = {};
    ((O[(O.ALL = 0)] = "all"),
      (O[(O.INFO = 1)] = "info"),
      (O[(O.LOG = 2)] = "log"),
      (O[(O.WARN = 3)] = "warn"),
      (O[(O.ERROR = 4)] = "error"),
      (O[(O.OFF = 5)] = "off"));
    var B = (function () {
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
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = Date.now()),
          (this.$6 = r("gkx")("26258") ? null : V(this.$5)),
          (this.$7 = r("gkx")("16623")),
          (this.$8 = T),
          (this.$9 = 0),
          (this.$10 = new Array(x)),
          (this.$11 = 0),
          (this.$12 = 0),
          (this.$13 = !1),
          (this.maybeUpdateLogCapacityFromABProp = r("WAOnceWithReset")(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield t.$15(), (t.$3 = !0));
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Disabling logs due to low-end device",
                ])),
            ),
            (this.shouldSkipLoggingForProdLowEndDevice = e));
        }),
        (t.allowBacklogCleanup = function () {
          this.$4 = !0;
        }),
        (t.$15 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  ((this.$13 = !0), o("WAWebLowEndDeviceApi").isLowEndDevice())
                ) {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[logger] Skipping log capacity increase for low-end device",
                      ])),
                  );
                  return;
                }
                try {
                  var t = yield o("WAStorageEstimator").estimateStorage();
                  if (t.success) {
                    var n = t.value,
                      a = n.quota,
                      i = n.usage,
                      l = (a - i) / (1024 * 1024);
                    if (l < D) {
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[logger] Skipping log capacity increase due to low storage: ",
                            "MB available",
                          ])),
                        l.toFixed(0),
                      );
                      return;
                    }
                  } else {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[logger] Skipping log capacity increase - could not estimate storage",
                        ])),
                    );
                    return;
                  }
                } catch (e) {
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[logger] Skipping log capacity increase due to storage check failure: ",
                        "",
                      ])),
                    String(e),
                  );
                  return;
                }
                var s = Math.min(e, S);
                if (s > this.logCapacityInDatabase) {
                  var u = Date.now();
                  (this.$16(s), this.$7 && s === S && (this.$8 = k));
                  var f = Date.now() - u;
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[logger] Log capacity increased to ",
                        " via AB prop (resize took ",
                        "ms)",
                      ])),
                    s,
                    f,
                  );
                }
              }
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$16 = function (t) {
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
        (t.$17 = function (t) {
          if (t.e === !0) {
            var e = this.$10[this.$11];
            (e != null && this.$18(-e.m.length),
              (this.$10[this.$11] = t),
              this.$18(t.m.length),
              (this.$11 = (this.$11 + 1) % x),
              this.$12 < x && this.$12++);
          }
        }),
        (t.$18 = function (t) {
          this.$7 && (this.$9 += t);
        }),
        (t.$19 = function (t, n) {
          var e = this.logs[t];
          e != null &&
            (n && this.$13 && this.$17(e),
            this.$18(-e.m.length),
            (this.logs[t] = void 0));
        }),
        (t.$20 = function () {
          if (this.$12 !== 0) {
            var e = (this.$11 - this.$12 + x) % x,
              t = this.$10[e];
            (t != null && (this.$18(-t.m.length), (this.$10[e] = void 0)),
              this.$12--);
          }
        }),
        (t.$21 = function () {
          if (!(!this.$7 || this.$9 <= this.$8)) {
            for (
              var e =
                (this.localCursor - 1 + this.logCapacityInDatabase) %
                this.logCapacityInDatabase;
              this.$9 > this.$8 &&
              this.logs[this.writeFrom] != null &&
              this.writeFrom !== e;
            )
              (this.$19(this.writeFrom, !0),
                (this.writeFrom =
                  (this.writeFrom + 1) % this.logCapacityInDatabase));
            for (; this.$9 > this.$8 && this.$12 > 0; ) this.$20();
          }
        }),
        (t.logImpl = function (t, n, a, i, l) {
          if (
            !this.$2 &&
            !(t <= O.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = q(e);
            if (!r("gkx")("26258"))
              try {
                t === O.ERROR && this.$14 && this.$14(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(g)
                ? (u = "\n" + a.stack.split("\n").slice(3).join("\n"))
                : (u = "\n" + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                W(t),
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
              d = F + " " + s + (c ? c + " " : "") + n + u;
            this.logs[this.localCursor] != null &&
              this.$19(this.localCursor, !0);
            var m = t === O.ERROR;
            ((this.logs[this.localCursor] = m
              ? { m: d, t: e, e: !0 }
              : { m: d, t: e }),
              this.$18(d.length),
              (this.localCursor =
                (this.localCursor + 1) % this.logCapacityInDatabase),
              this.logs[this.localCursor] != null &&
                (this.writeFrom = this.localCursor),
              this.$21(),
              !this.isTakeOver && this.timer.debounceAndCap(250, 1e3));
          }
        }),
        (t.$22 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n;
              if (this.$3) return Math.min(this.logCapacityInDatabase, S);
              var r =
                (n = t == null ? void 0 : t.tableCapacity) != null
                  ? n
                  : yield J(e, t == null ? void 0 : t.count);
              return Math.min(Math.max(this.logCapacityInDatabase, r), S);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.$1 = function () {
          var e = this;
          if (
            !(
              this.pending ||
              this.logs[this.writeFrom] == null ||
              this.isTakeOver
            )
          ) {
            var t = G();
            this.pending = this.logsDBProvider()
              .then(function (r) {
                return r.transaction(
                  "rw",
                  r.logs,
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var n,
                      o = yield r.logs.orderBy("count").last();
                    o || (o = yield r.logs.orderBy("timestamp").last());
                    for (
                      var a = o ? o.line + 1 : 0,
                        i =
                          ((n = o) == null ? void 0 : n.count) != null
                            ? o.count + 1
                            : a,
                        l = Y(o) ? i : a,
                        s = yield e.$22(r.logs, o),
                        u = [];
                      e.logs[e.writeFrom] != null;
                    ) {
                      var c = e.logs[e.writeFrom];
                      (e.$19(e.writeFrom, !1),
                        (e.writeFrom =
                          (e.writeFrom + 1) % e.logCapacityInDatabase),
                        (e.runningTimestamp =
                          c.t <= e.runningTimestamp
                            ? e.runningTimestamp + e.microStep
                            : c.t),
                        u.push({
                          line: t ? X(i) : l++ % e.logCapacityInDatabase,
                          log: c.m,
                          timestamp: e.runningTimestamp,
                          count: i++,
                          tableCapacity: s,
                        }));
                    }
                    (yield N(r.logs, u, o),
                      yield z(r.logs, {
                        firstKeptCount: i - s,
                        limit: e.$4 ? u.length + L : u.length,
                        sharedLogOnly: !t,
                      }));
                  }),
                );
              })
              .then(function () {
                e.logs[e.writeFrom] != null && e.timer.debounceAndCap(250, 1e3);
              })
              .catch(function (t) {
                !r("gkx")("26258") &&
                  e.$14 &&
                  e.$14(r("getErrorSafe")(t).message);
              })
              .finally(function () {
                e.pending = void 0;
              });
          }
        }),
        (t.getSessionStartTime = function () {
          return this.$5;
        }),
        (t.getPreviousSessionTimeRange = function () {
          var e = this.$6,
            t = this.$5;
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
                return M(e, i, t, a);
              })
              .then(function (t) {
                var n = [];
                if (e.$12 > 0)
                  for (var r = (e.$11 - e.$12 + x) % x, o = 0; o < e.$12; o++) {
                    var l = e.$10[(r + o) % x];
                    l != null && te(l.t, i, a) && n.push(l);
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
                    e.$14 &&
                    e.$14(r("getErrorSafe")(t).message),
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
                e.$7 &&
                  ((e.$10 = new Array(x)),
                  (e.$11 = 0),
                  (e.$12 = 0),
                  (e.$9 = 0)));
            });
        }),
        (t.logUncaughtError = function (t, n) {
          var e = t instanceof Error && t.stack ? t : void 0,
            a;
          if (
            (e
              ? (a = String(t))
              : (a = n
                  ? "unhandled-rejection: " + String(t)
                  : "Error: " + String(t)),
            n != null &&
              !(t instanceof Error) &&
              t != null &&
              typeof t == "object")
          ) {
            try {
              var i = Object.keys(t).slice(0, 3);
              i.length > 0 && (a += "; keys: " + i.join(", "));
            } catch (e) {}
            try {
              var l = Reflect.get(t, "methodName");
              l != null && (a += "; methodName: " + String(l));
            } catch (e) {}
            var s = ne(t);
            s != null &&
              ((a += "; error: " + s), s.endsWith(y + ")") && (a = h));
          }
          if (
            (this.logImpl(
              O.ERROR,
              a,
              e == null ? void 0 : o("WAWebNormalizeStack").normalizeError(e),
              !0,
              ["uncaught"],
            ),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var u = String(n);
            (this.logImpl(O.WARN, u), r("gkx")("26258"));
          }
          return a;
        }),
        (t.onTakeOver = function () {
          this.isTakeOver = !0;
        }),
        (t.registerErrorNotificationListener = function (t) {
          this.$14 = t;
        }),
        e
      );
    })();
    function W(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? O[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    function q(e) {
      var t = new Date(e),
        n = U(t.getMonth() + 1, 2),
        r = U(t.getDate(), 2),
        o = U(t.getHours(), 2),
        a = U(t.getMinutes(), 2),
        i = U(t.getSeconds(), 2),
        l = U(t.getMilliseconds(), 3);
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
    function U(e, t) {
      return String(e).padStart(t, "0");
    }
    function V(e) {
      try {
        var t =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem(P);
        if (
          (r("WAWebSessionStorage") == null ||
            r("WAWebSessionStorage").setItem(P, String(e)),
          t == null)
        )
          return null;
        var n = parseInt(t, 10);
        return Number.isNaN(n) ? null : n;
      } catch (e) {
        return null;
      }
    }
    function H(e, t, n) {
      return e.bulkPut(t);
    }
    function G() {
      try {
        return r("justknobx")._("8661");
      } catch (e) {
        return !0;
      }
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.firstKeptCount,
            r = t.limit,
            o = t.sharedLogOnly;
          if (!(n <= 0)) {
            var a = o
                ? e.where("line").between(R, X(n), !0, !1)
                : e.where("count").below(n),
              i = yield a.limit(r).primaryKeys(),
              l = yield K(e, n);
            (l != null && (!o || Y(l)) && i.push(l.line),
              i.length > 0 && (yield e.bulkDelete(i)));
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.where("count").aboveOrEqual(t).limit(1).toArray(),
            r = n[0];
          return r != null && ee(r) < t ? r : null;
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return R + e;
    }
    function Y(e) {
      return e != null && e.line >= R;
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.orderBy("count").limit(1).toArray(),
            r = n[0];
          return t == null || r == null ? 0 : t - ee(r) + 1;
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      var t, n, r;
      return (
        ((t = e.count) != null ? t : 0) -
        ((n = (r = e.lens) == null ? void 0 : r.length) != null ? n : 1) +
        1
      );
    }
    function te(e, t, n) {
      return e >= t && e < n;
    }
    function ne(e) {
      try {
        if (!Object.hasOwn(e, "parameters")) return;
        var t = Reflect.get(e, "parameters");
        if (t == null || typeof t != "object" || !Object.hasOwn(t, "error"))
          return;
        var n = Reflect.get(t, "error");
        return typeof n != "string"
          ? void 0
          : n.replace(/[\r\n]+/g, " ").slice(0, $);
      } catch (e) {
        return;
      }
    }
    var re = new B({
        logCapacityInDatabase: I,
        logsDBProvider: function () {
          return r("WAWebWAWCStorage").idb();
        },
      }),
      oe = re.log;
    ((l.STACK_TRACE_TAG = g),
      (l.SHARED_LOG_FIRST_SLOT = R),
      (l.MAX_BACKLOG_LINES_DELETED_PER_FLUSH = L),
      (l.LoggerImpl = B),
      (l.Logger = re),
      (l.log = oe));
  },
  98,
);

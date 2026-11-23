__d(
  "WAWebLoggerImpl",
  [
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
      f = "trace",
      g = "unhandled-rejection: Element not found. (0x80070490)",
      h = "0x80070490",
      y = 6048e5,
      C = 864e5 * 30,
      b = 5e3,
      v = 15e4,
      S = v,
      R = 1e3,
      L = 3 * 1024 * 1024,
      E = 60 * 1024 * 1024,
      k = r("gkx")("26258") ? b : v,
      I = r("gkx")("26258") ? L : E,
      T = 1024,
      D = 500,
      x = 200,
      $ = "wa_web_logger_session_start",
      P =
        (e = n("cr:19448") == null ? void 0 : n("cr:19448").persistRows) != null
          ? e
          : V,
      N =
        (s = n("cr:19448") == null ? void 0 : n("cr:19448").readLogs) != null
          ? s
          : o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs,
      M = "LTSXOo+_*-=.<^!#?".split("");
    function w() {
      return M[Math.round(Math.random() * (M.length - 1))];
    }
    var A = w() + w() + w() + w(),
      F = {};
    ((F[(F.ALL = 0)] = "all"),
      (F[(F.INFO = 1)] = "info"),
      (F[(F.LOG = 2)] = "log"),
      (F[(F.WARN = 3)] = "warn"),
      (F[(F.ERROR = 4)] = "error"),
      (F[(F.OFF = 5)] = "off"));
    var O = (function () {
      function e(e) {
        var t = this,
          n = e.logCapacityInDatabase,
          a = e.logsDBProvider,
          i = e.processTag;
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
          (this.$6 = r("gkx")("26258") ? null : U(this.$5)),
          (this.$7 = r("gkx")("16623")),
          (this.$8 = I),
          (this.$9 = 0),
          (this.$10 = new Array(D)),
          (this.$11 = 0),
          (this.$12 = 0),
          (this.$13 = !1),
          (this.maybeUpdateLogCapacityFromABProp = r("WAOnceWithReset")(
            async function () {
              (await t.$15(), (t.$3 = !0));
            },
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
          (this.logsDBProvider = a),
          (this.logCapacityInDatabase = n),
          (this.logs = new Array(n)),
          (this.microStep = 1 / this.logCapacityInDatabase),
          (this.processTag = i));
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
        (t.$15 = async function () {
          if (r("gkx")("26258")) {
            var e = o("WAWebABProps").getABPropConfigValue(
              "web_log_capacity_override",
            );
            if (
              ((e === 0 || e == null) &&
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_log_download",
                ) &&
                (e = v),
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
                var t = await o("WAStorageEstimator").estimateStorage();
                if (t.success) {
                  var n = t.value,
                    a = n.quota,
                    i = n.usage,
                    l = (a - i) / (1024 * 1024);
                  if (l < T) {
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
              var s = Math.min(e, v);
              if (s > this.logCapacityInDatabase) {
                var u = Date.now();
                (this.$16(s), this.$7 && s === v && (this.$8 = E));
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
        }),
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
              (this.$11 = (this.$11 + 1) % D),
              this.$12 < D && this.$12++);
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
            var e = (this.$11 - this.$12 + D) % D,
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
            !(t <= F.LOG && this.shouldSkipLoggingForProdLowEndDevice)
          ) {
            var e = Date.now(),
              s = W(e);
            if (!r("gkx")("26258"))
              try {
                t === F.ERROR && this.$14 && this.$14(n);
              } catch (e) {}
            var u = "";
            a &&
              (l != null && l.includes(f)
                ? (u =
                    `
` +
                    a.stack
                      .split(
                        `
`,
                      )
                      .slice(3).join(`
`))
                : (u =
                    `
` + o("WAWebNormalizeStack").normalizeStack(a, !0)));
            var c = [
                B(t),
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
              d = A + " " + s + (c ? c + " " : "") + n + u;
            this.logs[this.localCursor] != null &&
              this.$19(this.localCursor, !0);
            var m = t === F.ERROR;
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
        (t.$22 = async function (t, n) {
          var e;
          if (this.$3) return Math.min(this.logCapacityInDatabase, v);
          var r =
            (e = n == null ? void 0 : n.tableCapacity) != null
              ? e
              : await Q(t, n == null ? void 0 : n.count);
          return Math.min(Math.max(this.logCapacityInDatabase, r), v);
        }),
        (t.$1 = function () {
          var e = this;
          if (
            !(
              this.pending ||
              this.logs[this.writeFrom] == null ||
              this.isTakeOver
            )
          ) {
            var t = H();
            this.pending = this.logsDBProvider()
              .then(function (n) {
                return n.transaction("rw", n.logs, async function () {
                  var r,
                    o = await n.logs.orderBy("count").last();
                  o || (o = await n.logs.orderBy("timestamp").last());
                  for (
                    var a = o ? o.line + 1 : 0,
                      i =
                        ((r = o) == null ? void 0 : r.count) != null
                          ? o.count + 1
                          : a,
                      l = K(o) ? i : a,
                      s = await e.$22(n.logs, o),
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
                        line: t ? j(i) : l++ % e.logCapacityInDatabase,
                        log: c.m,
                        timestamp: e.runningTimestamp,
                        count: i++,
                        tableCapacity: s,
                      }));
                  }
                  (await P(n.logs, u, o),
                    await G(n.logs, {
                      firstKeptCount: i - s,
                      limit: e.$4 ? u.length + R : u.length,
                      sharedLogOnly: !t,
                    }));
                });
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
        (t.getLogs = function (t, n, o) {
          var e = this;
          (t === void 0 && (t = !1),
            n === void 0 && (n = Date.now() - y),
            o === void 0 && (o = 1 / 0));
          var a = Math.max(n, Date.now() - C),
            i = [];
          return (
            this.pending && i.push(this.pending),
            this.timer.isScheduled() &&
              (this.timer.forceRunNow(), this.pending && i.push(this.pending)),
            Promise.all(i)
              .then(function () {
                return e.logsDBProvider();
              })
              .then(function (e) {
                return N(e, a, t, o);
              })
              .then(function (t) {
                var n = [];
                if (e.$12 > 0)
                  for (var r = (e.$11 - e.$12 + D) % D, i = 0; i < e.$12; i++) {
                    var l = e.$10[(r + i) % D];
                    l != null && Y(l.t, a, o) && n.push(l);
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
            .then(async function (e) {
              await e.logs.clear();
            })
            .catch(r("WAWebNoop"))
            .finally(function () {
              ((e.localCursor = 0),
                (e.writeFrom = 0),
                (e.logs = new Array(e.logCapacityInDatabase)),
                e.$7 &&
                  ((e.$10 = new Array(D)),
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
            var s = J(t);
            s != null &&
              ((a += "; error: " + s), s.endsWith(h + ")") && (a = g));
          }
          if (
            (this.logImpl(
              F.ERROR,
              a,
              e == null ? void 0 : o("WAWebNormalizeStack").normalizeError(e),
              !0,
              ["uncaught"],
            ),
            r("gkx")("26258") || e != null,
            n != null)
          ) {
            var u = String(n);
            (this.logImpl(F.WARN, u), r("gkx")("26258"));
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
    function B(e) {
      return e === 1 || e === 2 || e === 3 || e === 4
        ? F[e]
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    function W(e) {
      var t = new Date(e),
        n = q(t.getMonth() + 1, 2),
        r = q(t.getDate(), 2),
        o = q(t.getHours(), 2),
        a = q(t.getMinutes(), 2),
        i = q(t.getSeconds(), 2),
        l = q(t.getMilliseconds(), 3);
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
    function q(e, t) {
      return String(e).padStart(t, "0");
    }
    function U(e) {
      try {
        var t =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem($);
        if (
          (r("WAWebSessionStorage") == null ||
            r("WAWebSessionStorage").setItem($, String(e)),
          t == null)
        )
          return null;
        var n = parseInt(t, 10);
        return Number.isNaN(n) ? null : n;
      } catch (e) {
        return null;
      }
    }
    function V(e, t, n) {
      return e.bulkPut(t);
    }
    function H() {
      try {
        return r("justknobx")._("8661");
      } catch (e) {
        return !0;
      }
    }
    async function G(e, t) {
      var n = t.firstKeptCount,
        r = t.limit,
        o = t.sharedLogOnly;
      if (!(n <= 0)) {
        var a = o
            ? e.where("line").between(S, j(n), !0, !1)
            : e.where("count").below(n),
          i = await a.limit(r).primaryKeys(),
          l = await z(e, n);
        (l != null && (!o || K(l)) && i.push(l.line),
          i.length > 0 && (await e.bulkDelete(i)));
      }
    }
    async function z(e, t) {
      var n = await e.where("count").aboveOrEqual(t).limit(1).toArray(),
        r = n[0];
      return r != null && X(r) < t ? r : null;
    }
    function j(e) {
      return S + e;
    }
    function K(e) {
      return e != null && e.line >= S;
    }
    async function Q(e, t) {
      var n = await e.orderBy("count").limit(1).toArray(),
        r = n[0];
      return t == null || r == null ? 0 : t - X(r) + 1;
    }
    function X(e) {
      var t, n, r;
      return (
        ((t = e.count) != null ? t : 0) -
        ((n = (r = e.lens) == null ? void 0 : r.length) != null ? n : 1) +
        1
      );
    }
    function Y(e, t, n) {
      return e >= t && e < n;
    }
    function J(e) {
      try {
        if (!Object.hasOwn(e, "parameters")) return;
        var t = Reflect.get(e, "parameters");
        if (t == null || typeof t != "object" || !Object.hasOwn(t, "error"))
          return;
        var n = Reflect.get(t, "error");
        return typeof n != "string"
          ? void 0
          : n.replace(/[\r\n]+/g, " ").slice(0, x);
      } catch (e) {
        return;
      }
    }
    var Z = new O({
        logCapacityInDatabase: k,
        logsDBProvider: function () {
          return r("WAWebWAWCStorage").idb();
        },
      }),
      ee = Z.log;
    ((l.STACK_TRACE_TAG = f),
      (l.SHARED_LOG_FIRST_SLOT = S),
      (l.MAX_BACKLOG_LINES_DELETED_PER_FLUSH = R),
      (l.LoggerImpl = O),
      (l.Logger = Z),
      (l.log = ee));
  },
  98,
);

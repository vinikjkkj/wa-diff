__d(
  "LaminarInfiniteDispatchDetector",
  [
    "AdsManagerAutoLoggingAppConfig",
    "FBLogger",
    "LaminarInfiniteDispatchDetectorSitevarConfig.experimental",
    "RSTLogForCrash",
    "clearInterval",
    "gkx",
    "performance",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "laminar_dispatches_overflow",
      u = (function () {
        function t() {
          var e = this;
          ((this.$1 = new Map()),
            (this.$2 = !1),
            (this.$3 = null),
            (this.$2 = r("gkx")("19083")),
            this.$2 &&
              (this.$3 = r("setInterval")(function () {
                e.$4();
              }, r("LaminarInfiniteDispatchDetectorSitevarConfig.experimental").cleanup_interval_ms)));
        }
        var n = t.prototype;
        return (
          (n.trackDispatch = function (n, o, a) {
            if (!this.$2) return !0;
            var t = this.$5(n, o, a),
              i = (e || (e = r("performance"))).now(),
              l = this.$1.get(t);
            return l == null
              ? (this.$1.set(t, {
                  count: 1,
                  firstDispatchTime: i,
                  lastDispatchTime: i,
                }),
                !0)
              : i - l.firstDispatchTime >
                  r("LaminarInfiniteDispatchDetectorSitevarConfig.experimental")
                    .time_window_ms
                ? (this.$1.set(t, {
                    count: 1,
                    firstDispatchTime: i,
                    lastDispatchTime: i,
                  }),
                  !0)
                : (l.count++,
                  (l.lastDispatchTime = i),
                  l.count >=
                    r(
                      "LaminarInfiniteDispatchDetectorSitevarConfig.experimental",
                    ).dispatch_limit &&
                  l.count %
                    r(
                      "LaminarInfiniteDispatchDetectorSitevarConfig.experimental",
                    ).dispatch_limit ===
                    0
                    ? (this.$6(t, n, o, a, l), !1)
                    : !0);
          }),
          (n.$5 = function (t, n, r) {
            return n != null
              ? r != null
                ? t + "|" + n + "|" + r
                : t + "|" + n
              : r != null
                ? t + "|" + r
                : t;
          }),
          (n.$6 = function (t, n, a, i, l) {
            var e = a != null ? " from " + a : "",
              u = i != null ? ":" + i : "";
            r("FBLogger")(s)
              .blameToPreviousFrame()
              .warn(
                'Infinite dispatch loop detected: Action "%s"%s%s dispatched %s times in %sms with AlSessionID: %s',
                n,
                e,
                u,
                l.count,
                r("LaminarInfiniteDispatchDetectorSitevarConfig.experimental")
                  .time_window_ms,
                o("AdsManagerAutoLoggingAppConfig") == null
                  ? void 0
                  : o("AdsManagerAutoLoggingAppConfig").session_id,
              );
            var c = {
              actionType: n,
              moduleInfo: e,
              lineInfo: u,
              count: l.count,
              TIME_WINDOW_MS: r(
                "LaminarInfiniteDispatchDetectorSitevarConfig.experimental",
              ).time_window_ms,
            };
            o("RSTLogForCrash").logForCrash(
              s + ":" + t,
              c,
              o("RSTLogForCrash").RSTLogMode.VALID_FOR_2_MINUTES,
              { immediateFlush: !0 },
            );
          }),
          (n.$4 = function () {
            var t = (e || (e = r("performance"))).now();
            for (var n of this.$1.entries()) {
              var o = n[0],
                a = n[1];
              t - a.lastDispatchTime >
                r("LaminarInfiniteDispatchDetectorSitevarConfig.experimental")
                  .time_window_ms *
                  2 && this.$1.delete(o);
            }
          }),
          (n.resetAction = function (t) {
            this.$1.delete(t);
          }),
          (n.resetAll = function () {
            this.$1.clear();
          }),
          (n.getStatus = function () {
            var e = [];
            for (var t of this.$1.entries()) {
              var n = t[0],
                r = t[1];
              e.push({ actionType: n, count: r.count });
            }
            return { enabled: this.$2, trackedActions: e };
          }),
          (n.destroy = function () {
            (this.$3 != null && (r("clearInterval")(this.$3), (this.$3 = null)),
              this.$1.clear());
          }),
          t
        );
      })(),
      c = new u(),
      d = {
        resetAction: function (t) {
          return c.resetAction(t);
        },
        resetAll: function () {
          return c.resetAll();
        },
        getStatus: function () {
          return c.getStatus();
        },
      };
    function m(e, t, n) {
      return c.trackDispatch(e, t, n);
    }
    l.trackDispatch = m;
  },
  98,
);
